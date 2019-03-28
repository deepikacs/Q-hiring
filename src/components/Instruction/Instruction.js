import React, { Component } from 'react';
import './Instruction.css';
import { Link } from 'react-router-dom';

class Instruction extends Component {
  render() {
    return (
      <div className="container">
      <h3><b>Instructions:</b></h3>
      <Link to="/" className="button">Logout</Link>
      <div className="card red">
        <div className="card-body">Duration of the test - 60 mins. After 60 mins your answers will be auto submitted.</div>
      </div>
      <br/>
      <div className="card green">
        <div className="card-body">Total number of questions - 60. 20 questions each in 3 sections of Verbal, Logical and Aptitude (in the same order).</div>
      </div>
      <br/>
      <div className="card yellow">
        <div className="card-body">Cannot Switch between Sections. Finish one to attend the next.</div>
      </div>
      <br/>
      <div className="card pink">
        <div className="card-body">Do not refresh or press back key. If done, new questions will be presented with a penalty of 2 mins time.</div>                                                                                                                                                        
      </div>
      <br/>
      <div className="card purple">
        <div className="card-body">If the application is not accessible, notify the invigilator in your room.</div>
      </div>
      <br/>
      <div className="card green">
        <div className="card-body">No negative marking.</div>
      </div>
      <br/>
      <div className="card red">
        <div className="card-body">Submission on each section - Once answers for a section is submitted you cannot revisit that section.</div>
      </div>
      <button>Next</button>
    </div>
    );
  }
}

export default Instruction;