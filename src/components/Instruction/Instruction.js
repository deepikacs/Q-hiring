import React, { Component } from 'react';
import ReactModal from 'react-modal';
import browserHistory from '../../utils/browserHistory';
import './Instruction.css';

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
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  handleNavigate = () => {
  browserHistory.push('/main');
  }

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
       <button type ="text" onClick={this.handleOpenModal}>Next</button>

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
            <div className="col-sm-8"><h6 className="marg-top">You are about to start your test</h6></div>
            <div className="col-sm-2 marg-top close" onClick={this.handleCloseModal} ></div>
              
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
            <br/>
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
