import { NavLink } from "react-router-dom";
import "./SideNav.css";

const SideNav = (props) => {
  const {
    dateEnd,
    dateData,
    sprintData,
    data
  } = props;

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
          weeklyReportData: data,
          sprintData: sprintData,
          dateData: dateData,
          dateEnd: dateEnd
        }
      }}>
        <i class="fa fa-line-chart fa-2x" aria-hidden="true"></i>
      </NavLink>
    </div>
  );
};

export default SideNav;