import { Link, useLocation } from "react-router-dom";
import classes from './navlink.module.css';

export function NavLinkk({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to; 

  return (
    <Link
      to={to}
      className={isActive ? `${classes.link} ${classes.active}` : classes.link} // Apply active class if the link is active
    >
      {children}
    </Link>
  );
}
