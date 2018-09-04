import { Component } from "react";
import React from "react";
import './MainMenu.css'

class MainMenu extends Component {

  clickHandler() {
    console.log(this);
  }

  render() {
    const numbers = this.props.menu.model;
    const listItems = numbers.map((number) =>
      <li key={number.id} id={number.id} className="main-menu__list__element">
        <img className="main-menu__list__element__logo" src={number.image} alt={number.name}/>
        <label className="main-menu__list__element__text">{number.name}</label>
      </li>
    );
    console.log(listItems);
    return (
        <ul onClick={() => this.clickHandler()} className="main-menu__list">
          {listItems}
        </ul>
    );
  }
}

export default MainMenu;
