import React from "react";
import "./Overview.scss";
import DesktopCard from '../DesktopCard/DesktopCard';
import SideNav from '../SideNav/SideNav';
import ProcessPieChart from './ProcessPieChart';
import ProcessBarChart from './ProcessBarChart';

const OverviewTwo = (props) => {
  const className = 'c-ProcessOverview';

  const type = props.location.type;
  console.log("Overview Type", type);
  console.log("Overview Props", props.location);

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
  console.log("defectData", defectData);
  const fixedDefects = defectData.fixedDefect ? defectData.fixedDefect.length : '';
  console.log("Fixed Defects", fixedDefects);
  const openDefects = defectData.openDefects ? defectData.openDefects.length : '';
  console.log("openDefects", openDefects);
  const todoDefects = defectData.todoDefects ? defectData.todoDefects.length : '';
  console.log("todoDefects", todoDefects);
  const totalDefects = fixedDefects + openDefects + todoDefects;
  console.log("totalDefects", totalDefects);

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
    if (type === 'week') {
      return barChartData;
    } else if (type === 'defect') {
      return defectBarChart;
    } else {
      return '';
    }
  };

  const getPieChartData = () => {
    if (type === 'week') {
      return pieChartData;
    } else if (type === 'defect') {
      return defectPieChartData;
    } else {
      return '';
    }
  };




  return <div className="container">
    <SideNav />
    <div className="headerSection">Overview</div>
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
                {pieChartData.map((suite, index) => {
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
                  <tr>
                    <td>Tests Executed</td>
                    <td>{testExecuted}</td>
                  </tr>
                  <tr>
                    <td>Passed Test</td>
                    <td>{totalPassedtest}</td>
                  </tr>
                  <tr>
                    <td>Failed Test</td>
                    <td>{totalFailedtest}</td>
                  </tr>
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