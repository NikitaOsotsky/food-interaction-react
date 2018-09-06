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

  /**
   *
   * @param id type number
   * @returns {*}
   */
  static getDataForRender(id) {
    return (
        SubMenu.backEndData()[id]
    );
  }

  /**
   * @param object type object
   * @param property type string
   * @returns string
   */
  getDataLi(object, property) {
    switch (property) {
      case 'name':
        for (let key in object)
        this.key = key;
        return this.key;
      case 'cost':
        for (let key in object)
         this.key = key;
        return object[this.key];
      default: break;
    }
  }

  static submenuClick(e, mouseButton) {
    switch (mouseButton) {
      case 'right':
        console.log('right');
        break;
      case 'left':
        console.log('left');
        break;
      default: return;
    }
  }

  render() {
    console.log(this.state);
    switch (this.state.visible) {
      case 1:
        this.IDtarget = this.state.target.id;
        this.items = SubMenu.getDataForRender(this.IDtarget);//Пришёл массив с одной или несколькими менюхами
        this.h4 = this.items.map((key) =>
            <h4 key={key.menuName} className="sub-menu__header slave-header">{key.menuName}
              <ul onClick={(e) => SubMenu.submenuClick(e, 'left')} onContextMenu={(e) => {
                e.preventDefault();
                SubMenu.submenuClick(e, 'right')
              }} className="sub-menu__list">
                {this.liItems = key.menu.map((liItem) =>
                    <li key={Math.random()} className="sub-menu__list__item">
                      {this.liName = this.getDataLi(liItem, 'name')}
                      <span className="sub-menu__list__item__cost">{this.liCost = this.getDataLi(liItem, 'cost')}</span>
                    </li>
                )}
              </ul>
            </h4>
        );
        return (
            <div>
              <span className="close-div">&#9587</span>
              <img className="sub-menu__logo" src={this.state.target.firstChild.src}
                   alt={this.state.target.firstChild.alt}/>
              <h3 className="sub-menu__header main-header">{this.state.target.lastChild.textContent}</h3>
              {this.h4}
            </div>
        );
      case 0:
        return (
            <div> </div>
        );
      default: return;
    }
  }

  /**
   * temp function
   * @returns static data
   */
  static backEndData() {
    return ({
      "5b7bfe58ee0c1be19742829d": [
        {
          "menu": [
            {"Cheeseburger Happy Meal": 8.79},
            {"Hamburger Happy Meal": 8.38},
            {"4pc. Chicken McNuggets": 7.48}
          ],
          "menuName": "Happy Meal"
        },
        {
          "menu": [
            {"Espresso": 3.20},
            {"Cappuccino": 4.80},
            {"Café Latte": 4.85},
            {"Flat White": 5.35},
            {"Long Black": 6.21},
            {"Irish Coffee": 7.02}
          ],
          "menuName": "McCafe"
        }
      ],
      "5b7bfe580d8e915e56833d79": [
        {
          "menu": [
            {"Pizza with tomatoes": 14.90},
            {"Hamburger Happy Meal": 8.50}
          ],
          "menuName": "Pizzas"
        },
        {
          "menu": [
            {"Bagels with jam": 17.30},
            {"Bagels Original": 15.55}
          ],
          "menuName": "Bagels"
        }
      ],
      "5b7bfe585b6f166bafcda840": [
        {
          "menu": [
            {"Big stake": 10.00},
            {"Cold water": 0.10},
            {"Small stake with chicken": 2.50},
            {"Big pizza with mushrooms": 19.90}
          ],
          "menuName": "Standard"
        }
      ],
      "5b7bfe5889ab5df2a2be0226": [
        {
          "menu": [
            {"Pizza": 12.20},
            {"Coffee": 2.40},
            {"Tea": 1.90}
          ],
          "menuName": "Humanity"
        }
      ],
      "5b7bfe58720f193c5be11a46": [
        {
          "menu": [
            {"Pizza with tomatoes": 10.79},
            {"Hamburger Happy Meal": 8.10},
            {"Large beer": 3.50},
            {"Big pizza with mushrooms": 2.90}
          ],
          "menuName": "Menu"
        }
      ]
    })
  }
}

export default SubMenu;
