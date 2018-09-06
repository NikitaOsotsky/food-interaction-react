import { Component } from "react";
import React from "react";

class SubMenuItem extends Component {
  constructor() {
    super();
  }

  render() {
    return(
        <li key={Math.random()} className="sub-menu__list__item">
          1
          <span className="sub-menu__list__item__cost">1</span>
        </li>
    );
  }
}

export default SubMenuItem;
