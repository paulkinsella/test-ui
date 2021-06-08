import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePageNew from './HomePageNew';
import Todo from './Todo/Todo';
import Overview from './Overview/Overview';
import OverviewTwo from './Overview/OverviewTwo';
import InProgress from './InProgress/InProgress';
import DefectReport from './DefectReport/DefectReport';
import TotalDefects from './TotalDefects/TotalDefects';
import FixedDefects from "./FixedDefects/FixedDefects";
import OpenDefects from './OpenDefects/OpenDefects';
import TodoDefects from './TodoDefects/TodoDefects';
import WeeklyReport from './WeeklyReport/WeeklyReport';
import UserStories from './UserStories/UserStories';

const App = () => (
  <div className='app'>
    <Main />
  </div>
);

const Main = () => {
  return <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePageNew}></Route>
        <Route exact path='/todo' component={Todo}></Route>
        <Route exact path='/overview' component={Overview}></Route>
        <Route exact path='/overview-two' component={OverviewTwo}></Route>
        <Route exact path='/inprogress' component={InProgress}></Route>
        <Route exact path='/defect-report' component={DefectReport}></Route>
        <Route exact path='/total-defects' component={TotalDefects}></Route>
        <Route exact path='/fixed-defects' component={FixedDefects}></Route>
        <Route exact path='/open-defects' component={OpenDefects}></Route>
        <Route exact path='/todo-defects' component={TodoDefects}></Route>
        <Route exact path='/weekly-report' component={WeeklyReport}></Route>
        <Route exact path='/user-stories' component={UserStories}></Route>
      </Switch>
    </BrowserRouter></>;
};

export default App;