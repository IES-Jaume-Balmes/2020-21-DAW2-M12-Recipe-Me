import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SidebarData } from './SidebarData';


export class sidebar extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                
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
            </div>
        )
    }
}

export default sidebar
