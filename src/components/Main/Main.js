import React, { Component } from 'react';
import logo from '../../Images/qwinix.png';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { Question, AddOptionsDetails, nextPage } from '../../Actions/QuestionAction';
import './Main.css';
import {Link } from 'react-router-dom';
import Thankyou from './Thankyou';

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
  handleAnswer = (index, ansid, qid) => {
    this.setState({ checked: index });
    console.log(this.state.checked);
    const data = {
      optionid: ansid,
      questionid: qid
    };

    if (this.state.answerArray.length > 0) {
      const index1 = this.state.answerArray.findIndex((res) => res.questionid === qid);
      if (index1 != -1) {
        this.state.answerArray[index1]['optionid'] = ansid;
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
    var userid = localStorage.getItem('userid');
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

  showNextPage = () => {
    debugger;
    const { page, pagesNames, nextPage } = this.props;
    const newPage = page + 1;
    if(newPage < pagesNames.length){
      nextPage(newPage);
    }else{
      nextPage(0);
    }
  }


  render() {
    const {page, questionDetails, pagesNames} = this.props;
    return (
      <div className="fluid-container horiztle-scrl">
        <div className='row'>
          <div className='col-sm-5'></div>
          <div className='col-sm-6'>
            <img src={logo} alt="logo" className="img-align" />
          </div>
          <div className='col-sm-1'>
            <p className="dot paddTop-11">{this.state.count}<br />mins</p>
          </div>
        </div>
        
        <div>
        {questionDetails.map((item, index) =>
            {
              if(pagesNames[page] === item.name){
              return <div>
              <div className='row'>
              <div className='col-sm-5'></div>
              <div className='col-sm-6 paddLeft-41'> <h2>{item.name}</h2></div>
              <div className='col-sm-1'></div>
    
            </div> 
              {item.questions.map((qns,index)=>(
                <div className="paddleft-115 text-bold">{index + 1}. {qns.questtext}
                {qns.options.map((opt,index)=>
                (
                  <div className="lineHeight">
                  <input type="radio" name={opt.questionid}
                    value={opt._id} key={index}

                    onChange={this.handleAnswer.bind(this, index, opt._id, opt.questionid)}
                  /> {opt.anstext}
                </div> 
                ))}
                </div>
              ))}
              <button onClick={this.showNextPage}>Next</button>

                {/* {item.questions.map((ans, index) =>
                  (
                    <div className="lineHeight">
                      <input type="radio" name={ans.questionid}
                        value={ans._id} key={index}

                        onChange={this.handleAnswer.bind(this, index, ans._id, ans.questionid)}
                      /> {ans.anstext}
                    </div>
                  ))} */}

              {/* </div> */}
              </div>
            }
        })}
        </div>

        {/* last */}
        <div className='row'>
          <div className='col-sm-5'></div>
          <div className='col-sm-6'>
          </div>
          <div className='col-sm-1'>
          <Link to={"/thankyou"} className="dot paddTop-25" onClick={this.handleSubmit} disabled={this.state.answerArray.length > 0}>Submit</Link>
          </div>
        </div>
        {/* <Link to={"/thankyou"}>Result</Link> */}
        {/* <p>message={this.props.optionDetails}</p>  */}
        {/* <Thankyou message={this.props.optionDetails} /> */}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { error, questionDetails, optionDetails, page, pagesNames } = state.QuestionReducers;
  return { error, questionDetails, optionDetails, page, pagesNames };
};

export default withRouter(connect(mapStateToProps, { Question, AddOptionsDetails, nextPage })(Main));
