import React, { Component } from 'react';
import ReactModal from 'react-modal';
import browserHistory from '../../utils/browserHistory';
import './Instruction.css';
import { Link } from 'react-router-dom';

class Instruction extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      count: 1

    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleNavigate = () => {
    browserHistory.push('/IndexPage');
  }

  render() {
    return (
      <div className="container">
        <h3><b>Instructions:</b></h3>
        <Link to="/login" className="button">Logout</Link>
        <div className="card red">
          <div className="card-body">Duration of the test - 60 mins. After 60 mins your answers will be auto submitted.</div>
        </div>
        <br />
        <div className="card green ">
          <div className="card-body">Total number of questions - 60. 20 questions each in 3 sections of Verbal, Logical and Aptitude (in the same order).</div>
        </div>
        <br />
        <div className="card yellow">
          <div className="card-body">Cannot Switch between Sections. Finish one to attend the next.</div>
        </div>
        <br />
        <div className="card pink">
          <div className="card-body">Do not refresh or press back key. If done, new questions will be presented with a penalty of 2 mins time.</div>
        </div>
        <br />
        <div className="card purple">
          <div className="card-body">If the application is not accessible, notify the invigilator in your room./div>
        </div>
          <br />
          <div className="card green">
            <div className="card-body">No negative marking.</div>
          </div>
          <br />
          <div className="card red">
            <div className="card-body">Submission on each section - Once answers for a section is submitted you cannot revisit that section.</div>
          </div>
          <button type="text" onClick={this.handleOpenModal}>Next</button>
        </div>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <div className="container">
            <div className="row " >
              <div className="col-sm-2"></div>
              <div className="col-sm-8"><h6 className="margin-top">You are about to start your test</h6></div>
              <div className="col-sm-2 margin-top close" onClick={this.handleCloseModal} ></div>

            </div>
            <div className="row mr-top-67">
              <div className="col-sm-2">
              </div>
              <div className="col-sm-1">
                <i className="fa fa-thumbs-up fontSize"></i>
              </div>
              <div className="col-sm-6">
                <p className="fnt-size-12">As soon as you click on "Yes" your time start</p>
                <p className="fnt-size-12">Click "No" back to the instruction page</p>
              </div>
              <div className="col-sm-3">
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-4">
                <center><p className="border-white" onClick={this.handleCloseModal}>No</p></center>
              </div>
              <div className="col-sm-4">
                <center><p className="border-green" onClick={this.handleNavigate}>Yes</p></center>
              </div>
              <div className="col-sm-2"></div>
            </div>
          </div>
        </ReactModal>
      </div>

    );
  }
}

export default Instruction;