import React, { Component } from 'react';
import './IndexPage.css';
import logo from '../image/logo.png';

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 60
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  componentDidMount() {
    this.startTimer();
  }
  startcount() {
    this.setState({ count: (this.state.count - 1) })
  }
  startTimer() {
    clearInterval(this.timer);
    this.timer = setInterval(this.startcount.bind(this), 60000)
  }
  stopTimer() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div className="fluid-container">
        <div className='row'>
          <div className='col-sm-5'></div>
          <div className='col-sm-6'>
            <img src={logo} alt="logo" className="img-align" />
          </div>
          <div className='col-sm-1'>
            <p className="dot padding-top11">{this.state.count}<br />mins</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-5'></div>
          <div className='col-sm-6'> <h2>Verbal Test</h2></div>
          <div className='col-sm-1'></div>
        </div>
        <div>
        </div>
        <div className='row'>
          <div className='col-sm-5'></div>
          <div className='col-sm-6'>
          </div>
          <div className='col-sm-1'>
            <p className="dot padding-top">Submit</p>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexPage;
