import './ProcessOverview.scss';

import PropTypes from "prop-types";
import React from 'react';

import ProcessBarChart from './ProcessBarChart';
import ProcessPieChart from './ProcessPieChart';

const getDuration = (startTime, endTime) => {
  const startTimeTimestamp = new Date(`01-01-01 ${startTime}`).getTime();
  const endTimeTimestamp = new Date(`01-01-01 ${endTime}`).getTime();

  const prependZero = num => num < 10 ? `0${num}` : `${num}`;

  const distance = endTimeTimestamp -startTimeTimestamp;
  const numOfHours = Math.floor(distance / 1000 / 60 / 60);
  const numOfMinutes = Math.floor(distance / 1000 / 60) % 60;
  const numOfSeconds = Math.floor(distance / 1000) % 60;
  return `${prependZero(numOfHours)}:${prependZero(numOfMinutes)}:${prependZero(numOfSeconds)}`;
}

const ProcessOverview = ({ process }) => {
  const className = 'c-ProcessOverview';

  const {
    TestsRun,
    TestsNotRun,
    TestsPassed,
    TestsFailed, TestsSuites,
    ProcessID,
    StartDate,
    ClientName,
    StartTime,
    FinishTime,
    ReleaseName,
  } = process;

  const pieChartData = TestsSuites.map(suite => {
    return {
      name: suite.TestName,
      value: suite.TestsNotRun + suite.TestsRun,
    };
  });

  return (
    <div className={className}>
      <h3 className={`${className}--title`}>
        <div>Overview of Process ID: {ProcessID} Release: <span className={`${className}--titleValue`}>{ReleaseName}</span></div>
        <div>Customer Name: <span className={`${className}--titleValue`}>{ClientName}</span></div>
      </h3>
      <div className={`${className}--titleDetails`}>
        <div>Date Started: {StartDate} {StartTime}</div>
        <div>Time Taken: {getDuration(StartTime, FinishTime)}</div>
      </div>

      <div className={`${className}__chartContainer`}>
        <div>
          <div>
            <ProcessPieChart data={pieChartData}/>
          </div>
          <div>
            <div className={`${className}--testSuitesPieChartData`}>
              {TestsSuites.map((suite, index) => {
                return (<div key={`test-suite-${index}`} className={`${className}--testSuitesPieChartDataItem`}>{suite.TestName}: <span
                  className={`${className}--testSuitesPieChartDataValue`}>{suite.TestsRun + suite.TestsNotRun}</span>
                </div>);
              })}
            </div>

          </div>
        </div>
        <div>
          <ProcessBarChart data={TestsSuites}/>
          <div>
            <table className={`${className}--testSuitesTotals`}>
              <tbody>
              <tr>
                <td>Total Number of Tests</td>
                <td>{TestsRun + TestsNotRun}</td>
              </tr>
              <tr>
                <td>Test Run</td>
                <td>{TestsRun}</td>
              </tr>
              <tr>
                <td>Test Passed</td>
                <td>{TestsPassed}</td>
              </tr>
              <tr>
                <td>Test Failed</td>
                <td>{TestsFailed}</td>
              </tr>
              <tr>
                <td>Test Not Run</td>
                <td>{TestsNotRun}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

ProcessOverview.propTypes = {
  process: PropTypes.object
}

export default ProcessOverview;
