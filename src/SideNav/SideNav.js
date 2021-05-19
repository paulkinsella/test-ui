import { NavLink } from "react-router-dom";
import "./SideNav.css";

const SideNav = () => {

  return (
    <div class="sidenav">
      <NavLink to={{
        pathname: '/',
      }}>
        <i class="fa fa-home fa-2x" aria-hidden="true"></i>
        {/* <a href="./">Home</a> */}
        {/* <i class="fa fa-home fa-2x" aria-hidden="true"></i> */}
      </NavLink>
      <NavLink to={{
        pathname: '/',
      }}>
        <i class="fa fa-sign-in fa-2x" aria-hidden="true"></i>
        {/* <a href="./">Login</a> */}
      </NavLink>
      <NavLink to={{
        pathname: '/',
      }}>
        <i class="fa fa-cog fa-2x" aria-hidden="true"></i>
        {/* <a href="./">Settings</a> */}
      </NavLink>
    </div>
  );
};

export default SideNav;