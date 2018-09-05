import { Component } from "react";
import React from "react";
import './MainMenu.css'
import SubMenu from '../sub-menu/SubMenu';
import * as ReactDOM from "react-dom";

class MainMenu extends Component {

  static clickHandler(e) {//ToDO: add div
    if(e.target.tagName !== 'LI' && e.target.parentElement.tagName !== 'LI') {
      return;
    }
    if(e.target.tagName !== 'LI' && e.target.parentElement.tagName === 'LI') {
      e.target = e.target.parentElement;
      this.clickHandler(e);
    } else {
      ReactDOM.render(<SubMenu target={e.target}/>, document.querySelector('.sub-menu'));
    }
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
        <ul onClick={(e) => MainMenu.clickHandler(e)} className="main-menu__list">
          {listItems}
        </ul>
    );
  }
}

export default MainMenu;
