import React from "react";
import DesktopCard from '../DesktopCard/DesktopCard';
import { NavLink } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';

const DefectReport = (props) => {
  const data = props.location.defectProps.defectData;

  const totalDefectNumber = data[0].fixedDefect.length + data[0].openDefects.length + data[0].todoDefects.length;

  return (
    <div className="container">
      <SideNav data={data} />
      <div className="headerSection">Defect Report</div>
      <DesktopCard>
        <div className="row">
          <NavLink to={{
            pathname: '/total-defects',
            totalDefectProps: {
              totalDefectData: data[0]
            }
          }} >
            <div className="card">
              <div className="name">Total Defects</div>
              <div className="value">{totalDefectNumber}</div>
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
          <NavLink to={{
            pathname: '/open-defects',
            openDefectProps: {
              openDefectData: data[0].openDefects
            }
          }} >
            <div className="card">
              <div className="name">Open Defects</div>
              <div className="value">{data[0].openDefects.length}</div>
            </div>
          </NavLink>
          <NavLink to={{
            pathname: '/todo-defects',
            todoDefectProps: {
              todoDefectData: data[0].todoDefects
            }
          }} >
            <div className="card">
              <div className="name">Todo Defects</div>
              <div className="value">{data[0].todoDefects.length}</div>
            </div>
          </NavLink>
        </div>
        {/* {getData()} */}
      </DesktopCard>
    </div>
  );
};

export default DefectReport;