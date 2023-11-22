import { NavLink } from "react-router-dom";

const FooterTamplate = ({ to, children }) => {
  return (
    <NavLink to={to} style={{ padding: "20px", textDecoration: "none" }}>
      {children}
    </NavLink>
  );
};
export default FooterTamplate;
