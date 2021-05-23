import React, { useState, useEffect } from "react";
import DesktopCard from './DesktopCard/DesktopCard';
import { NavLink } from 'react-router-dom';
import './App.css';


const HomePageNew = () => {
  const url = './testtwo.json';
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('currentSprint');
  const [search, setSearch] = useState('1');


  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const getData = () => {
    const filterResult = data.filter(item => !!item[filter] && item[filter] === search);
    console.log("FilterData", filterResult);
    return filterResult.map((item) => (
      <> <div className="row">
        <NavLink to={{
          pathname: '/defect-report',
          defectProps: {
            defectData: item.defectReport,
          }
        }} >
          <div className="card">
            <div className="name">Defect Report</div>
            <div className="value"><i class="fa fa-bug fa-1x"></i></div>
          </div>
        </NavLink>
        <NavLink to={{
          pathname: '/weekly-report',
          weeklyProps: {
            weeklyData: item.TestsSuites,
            sprintData: item.currentSprint,
            dateData: item.weekStart,
            dateEnd: item.weekEnd,
          }
        }} >
          <div className="card">
            <div className="name">Weekly Report</div>
            <div className="value"><i class="fa fa-clipboard fa-1x"></i></div>
          </div>
        </NavLink>

      </div>
        <div className="info">
          <div className="sprint">Sprint: {item.currentSprint}</div>
          <div className="week">Week <br />{item.weekStart} - {item.weekEnd}</div>
          <i className="fa fa-arrow-left"></i>{' '}<i className="fa fa-arrow-right"></i>
        </div>
      </>

    ));
  };

  return (
    <div className="container">
      <div className="headerSection">Arachas Phase: 3</div>
      <DesktopCard>
        <div className="filter">
          <select
            className="searchFilter"
            name="filter"
            id="filter"
            onChange={(event) =>
              setFilter(event.target.value)
            }>
            <option>currentSprint</option>
            <option>weekStart</option>
            <option>weekEnd</option>
          </select>
          <input
            className="search"
            type="text"
            placeholder="Search"
            onChange={(event) =>
              event.target.value === ""
                ? setSearch("6")
                :
                setSearch(event.target.value)
            }
          ></input>
        </div>
        {getData()}
      </DesktopCard>
    </div>
  );
};

export default HomePageNew;