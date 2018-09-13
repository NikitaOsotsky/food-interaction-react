import { Component } from "react";
import './SubPanel.css';
import React from "react";

class SubPanel extends Component {
  render() {
      return [
          <span key={Math.random()} className="cost-label">Summary: <span className="cost-label__sum"> </span></span>,
          <div key={Math.random()} className="button-submit">PAY</div>,
          <div key={Math.random()} className="viewed-list"> </div>
      ];
  }
}

export default SubPanel;
