import React from "react";
import DesktopCard from '../DesktopCard/DesktopCard';
import { NavLink } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';

const WeeklyReport = (props) => {
  const data = props.location.weeklyProps.weeklyData;

  console.log("Weekly Data", data);
  return (
    <div className="container">
      <SideNav />
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
              <div className="name">Passed</div>
              <div className="value">{data[0].passed.length}</div>
            </div>
          </NavLink>
          <NavLink to={{
            pathname: '/fixed-defects',
            // fixedDefectProps: {
            //   fixedDefectData: data[0].fixedDefect
            // }
          }} >
            <div className="card">
              <div className="name">Failed</div>
              <div className="value">{data[0].failed.length}</div>
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
              <div className="value">{data[0].testExecuted.length}</div>
            </div>
          </NavLink>
          <NavLink to={{
            pathname: '/todo-defects',
            // todoDefectProps: {
            //   todoDefectData: data[0].todoDefects
            // }
          }} >
            <div className="card">
              <div className="name">Tests inProgress</div>
              <div className="value">{data[0].testInProgress.length}</div>
            </div>
          </NavLink>
        </div>
        {/* {getData()} */}
      </DesktopCard>
    </div>
  );
};

export default WeeklyReport;