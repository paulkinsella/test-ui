// import React from "react";
// import "./Overview.css";
// import DesktopCard from '../DesktopCard/DesktopCard';
// import SideNav from '../SideNav/SideNav';
// import { Chart } from 'react-charts';

// const Overview = (props) => {

//   const overviewData = props.location.overviewProps.overviewData;
//   console.log("Overview Data", overviewData);


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

//   return <div className="container">
//     <SideNav />
//     <div className="headerSection">Overview</div>
//     <DesktopCard>
//       <div
//         style={{
//           width: '100%',
//           height: '300px'
//         }}
//       >
//         <Chart data={data} axes={axes} />
//       </div>
//       {/* <img src={overview} alt="overview" /> */}
//     </DesktopCard>
//   </div>;
// };

// export default Overview;