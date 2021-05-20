import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePageNew from './HomePageNew';
import Todo from './Todo/Todo';
import Overview from './Overview/Overview';
import InProgress from './InProgress/InProgress';
import VerPending from './VerPending/VerPending';
import DefectReport from './DefectReport/DefectReport';
import TotalDefects from './TotalDefects/TotalDefects';
import FixedDefects from "./FixedDefects/FixedDefects";

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
        <Route exact path='/inprogress' component={InProgress}></Route>
        <Route exact path='/verification-pending' component={VerPending}></Route>
        <Route exact path='/defect-report' component={DefectReport}></Route>
        <Route exact path='/total-defects' component={TotalDefects}></Route>
        <Route exact path='/fixed-defects' component={FixedDefects}></Route>
      </Switch>
    </BrowserRouter></>;
};

export default App;