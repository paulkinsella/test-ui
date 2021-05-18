import './App.css';
import React, { useState, useEffect } from "react";
import DesktopCard from './DesktopCard/DesktopCard';
import { NavLink } from 'react-router-dom';


const HomePage = () => {
  const url = './test.json';
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('currentSprint');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  console.log("Data", data);

  const currentSprintData = data[data.length - 1];
  console.log("currentSprintData", currentSprintData);

  const getData = () => {
    const filterResult = data.filter(item => !!item[filter] && item[filter] === search);
    console.log("FilterData", filterResult);
    return filterResult.map((item) => (
      <> <div className="row">
        <NavLink to={{
          pathname: '/todo',
          todoProps: {
            todoData: item.todo
          }
        }} >
          <div className="card">
            <div className="name">ToDo</div>
            <div className="value">{item.todo.length}</div>
          </div>
        </NavLink>
        <NavLink to={{
          pathname: '/inprogress',
          inProgressProps: {
            inProgressData: item.inProgress
          }
        }} >
          <div className="card">
            <div className="name">InProgress</div>
            <div className="value">{item.inProgress.length}</div>
          </div>
        </NavLink>
        <div className="card">
          <div className="name">Verification Pending</div>
          <div className="value">{item.varPending.length}</div>
        </div>
      </div>
        <div className="row">
          <div className="card">
            <div className="name">Test</div>
            <div className="value">{item.test.length}</div>
          </div>
          <div className="card">
            <div className="name">PO Acceptance</div>
            <div className="value">{item.poAcceptance.length}</div>
          </div>
          <div className="card">
            <div className="name">Done</div>
            <div className="value">{item.done.length}</div>
          </div>
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
                ? setSearch("")
                :
                setSearch(event.target.value)
            }
          ></input>
        </div>
        <NavLink to={{
          pathname: '/overview',
          todoProps: {
            todoData: data
          }
        }}>
          Overview
        </NavLink><i class="fa fa-line-chart" aria-hidden="true"></i>
        {getData()}
      </DesktopCard>
    </div>
  );
};

export default HomePage;