import { NavLink, Outlet } from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
  let invoices = getInvoices();

  return (
    <div style={{ display: "flex" }}>
      <nav style={{ borderRight: "solid 1px", padding: "1rem" }}>
        {invoices.map((invoices) => (
          <NavLink
            style={({ isActive }) => {
              console.log(isActive);
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
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
