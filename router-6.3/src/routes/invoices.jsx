import { NavLink, Outlet, useSearchParams, useLocation } from "react-router-dom";
import { getInvoices } from "../data";

function QueryNavLink({ to, ...props}) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props}/>
}

export default function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("filter"));

  return (
    <div style={{ display: "flex" }}>
      <nav style={{ borderRight: "solid 1px", padding: "1rem" }}>
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {invoices
          .filter((invoice) => {
            let filter = searchParams.get("filter");
            // console.log("filter : ", filter);
            if (!filter) return true;

            let name = invoice.name.toLowerCase();
            // console.log("name : ", name);
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoices) => (
            <QueryNavLink
              style={({ isActive }) => {
                // console.log(isActive);
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : "",
                };
              }}
              key={invoices.number}
              to={`/invoices/${invoices.number}`}
            >
              {invoices.name}
            </QueryNavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
