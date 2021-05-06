import React, { Component } from 'react'
import { SidebarData } from './sidebarData';
import { Link } from 'react-router-dom';
import '../css/main.css';

export class sidebar extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="nav-menu">
               <ul> 
                {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            </ul>
            </div>
        )
    }
}

export default sidebar
