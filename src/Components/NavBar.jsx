import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/showcart">Show Cart</Link>
      </div>
    </div>
  );
}
