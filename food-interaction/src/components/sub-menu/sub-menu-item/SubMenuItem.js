import { Component } from "react";
import React from "react";
import './SubMenuItem.css';
import * as ReactDOM from "react-dom";
import SubPanel from "../sub-panel/SubPanel";

class SubMenuItem extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
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

  componentDidUpdate() {
    const name = this.props.liName;
    this.props.parent.setState((prevState, props) => {
      return {itemsState: Object.assign(prevState.itemsState, {[name]: this.state.count})
    }});
      ReactDOM.render(<SubPanel itemName={this.props.liName} itemCost={this.props.liCost}
                                itemCount={this.state.count}/>, document.querySelector('.sub-menu__sub-panel'));
  }
}

export default SubMenuItem;
