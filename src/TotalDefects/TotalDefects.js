import React, { useState } from "react";
import RenderTableData from "../RenderTableData/RenderTableData";
import DesktopCard from '../DesktopCard/DesktopCard';
import SideNav from '../SideNav/SideNav';
import './TotalDefects.scss';

const TotalDefects = (props) => {
  const className = 'c-TotalDefects';
  const [filter, setFilter] = useState('key');
  const [search, setSearch] = useState("AR");
  const orgData = props.location.totalDefectProps.totalDefectData;

  const data = orgData;

  console.log("Test Data", data);

  const getData = () => {
    return data.map((item, index) => (
      <RenderTableData item={item} index={index} />
    ));
  };

  const getFilter = () => {
    const test = data ?
      data.filter(item => !!item[filter] && item[filter].includes(search))
      : '';
    return test.map((item, index) => (
      <RenderTableData item={item} index={index} />

    ));

  };

  return (
    <div className={`${className}`}>
      <div className={`${className}__container`}>
        <SideNav />
        <div className={`${className}__headerSection`}>Total Defects</div>
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
              {/* {getData()} */}
              {search === " " ? getData() : getFilter()}
            </table>
          </div>
        </DesktopCard>
      </div>
    </div>
  );
};

export default TotalDefects;