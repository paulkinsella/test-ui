import React, { useState, useEffect } from "react";
import DesktopCard from '../DesktopCard/DesktopCard';
import { NavLink } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';

const DefectReport = (props) => {
  const type = 'defect';
  const url = './sampleResponse.json';
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const testArray = data.issues ? data.issues : '';
  const totalDefectArray = testArray ? testArray.filter(item => item.fields.issuetype.name === 'Bug') : '';
  const totalDefects = totalDefectArray.length;
  const doneDefects = totalDefectArray ? totalDefectArray.filter(item => item.fields.status.name === "Done") : '';
  const openDefects = totalDefectArray ? totalDefectArray.filter(item => item.fields.status.name === "Verification Pending") : '';
  const inProgress = totalDefectArray ? totalDefectArray.filter(item => item.fields.status.name === "In Progress") : '';

  return (
    <div className="container">
      <SideNav
        type={type}
        totalDefectArray={totalDefectArray}
        openDefects={openDefects}
        doneDefects={doneDefects}
        inProgress={inProgress} />
      <div className="headerSection">Defect Report</div>
      <DesktopCard>
        <div className="row">
          <NavLink to={{
            pathname: '/total-defects',
            totalDefectProps: {
              totalDefectData: totalDefectArray
            }
          }} >
            <div className="card">
              <div className="name">Total Defects</div>
              <div className="value">{totalDefects}</div>
            </div>
          </NavLink>
          <NavLink to={{
            pathname: '/fixed-defects',
            fixedDefectProps: {
              fixedDefectData: doneDefects
            }
          }} >
            <div className="card">
              <div className="name">Fixed Defects</div>
              <div className="value">{doneDefects.length}</div>
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
              <div className="name">In Progress</div>
              <div className="value">{inProgress.length}</div>
            </div>
          </NavLink>
          <NavLink to={{
            pathname: '/todo-defects',
            todoDefectProps: {
              todoDefectData: openDefects
            }
          }} >
            <div className="card">
              <div className="name">Verification pending</div>
              <div className="value">{openDefects.length}</div>
            </div>
          </NavLink>
        </div>
      </DesktopCard>
    </div>
  );
};

export default DefectReport;