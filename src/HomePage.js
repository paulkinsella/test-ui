import './App.css';
import React, { useState, useEffect } from "react";
import DesktopCard from './DesktopCard/DesktopCard';
import { NavLink } from 'react-router-dom';


const HomePage = () => {
  const url = './data.json';
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('currentSprint');
  const [search, setSearch] = useState('6');

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const getFilter = () => {
    const filterResult = data.filter(item => !!item[filter] && item[filter] === search);;
    return filterResult.map((item, index) => (
      <><div className="row">
        <NavLink exact activeClassName="current" to='/todo'>
          <div className="card">
            <div className="name">ToDo</div>
            <div className="value">{item.todo}</div>
          </div>
        </NavLink>
        <div className="card">
          <div className="name">InProgress</div>
          <div className="value">{item.inProgress}</div>
        </div>
        <div className="card">
          <div className="name">Verification Pending</div>
          <div className="value">{item.verPending}</div>
        </div>
      </div>
        <div className="row">
          <div className="card">
            <div className="name">TEST</div>
            <div className="value">{item.test}</div>
          </div>
          <div className="card">
            <div className="name">PO Acceptance</div>
            <div className="value">{item.poAcceptance}</div>
          </div>
          <div className="card">
            <div className="name">Done</div>
            <div className="value">{item.done}</div>
          </div>
        </div>
        <div className="info">
          <div className="sprint">Sprint: {item.currentSprint}</div>
          <div className="week">Week <br />{item.weekStart} - {item.weekEnd}</div>
          <i className="fa fa-arrow-left"></i>{' '}<i className="fa fa-arrow-right"></i>
        </div></>
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
        <NavLink exact activeClassName="current" to='/overview'>
          <a href="./">Overview</a>
        </NavLink>
        {getFilter()}
        {/* <Test /> */}
      </DesktopCard>
    </div>
  );
};

export default HomePage;