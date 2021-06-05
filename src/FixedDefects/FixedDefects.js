import React, { useState } from "react";
import RenderTableData from "../RenderTableData/RenderTableData";
import DesktopCard from '../DesktopCard/DesktopCard';
import SideNav from '../SideNav/SideNav';

const FixedDefects = (props) => {
  const [filter, setFilter] = useState('key');
  const [search, setSearch] = useState("AR");
  const data = props.location.fixedDefectProps.fixedDefectData;

  console.log("Fixed Defects", data);

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

  console.log("Fixed Defect", data);
  return (
    <div className="container">
      <SideNav />
      <div className="headerSection">Total Defects</div>
      <DesktopCard>
        <div className="filter">
          <select
            className="searchFilter"
            name="filter"
            id="filter"
            onChange={(event) =>
              setFilter(event.target.value)
            }>
            <option>key</option>
            <option>name</option>
            <option>assignee</option>
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
              <td className="cellHeading">Assignee</td>
              <td className="cellHeading">Priority</td>
            </tr>
            {search === " " ? getData() : getFilter()}
          </table>
        </div>
      </DesktopCard>
    </div>
  );
};

export default FixedDefects;