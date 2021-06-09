import { NavLink } from "react-router-dom";
import "./SideNav.css";

const SideNav = (props) => {
  const {
    type,
    dateEnd,
    dateData,
    sprintData,
    data,
    totalDefectArray,
    openDefects,
    doneDefects,
    inProgress,
    totalNumOfTest,
    numberOfPassedTests,
    numberOfFailedTests
  } = props;

  console.log("Side Nav Type", totalDefectArray);

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
          totalNumOfTest: totalNumOfTest,
          numberOfPassedTests: numberOfPassedTests,
          numberOfFailedTests: numberOfFailedTests

        },
        defectReportProps: {
          totalDefectData: totalDefectArray,
          totalOpendefects: openDefects,
          totalDoneDefects: doneDefects,
          totalInprogressDefects: inProgress

        }
      }}>
        <i class="fa fa-line-chart fa-2x" aria-hidden="true"></i>
      </NavLink>
    </div>
  );
};

export default SideNav;