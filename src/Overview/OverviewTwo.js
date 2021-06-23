import React from "react";
import "./Overview.scss";
import DesktopCard from '../DesktopCard/DesktopCard';
import SideNav from '../SideNav/SideNav';
import ProcessPieChart from './ProcessPieChart';
import ProcessBarChart from './ProcessBarChart';
import { WEEK_REPORT_TYPE } from '../Constants/Constants';
import { DEFECT_REPORT_TYPE } from '../Constants/Constants';

const OverviewTwo = (props) => {
  const className = 'c-ProcessOverview';
  const type = props.location.type;

  //Weekly Details
  const testExecuted = props.location.weeklyReportProps.totalNumOfTest;
  console.log("Overview Result", testExecuted);

  const paassedtest = props.location.weeklyReportProps.numberOfPassedTests;
  console.log("Passed tests", paassedtest);

  const totalFailedtest = props.location.weeklyReportProps.numberOfFailedTests;

  const barChartData = [{
    "TestExecuted": testExecuted,
  },
  {
    "PassedTest": paassedtest
  },
  {
    "FailedTest": totalFailedtest,
  }];

  const pieChartData = [{
    name: "Pass",
    value: paassedtest
  },
  {
    name: "Fail",
    value: totalFailedtest
  },
  {
    name: "TestExecuted",
    value: testExecuted
  }];

  const getWeeklyReportTable = () => {
    return (
      <><tr>
        <td>Tests Executed</td>
        <td>{testExecuted}</td></tr>
        <tr>
          <td>Passed Test</td>
          <td>{paassedtest}</td>
        </tr>
        <tr>
          <td>Failed Test</td>
          <td>{totalFailedtest}</td>
        </tr>
      </>
    );
  };


  //Defect Details
  const defectData = props.location.defectReportProps ? props.location.defectReportProps.totalDefectData : [];
  const openDefects = props.location.defectReportProps ? props.location.defectReportProps.totalOpendefects : [];
  const doneDefects = props.location.defectReportProps ? props.location.defectReportProps.totalDoneDefects : [];
  const inProgressDefects = props.location.defectReportProps ? props.location.defectReportProps.totalInprogressDefects : [];
  const totalOpenDefects = openDefects ? openDefects.length : '';
  const totalDoneDefects = doneDefects ? doneDefects.length : '';
  const totalInprogressDefects = inProgressDefects ? inProgressDefects.length : '';
  const totalDefects = defectData ? defectData.length : '';



  // console.log("OVERVIEW TEST", defectData);

  const defectBarChart = [{
    "TotalDefects": totalDefects,
    "VerificationPending": totalOpenDefects,
    "FixedDefects": totalDoneDefects,
    "InProgress": totalInprogressDefects
  }];
  console.log("TEST", totalOpenDefects);

  const defectPieChartData = [{
    name: "TotalDefects",
    value: totalDefects
  },
  {
    name: "VerificationPending",
    value: totalOpenDefects
  },
  {
    name: "FixedDefects",
    value: totalDoneDefects
  },
  {
    name: "InProgress",
    value: totalInprogressDefects
  }];

  const getDefectReportTable = () => {
    return (
      <><tr>
        <td>Total Defects</td>
        <td>{totalDefects}</td></tr>
        <tr>
          <td>Verification Pending</td>
          <td>{totalOpenDefects}</td>
        </tr>
        <tr>
          <td>Fixed Defects</td>
          <td>{totalDoneDefects}</td>
        </tr>
        <tr>
          <td>InProgress Defects</td>
          <td>{totalInprogressDefects}</td>
        </tr>
      </>
    );
  };

  const getBarChartData = () => {
    if (type === WEEK_REPORT_TYPE) {
      return barChartData;
      // return '';
    } else if (type === DEFECT_REPORT_TYPE) {
      return defectBarChart;
    } else {
      return '';
    }
  };

  const getPieChartData = () => {
    if (type === WEEK_REPORT_TYPE) {
      return pieChartData;
      // return '';
    } else if (type === DEFECT_REPORT_TYPE) {
      return defectPieChartData;
    } else {
      return '';
    }
  };

  return <div className="container">
    <SideNav />
    <div className="headerSection">{type === WEEK_REPORT_TYPE ? 'Weekly Overview' : 'Defect Overview'}</div>
    <DesktopCard>
      <div className={className}>
        <h3 className={`${className}--title`}>
          <div>Overview of Sprint:{1} <span className={`${className}--titleValue`}>{''}</span></div>
          <div>Arachas Phase: 3 <span className={`${className}--titleValue`}>{' '}</span></div>
        </h3>
        <div className={`${className}--titleDetails`}>
          <div>Date Started: {'10-10-2021'}</div>
          <div>Date Ended: {'10-10-2021'}</div>
        </div>

        <div className={`${className}__chartContainer`}>
          <div>
            <div>
              <ProcessPieChart data={getPieChartData()} type={type} />
            </div>
            <div>
              <div className={`${className}--testSuitesPieChartData`}>
                {type === WEEK_REPORT_TYPE ? pieChartData.map((suite, index) => {
                  return (<div key={`test-suite-${index}`} className={`${className}--testSuitesPieChartDataItem`}>{suite.name}: <span
                    className={`${className}--testSuitesPieChartDataValue`}>{suite.value}</span>
                  </div>);
                }) : defectPieChartData.map((suite, index) => {
                  return (<div key={`test-suite-${index}`} className={`${className}--testSuitesPieChartDataItem`}>{suite.name}: <span
                    className={`${className}--testSuitesPieChartDataValue`}>{suite.value}</span>
                  </div>);
                })}
              </div>

            </div>
          </div>
          <div>
            <ProcessBarChart data={getBarChartData()} type={type} />
            <div>
              <table className={`${className}--testSuitesTotals`}>
                <tbody>
                  {type === WEEK_REPORT_TYPE ? getWeeklyReportTable() : getDefectReportTable()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DesktopCard>
  </div>;

};

export default OverviewTwo;