import React, { useState, useEffect } from "react";
import DesktopCard from '../DesktopCard/DesktopCard';
import { NavLink } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';

const WeeklyReport = (props) => {
  const url = './sampleResponse.json';
  const [dataTwo, setDataTwo] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((dataTwo) => {
        setDataTwo(dataTwo);
      });
  }, []);

  //get Sprint Related data
  const sprintDataOrg = dataTwo ? dataTwo.issues : '';
  console.log("Sprint Data", dataTwo);

  //get all stories with a test subtask
  const result = sprintDataOrg ? sprintDataOrg.filter(item => item.fields.issuetype.name.includes('Test')) : '';
  console.log("Text Exection Stories", result);

  //get total number of user stories with tests
  const totalNumOfTest = result ? result.length : '';
  console.log("total number of user stories with tests", totalNumOfTest);

  //get all failed tests
  const failedTests = result ? result.filter(item => item.fields.customfield_10441.value === 'Pass') : '';
  console.log("Failed tests", failedTests);

  //get number of failed tests 
  const numberOfFailedTests = failedTests.length;
  console.log("Number of failed tests", numberOfFailedTests);

  //get all failed tests
  const passedTests = result ? result.filter(item => item.fields.customfield_10441.value === 'Fail') : '';
  console.log("Passed tests", passedTests);

  //get number of failed tests 
  const numberOfPassedTests = passedTests.length;
  console.log("Number of Passed tests", numberOfPassedTests);

  const type = 'week';

  // console.log("Weekly Data", data);
  return (
    <div className="container">
      <SideNav type={type} totalNumOfTest={totalNumOfTest} numberOfPassedTests={numberOfPassedTests} numberOfFailedTests={numberOfFailedTests} />
      <div className="headerSection">Weekly Test Report</div>
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
              <div className="value">{numberOfPassedTests}</div>
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
              <div className="value">{numberOfFailedTests}</div>
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
              <div className="value">{totalNumOfTest}</div>
            </div>
          </NavLink>
          <NavLink to={{
            pathname: '/user-stories',
            userStoryProps: {
              userStoryData: result
            }
          }} >
            <div className="card">
              <div className="name">User Stories</div>
              <div className="value">{totalNumOfTest}</div>
            </div>
          </NavLink>
        </div>
        {/* {getData()} */}
      </DesktopCard>
    </div>
  );
};

export default WeeklyReport;