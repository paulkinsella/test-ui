import React from "react";
import "./Overview.css";
import { NavLink } from "react-router-dom";
import DesktopCard from '../DesktopCard/DesktopCard';
import overview from '../images/overview.PNG';

const Overview = () => {
  return <div className="container">
    <div className="headerSection">Overview</div>
    <DesktopCard>
      <NavLink exact activeClassName="current" to='./'>
        <i class="fa fa-home fa-2x" aria-hidden="true"></i>
      </NavLink>
      <img src={overview} alt="overview" />
    </DesktopCard>
  </div>;
};

export default Overview;