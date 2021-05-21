import React from "react";
import "./Overview.scss";
import DesktopCard from '../DesktopCard/DesktopCard';
import SideNav from '../SideNav/SideNav';
import { Chart } from 'react-charts';
import ProcessPieChart from './ProcessPieChart';
import ProcessBarChart from './ProcessBarChart';

const OverviewTwo = (props) => {
  const className = 'c-ProcessOverview';
  const data = props.location.weeklyReportProps.weeklyReportData;
  console.log("Overview Two", data);
  const {
    Result,
    ClientName,
    StartDate,
    StartTime,
    ReleaseName,
    TestsNotRun,
    TestsRun,
    TestsFailed, TestsSuites,
    TestsPassed
  } = props;
  // console.log("OverviewTwo data", data);
  // const data = props.location.weeklyProps.weeklyData;
  // console.log("OverviewTwo", data);
  //   const overviewData = props.location.overviewProps.overviewData;
  //   console.log("Overview Data", overviewData);
  console.log("Overview Props", props);
  console.log("Test Suites", TestsSuites);

  const pieChartData = data.map(suite => {
    return {
      name: suite.Result,
      value: suite.TestsPassed + suite.TestsFailed,
    };
  });


  //   const data = React.useMemo(
  //     () => [
  //       [
  //         ["Todo", overviewData.todo.length],
  //         ["InProgress", overviewData.inProgress.length],
  //         ["Verification Pending", overviewData.varPending.length],
  //         ["Test", overviewData.test.length],
  //         ["POAcceptance", overviewData.poAcceptance.length],
  //         ["Done", overviewData.done.length]],
  //     ],
  //     []
  //   );

  //   const axes = React.useMemo(
  //     () => [
  //       { primary: true, type: 'ordinal', position: 'bottom' },
  //       { type: 'ordinal', position: 'left' }
  //     ],
  //     []
  //   );

  return <div className="container">
    <SideNav />
    <div className="headerSection">Overview</div>
    <DesktopCard>
      {/* <div
        style={{
          width: '100%',
          height: '300px'
        }}
      >
        <Chart data={data} axes={axes} />
      </div> */}
      {/* <img src={overview} alt="overview" /> */}

      <div className={className}>
        <h3 className={`${className}--title`}>
          <div>Overview of Process ID: 1234 Release: <span className={`${className}--titleValue`}>{ReleaseName}</span></div>
          <div>Customer Name: <span className={`${className}--titleValue`}>{ClientName}</span></div>
        </h3>
        <div className={`${className}--titleDetails`}>
          <div>Date Started: {StartDate} {StartTime}</div>
          <div>Time Taken: {"getDuration(StartTime, FinishTime)"}</div>
        </div>

        <div className={`${className}__chartContainer`}>
          <div>
            <div>
              <ProcessPieChart data={pieChartData} />
            </div>
            <div>
              <div className={`${className}--testSuitesPieChartData`}>
                {data.map((suite, index) => {
                  return (<div key={`test-suite-${index}`} className={`${className}--testSuitesPieChartDataItem`}>{suite.TestArea}: <span
                    className={`${className}--testSuitesPieChartDataValue`}>{suite.TestName + suite.TestID}</span>
                  </div>);
                })}
              </div>

            </div>
          </div>
          <div>
            <ProcessBarChart data={data} />
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
                    <td>{Result}</td>
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
    </DesktopCard>
  </div>;
};

export default OverviewTwo;