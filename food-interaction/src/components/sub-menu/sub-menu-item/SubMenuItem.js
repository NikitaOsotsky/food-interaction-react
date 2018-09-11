import { Component } from "react";
import React from "react";
import './SubMenuItem.css';

class SubMenuItem extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  componentWillReceiveProps() {

  }

  render() {
    if (this.state.count) {
      this.marker =
        <span className="sub-menu__list__item__mark">{this.state.count? this.state.count: ''}</span>
    } else {
      this.marker = null;
    }
    return(
        <li onClick={(e)=>this.props.onClick(e, this)}
            onContextMenu={(e)=>this.props.onContextMenu(e, this)}
            className="sub-menu__list__item">
          {this.props.liName}
          <span className="sub-menu__list__item__cost">{this.props.liCost}</span>
          {this.marker}
        </li>
    );
  }
}

export default SubMenuItem;
