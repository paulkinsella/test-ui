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
  const data = props.location.weeklyReportProps.weeklyReportData;
  const currentSprint = props.location.weeklyReportProps.sprintData;
  const sprintdate = props.location.weeklyReportProps.dateData;
  const dateEnd = props.location.weeklyReportProps.dateEnd;
  const testExecuted = data.length;
  const testPassedArray = data.filter(item => item.Result === "Pass");
  const totalPassedtest = testPassedArray.length;
  const testFailedArray = data.filter(item => item.Result === "Fail");
  const totalFailedtest = testFailedArray.length;

  const barChartData = [{
    "TestExecuted": testExecuted,
  },
  {
    "PassedTest": totalPassedtest
  },
  {
    "FailedTest": totalFailedtest,
  }];

  const pieChartData = [{
    name: "Pass",
    value: totalPassedtest
  },
  {
    name: "Fail",
    value: totalFailedtest
  },
  {
    name: "TestExecuted",
    value: testExecuted
  }];


  //Defect Details
  const defectData = props.location.defectReportProps ? props.location.defectReportProps.allDefectData[0] : [];
  const fixedDefects = defectData.fixedDefect ? defectData.fixedDefect.length : '';
  const openDefects = defectData.openDefects ? defectData.openDefects.length : '';
  const todoDefects = defectData.todoDefects ? defectData.todoDefects.length : '';
  const totalDefects = fixedDefects + openDefects + todoDefects;

  const defectBarChart = [{
    "TotalDefects": totalDefects,
    "OpenDefects": openDefects,
    "FixedDefects": fixedDefects,
    "TodoDefects": todoDefects
  }];

  const defectPieChartData = [{
    name: "TotalDefects",
    value: totalDefects
  },
  {
    name: "OpenDefects",
    value: openDefects
  },
  {
    name: "FixedDefects",
    value: fixedDefects
  },
  {
    name: "TodoDefects",
    value: todoDefects
  }];

  const getBarChartData = () => {
    if (type === WEEK_REPORT_TYPE) {
      return barChartData;
    } else if (type === DEFECT_REPORT_TYPE) {
      return defectBarChart;
    } else {
      return '';
    }
  };

  const getPieChartData = () => {
    if (type === WEEK_REPORT_TYPE) {
      return pieChartData;
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
          <div>Overview of Sprint:{currentSprint} <span className={`${className}--titleValue`}>{''}</span></div>
          <div>Arachas Phase: 3 <span className={`${className}--titleValue`}>{' '}</span></div>
        </h3>
        <div className={`${className}--titleDetails`}>
          <div>Date Started: {sprintdate}</div>
          <div>Date Ended: {dateEnd}</div>
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
                  {type === WEEK_REPORT_TYPE ? <tr>
                    <td>Tests Executed</td>
                    <td>{testExecuted}</td>
                  </tr> : <tr>
                    <td>TotalDefects</td>
                    <td>{totalDefects}</td>
                  </tr>}
                  {type === WEEK_REPORT_TYPE ? <tr>
                    <td>Passed Test</td>
                    <td>{totalPassedtest}</td>
                  </tr> : <tr>
                    <td>OpenDefects</td>
                    <td>{openDefects}</td>
                  </tr>}
                  {type === WEEK_REPORT_TYPE ? <tr>
                    <td>Failed Test</td>
                    <td>{totalFailedtest}</td>
                  </tr> : <tr>
                    <td>FixedDefects</td>
                    <td>{fixedDefects}</td>
                  </tr>}
                  {type !== WEEK_REPORT_TYPE ? <tr>
                    <td>TodoDefects</td>
                    <td>{todoDefects}</td>
                  </tr> : ''}
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