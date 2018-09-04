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

  getDataForRender(id) {
    return (
        SubMenu.backEndData()[id]
    );
  }

  render() {
    console.log(this.state);
    switch (this.state.visible) {
      case 1:
        this.IDtarget = this.state.target.id;
        this.items = this.getDataForRender(this.IDtarget);//Пришёл массив с одной или несколькими менюхами

        for (let key in this.items) {
          console.log(this.items[key].menuName);
          console.log(this.items[key].menu);
        }

        return (
            <div>

            </div>
            //TODO: show form && render data by li.id from json
        );
      case 0:
        return (
            <div> </div>//TODO: hide form && clear data
        );
      default: return;
    }

  }

  static backEndData() {
    return ({
      "5b7bfe58ee0c1be19742829d": [
        {
          "menu": {
            "12313": {"Cheeseburger Happy Meal": 8.79},
            "97684": {"Hamburger Happy Meal": 8.38},
            "32445": {"4pc. Chicken McNuggets": 7.48}
          },
          "menuName": "Happy Meal"
        },
        {
          "menu": {
            "83638": {"Espresso": 3.20},
            "29737": {"Cappuccino": 4.80},
            "78483": {"Café Latte": 4.85},
            "90965": {"Flat White": 5.35},
            "28363": {"Long Black": 6.21},
            "78866": {"Irish Coffee": 7.02}
          },
          "menuName": "McCafe"
        }
      ],
      "5b7bfe580d8e915e56833d79": [
        {
          "menu": {
            "73673": {"Pizza with tomatoes": 14.90},
            "04863": {"Hamburger Happy Meal": 8.50}
          },
          "menuName": "Pizzas"
        },
        {
          "menu": {
            "45566": {"Bagels with jam": 17.30},
            "23432": {"Bagels Original": 15.55}
          },
          "menuName": "Bagels"
        }
      ],
      "5b7bfe585b6f166bafcda840": [
        {
          "menu": {
            "98377": {"Big stake": 10.00},
            "91833": {"Cold water": 0.10},
            "08976": {"Small stake with chicken": 2.50},
            "78338": {"Big pizza with mushrooms": 19.90}
          },
          "menuName": "Standard"
        }
      ],
      "5b7bfe5889ab5df2a2be0226": [
        {
          "menu": {
            "73654": {"Pizza": 12.20},
            "86733": {"Coffee": 2.40},
            "05786": {"Tea": 1.90}
          },
          "menuName": "Humanity"
        }
      ],
      "5b7bfe58720f193c5be11a46": [
        {
          "menu": {
            "73673": {"Pizza with tomatoes": 10.79},
            "04863": {"Hamburger Happy Meal": 8.10},
            "18773": {"Large beer": 3.50},
            "92762": {"Big pizza with mushrooms": 2.90}
          },
          "menuName": "Menu"
        }
      ]
    })
  }
}

export default SubMenu;
