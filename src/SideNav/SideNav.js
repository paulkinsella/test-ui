import { NavLink } from "react-router-dom";
import "./SideNav.css";

const SideNav = (props) => {
  const {
    type,
    dateEnd,
    dateData,
    sprintData,
    data
  } = props;

  console.log("Side Nav Type", type);

  return (
    <div className="sidenav">
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
        type: type,
        weeklyReportProps: {
          weeklyReportData: data,
          sprintData: sprintData,
          dateData: dateData,
          dateEnd: dateEnd,

        },
        defectReportProps: {
          allDefectData: data,

        }
      }}>
        <i class="fa fa-line-chart fa-2x" aria-hidden="true"></i>
      </NavLink>
    </div>
  );
};

export default SideNav;