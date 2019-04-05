import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { Question, AddOptionsDetails } from '../../Actions/QuestionAction';
import './Main.css';
import logo from '../../Images/logo.png';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 60,
      checked: '',
      answerArray: [],

    }
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  componentDidMount() {
    this.startTimer();
    this.props.Question();
  }
  tick() {
    this.setState({ count: (this.state.count - 1) })
  }
  startTimer() {
    clearInterval(this.timer);
    this.timer = setInterval(this.tick.bind(this), 60000)
  }
  stopTimer() {
    clearInterval(this.timer)
  }
  handleAnswer = (index, answerid, questionid) => {
    this.setState({ checked: index });
    const data = {
      optionid: answerid,
      questionid: questionid
    };

    if (this.state.answerArray.length > 0) {
      const index1 = this.state.answerArray.findIndex((res) => res.questionid === questionid);
      if (index1 != -1) {
        this.state.answerArray[index1]['optionid'] = answerid;
      }
      else {
        this.state.answerArray.push(data);
      }
    }
    else {
      this.state.answerArray.push(data);
    }
    this.setState({ answerArray: this.state.answerArray });

  }

  handleSubmit = () => {
    const selectedOptions = {
      userid: localStorage.getItem('userid'),
      questionAnswer: this.state.answerArray,
    };
    if (this.state.answerArray.length > 0) {
      this.props.AddOptionsDetails(selectedOptions);
    }
    else {
      alert("please select atleast one answer");
    }

  }

  render() {
    return (
      <div className="fluid-container">
        <p className="display-position padding-top11">{this.state.count}<br />mins</p>
        <center><img src={logo} alt="logo" className="img-align" /></center>
        <div className='row'>
          <div className='col-sm-5'></div>
          <div className='col-sm-6'>
          </div>
          <div className='col-sm-1'>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-5'></div>
          <div className='col-sm-6 paddLeft-41'> <h2>Verbal Test</h2></div>
          <div className='col-sm-1'></div>
        </div>
        <div>
          {this.props.questionDetails.map((item, index) =>
            (
              <div className="padding-left-120"
              ><span className="text-bold">{index + 1}.  {item.questtext}</span>
                {item.answers.map((ans, index) =>
                  (
                    <div className="lineHeight">
                      <input type="radio" name={ans.questionid}
                        value={ans._id} key={index}
                        onChange={this.handleAnswer.bind(this, index, ans._id, ans.questionid)}
                      /> {ans.anstext}
                    </div>
                  ))}
              </div>
            ))}
        </div>
        <br/>
        <div className='row'>
          <div className='col-sm-5'></div>
          <div className='col-sm-6'>
          </div>
          <div className='col-sm-1'>
            <p className="display-position padding-top23" onClick={this.handleSubmit} disabled={this.state.answerArray.length > 0}>Submit</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { error, questionDetails, optionDetails } = state.QuestionReducers;
  return { error, questionDetails, optionDetails };
};

export default withRouter(connect(mapStateToProps, { Question, AddOptionsDetails })(Main));
