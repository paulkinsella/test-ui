import React, { useState, useEffect } from "react";
import "./InProgress.css";
import DesktopCard from '../DesktopCard/DesktopCard';
import { NavLink } from "react-router-dom";
import RenderTableData from "../RenderTableData/RenderTableData";

const InProgress = (props) => {
  const [filter, setFilter] = useState('number');
  const [search, setSearch] = useState("AR");
  const data = props.location.inProgressProps.inProgressData;

  const getData = () => {
    return data.map((item, index) => (
      <RenderTableData item={item} index={index} />
    ));
  };

  const getFilter = () => {
    const filterResult = data ? data.filter(item => !!item[filter] && item[filter].includes(search)) : '';
    return filterResult.map((item, index) => (
      <RenderTableData item={item} index={index} />
    ));
  };

  return (
    <div className="container">
      <div className="headerSection">InProgress</div>
      <DesktopCard>
        <NavLink exact activeClassName="current" to='./'>
          <i class="fa fa-home fa-2x" aria-hidden="true"></i>
        </NavLink>
        <div className="filter">
          <select
            name="filter"
            id="filter"
            onChange={(event) =>
              setFilter(event.target.value)
            }>
            <option>number</option>
            <option>name</option>
            <option>assigne</option>
          </select>
          <input
            className="search"
            type="text"
            placeholder="Search"
            onChange={(event) =>
              event.target.value === " "
                ? setSearch(" ")
                :
                setSearch(event.target.value)
            }
          ></input>
        </div>
        <div className="tableContainer">
          <table>
            <tr>
              <td className="cellHeading">Number</td>
              <td className="cellHeading">Name</td>
              <td className="cellHeading">Assigne</td>
            </tr>
            {search === " " ? getData() : getFilter()}
          </table>
        </div>
      </DesktopCard>
    </div>
  );
};

export default InProgress;