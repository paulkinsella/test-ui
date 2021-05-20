import React, { useState, useEffect } from "react";
import DesktopCard from '../DesktopCard/DesktopCard';
import { NavLink } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';

const DefectReport = (props) => {
  const data = props.location.defectProps.defectData;

  console.log("Defect Data", data);
  return (
    <div className="container">
      <SideNav />
      <div className="headerSection">Defect Report</div>
      <DesktopCard>
        <div className="row">
          <NavLink to={{
            pathname: '/total-defects',
            totalDefectProps: {
              totalDefectData: data[0].totalDefect
            }
          }} >
            <div className="card">
              <div className="name">Total Defects</div>
              <div className="value">{data[0].totalDefect.length}</div>
            </div>
          </NavLink>
          <NavLink to={{
            pathname: '/fixed-defects',
            fixedDefectProps: {
              fixedDefectData: data[0].fixedDefect
            }
          }} >
            <div className="card">
              <div className="name">Fixed Defects</div>
              <div className="value">{data[0].fixedDefect.length}</div>
            </div>
          </NavLink>
        </div>

        <div className="row">
          <div className="card">
            <div className="name">Open Defects</div>
            <div className="value">{data[0].openDefects.length}</div>
          </div>
          <div className="card">
            <div className="name">Todo Defects</div>
            <div className="value">{data[0].todoDefects.length}</div>
          </div>
        </div>
        {/* {getData()} */}
      </DesktopCard>
    </div>
  );
};

export default DefectReport;