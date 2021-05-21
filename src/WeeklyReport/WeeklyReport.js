import React from "react";
import DesktopCard from '../DesktopCard/DesktopCard';
import { NavLink } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';

const WeeklyReport = (props) => {
  const data = props.location.weeklyProps.weeklyData;
  console.log("Weekly Data", data);
  const numOfTests = data.length;
  const failedtest = data.filter(item => item.Result === "Fail");
  console.log("Test", failedtest);
  const failedTestAmount = failedtest.length;
  const passedtest = data.filter(item => item.Result === "Pass");
  console.log("Passed test", passedtest);
  const passedTestAmount = passedtest.length;

  // console.log("Weekly Data", data);
  return (
    <div className="container">
      <SideNav data={data} />
      <div className="headerSection">Weekly Report</div>
      <DesktopCard>
        <div className="row">
          <NavLink to={{
            pathname: '/total-defects',
            // totalDefectProps: {
            //   totalDefectData: data[0].totalDefect
            // }
          }} >
            <div className="card">
              <div className="name"> Tests Passed</div>
              <div className="value">{passedTestAmount}</div>
            </div>
          </NavLink>
          <NavLink to={{
            pathname: '/fixed-defects',
            // fixedDefectProps: {
            //   fixedDefectData: data[0].fixedDefect
            // }
          }} >
            <div className="card">
              <div className="name">Tests Failed</div>
              <div className="value">{failedTestAmount}</div>
            </div>
          </NavLink>
        </div>

        <div className="row">
          <NavLink to={{
            pathname: '/open-defects',
            // openDefectProps: {
            //   openDefectData: data[0].openDefects
            // }
          }} >
            <div className="card">
              <div className="name">Tests Executed</div>
              <div className="value">{numOfTests}</div>
            </div>
          </NavLink>
          <NavLink to={{
            pathname: '/todo-defects',
            // todoDefectProps: {
            //   todoDefectData: data[0].todoDefects
            // }
          }} >
            <div className="card">
              <div className="name">User Stories</div>
              <div className="value">{2}</div>
            </div>
          </NavLink>
        </div>
        {/* {getData()} */}
      </DesktopCard>
    </div>
  );
};

export default WeeklyReport;