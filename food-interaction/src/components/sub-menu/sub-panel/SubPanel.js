import { Component } from "react";
import './SubPanel.css';
import React from "react";

class SubPanel extends Component {
  constructor(props) {
    super(props);
    this.sum = 0;
  }

  componentWillUpdate() {
    this.sum = 0;
    for (let item in this.props.state) {
      if (this.props.state.hasOwnProperty(item)) {
        this.sum += this.props.state[item].count * this.props.state[item].cost;
      }
    }
    this.sum = SubPanel.gaussRound(this.sum, 2);
  }

  render() {
    if (!this.props.state || !Object.keys(this.props.state).length) return null;
    return [
      <span key="cost-label" className="cost-label">Summary: <span
            className="cost-label__sum">{this.sum}</span></span>,
      <div key="submit" className="button-submit">PAY</div>,
      <div key="view" className="viewed-list"> </div>
    ];
  }

  /**
   * for round number
   * @param num - number
   * @param decimalPlaces - number
   * @returns {number}
   */
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
