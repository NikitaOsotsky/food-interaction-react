import { Component } from "react";
import React from "react";
import './SubMenu.css'

class SubMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: 1,
      target: props.target
    };
  }

  componentWillReceiveProps(props) {
    this.setState((prevState) => {
      return {
        visible: prevState.visible && prevState.target === props.target ? 0: 1,
        target: props.target
      };
    });
  }

  render() {
    console.log(this.state);
    switch (this.state.visible) {
      case 1:
        return (
            <div>1{Math.random()}</div>//TODO: show form && render data by li.id from json
        );
      case 0:
        return (
            <div>0{Math.random()}</div>//TODO: hide form && clear data
        );
      default: return;
    }

  }
}

export default SubMenu;
