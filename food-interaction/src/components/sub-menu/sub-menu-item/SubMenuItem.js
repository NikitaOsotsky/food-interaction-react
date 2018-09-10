import { Component } from "react";
import React from "react";
import './SubMenuItem.css';

class SubMenuItem extends Component {

  render() {
    return(
        <li onClick={(e)=>this.props.onClick(e)} onContextMenu={(e)=>this.props.onContextMenu(e)} className="sub-menu__list__item">
          {this.props.liName}
          <span className="sub-menu__list__item__cost">{this.props.liCost}</span>
        </li>
    );
  }
}

export default SubMenuItem;
