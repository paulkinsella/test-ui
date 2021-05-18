import React from "react";
import "./InProgress.css";
import DesktopCard from '../DesktopCard/DesktopCard';
import { NavLink } from "react-router-dom";

const InProgress = (props) => {
  const data = props.location.inProgressProps.inProgressData;

  const getData = () => {
    return data.map((item, index) => (
      <tr className="customRow" index={index}>
        <td>{item.number}</td>
        <td>{item.name}</td>
        <td>{item.assigne}</td>
      </tr>
    ));
  };

  return (
    <div className="container">
      <div className="headerSection">Todo</div>
      <DesktopCard>
        <NavLink exact activeClassName="current" to='./'>
          <i class="fa fa-home fa-2x" aria-hidden="true"></i>
        </NavLink>
        <div className="tableContainer">
          <table>
            <tr>
              <td className="cellHeading">Number</td>
              <td className="cellHeading">Name</td>
              <td className="cellHeading">Assigne</td>
            </tr>
            {getData()}
          </table>
        </div>
      </DesktopCard>
    </div>
  );
};

export default InProgress;