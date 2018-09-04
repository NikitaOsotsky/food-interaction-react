import { Component } from "react";
import React from "react";
import './MainMenu.css'

class MainMenu extends Component {

  clickHandler() {

  }

  render() {
    const items = this.props.menu.model;
    const listItems = items.map((item) =>
      <li key={item.id} id={item.id} className="main-menu__list__element">
        <img className="main-menu__list__element__logo" src={item.image} alt={item.name}/>
        <label className="main-menu__list__element__text">{item.name}</label>
      </li>
    );
    return (
        <ul onClick={() => this.clickHandler()} className="main-menu__list">
          {listItems}
        </ul>
    );
  }
}

export default MainMenu;
