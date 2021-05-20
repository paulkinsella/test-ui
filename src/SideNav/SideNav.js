import { NavLink } from "react-router-dom";
import "./SideNav.css";

const SideNav = (props) => {
  const {
    data
  } = props;
  console.log("Side Nav data", data);
  return (
    <div class="sidenav">
      <NavLink to={{
        pathname: '/',
      }}>
        <i class="fa fa-home fa-2x" aria-hidden="true"></i>
      </NavLink>
      <NavLink to={{
        pathname: '/',
      }}>
        <i class="fa fa-sign-in fa-2x" aria-hidden="true"></i>
      </NavLink>
      <NavLink to={{
        pathname: '/',
      }}>
        <i class="fa fa-cog fa-2x" aria-hidden="true"></i>
      </NavLink>
      <NavLink to={{
        pathname: '/overview-two',
        weeklyReportProps: {
          weeklyReportData: data
        }
      }}>
        <i class="fa fa-line-chart fa-2x" aria-hidden="true"></i>
      </NavLink>
    </div>
  );
};

export default SideNav;