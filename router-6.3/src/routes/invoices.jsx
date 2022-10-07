import { Link } from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div style={{ padding: "flex" }}>
      <nav style={{ borderRight: "solid 1px", padding: "1rem" }}>
        {invoices.map((invoices) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            key={invoices.number}
            to={`/invoices/${invoices.number}`}
          >
            {invoices.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
