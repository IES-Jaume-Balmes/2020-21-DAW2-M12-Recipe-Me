import React, { Component } from 'react'

import Sidebar from '../components/sidebar';
import Content from '../components/content';
function Main() {
    return (
        <div>
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