import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Todo from './Todo/Todo';
import Overview from './Overview/Overview';
import InProgress from './InProgress/InProgress';
import VerPending from './VerPending/VerPending';

const App = () => (
  <div className='app'>
    <Main />
  </div>
);

const Main = () => {
  return <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/todo' component={Todo}></Route>
        <Route exact path='/overview' component={Overview}></Route>
        <Route exact path='/inprogress' component={InProgress}></Route>
        <Route exact path='/verification-pending' component={VerPending}></Route>
      </Switch>
    </BrowserRouter></>;
};

export default App;