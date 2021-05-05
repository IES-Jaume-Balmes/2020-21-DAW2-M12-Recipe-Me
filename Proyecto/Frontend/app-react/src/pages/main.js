import React, { Component } from 'react'
import '../css/main.css'
import Sidebar from '../components/sidebar';
import Content from './Content';
function Main() {
    return (
    <div className='container'>
      <div className='sideBar'>
        <Sidebar />               
      </div>
      <div>
        <Content /> 
      </div>
    </div>
      
    );
  }
  
  export default Main;