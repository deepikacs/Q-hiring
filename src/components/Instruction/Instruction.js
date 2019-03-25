import React, { Component } from 'react';
import './Instruction.css';

class Instruction extends Component {
  render() {
    return (
        <div className="container">
        <h3>Instruction</h3>
        <div className="card red">
          <div className="card-body">Basic card</div>
        </div>
        <br/>
        <div className="card ">
          <div className="card-body">Primary card</div>
        </div>
        <br/>
        <div className="card bg-success text-white">
          <div className="card-body">Success card</div>
        </div>
        <br/>
        <div className="card bg-info text-white">
          <div className="card-body">Info card</div>
        </div>
        <br/>
        <div className="card bg-warning text-white">
          <div className="card-body">Warning card</div>
        </div>
        <br/>
        <div className="card bg-danger text-white">
          <div className="card-body">Danger card</div>
        </div>
        <br/>
        <div className="card bg-secondary text-white">
          <div className="card-body">Secondary card</div>
        </div>
       <button>Next</button>
      </div>
    );
  }
}

export default Instruction;