import { Component } from "react";
import './SubPanel.css';
import React from "react";

class SubPanel extends Component {
  constructor(props) {
    super(props);
    this.summaryCost = 0;
    this.allChosenItems = {};
  }

  componentWillMount() {
    this.summaryCost += this.props.itemCost;
    this.allChosenItems[this.props.itemName] = this.props.itemCost * this.props.itemCount;
    console.log('componentWillMount ', this.allChosenItems);
  }

  componentWillUpdate() {
    console.log('componentWillUpdate ', this.allChosenItems);
  }

  render() {
    console.log('render ', this.allChosenItems);
    this.summaryCost = SubPanel.gaussRound(this.summaryCost, 2);
    return [
      <span key={Math.random()} className="cost-label">Summary: <span
            className="cost-label__sum">{this.summaryCost}</span></span>,
      <div key={Math.random()} className="button-submit">PAY</div>,
      <div key={Math.random()} className="viewed-list"> </div>
    ];
  }

  static gaussRound(num, decimalPlaces) {
    let d = decimalPlaces || 0,
    m = Math.pow(10, d),
    n = +(d ? num * m : num).toFixed(8),
    i = Math.floor(n), f = n - i,
    e = 1e-8,
    r = (f > 0.5 - e && f < 0.5 + e) ?
    ((i % 2 === 0) ? i : i + 1) : Math.round(n);
    return d ? r / m : r;
  }
}

export default SubPanel;
