import React, { Component } from 'react'
import '../css/main.css'
import Sidebar from '../components/sidebar';
import Content from './Content';
import Home from './Home';
import {Link,Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

function Main() {
    return (
      <Router>
        <div className='container'>
      
      <div className='sideBar'>
        
        <Sidebar />         
      </div>
      <div>
        
        <Switch>
          <Route path="/home" exact>
            <Home />
          </Route>
        </Switch>
        
      </div>
      
    </div>
    </Router>
    );
  }
  
  export default Main;