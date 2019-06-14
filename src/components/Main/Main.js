import React, { Component } from 'react';
import logo from '../../Images/logo.png';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Question, AddOptionsDetails, nextPage } from '../../Actions/QuestionAction';
import './Main.css';
import { Link } from 'react-router-dom';
import Thankyou from './Thankyou';
import browserHistory from '../../utils/browserHistory';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 60,
      checked: '',
      answerArray: [],
      shownext:true,
      showprevious:false,


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
    if (this.state.count == 10) {
      alert("last 10 min to submit");
    }
    if (this.state.count == 0) {
      this.handleSubmit();
      browserHistory.push('/thankyou');
    }
  }
  startTimer() {
    clearInterval(this.timer);
    this.timer = setInterval(this.tick.bind(this), 60000);

  }
  stopTimer() {
    clearInterval(this.timer)
  }




  handleAnswer = (index, ansid, qid) => {
    this.setState({ checked: index });
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
    debugger;
    var userid = localStorage.getItem('userid');
    if (this.state.answerArray.length > 0) {
      const selectedOptions = {
        userid: localStorage.getItem('userid'),
        questionAnswer: this.state.answerArray,
      };

      this.props.AddOptionsDetails(selectedOptions);

       

      // else {
      //   browserHistory.push('/thankyou');
      // }
    }
    else {
      alert("please select atleast one answer");
    }
   }
   handlePrevious = () =>{

    const { page, pagesNames, nextPage } = this.props;
    debugger;

    let newPage = page;
    if(page == 0){
      newPage = page;
    }
    else{
      newPage = page - 1;
    }

    if (newPage < pagesNames.length) {
      debugger;
      nextPage(newPage);

      if (newPage ==  0) {
        this.state.showprevious=false;
        
      }
      else{
        // this.state.showprevious=true;
        this.state.shownext = true;
      }
    }

  }

  handleNext = () =>{

    
    const { page, pagesNames, nextPage } = this.props;
 
    const newPage = page + 1;
    if (newPage < pagesNames.length) {
      nextPage(newPage);
      
      this.state.showprevious=true;
      
      if (newPage ==  pagesNames.length-1) {
        this.state.shownext = false;
      }

    }

  }

  render() {
    const { page, questionDetails, pagesNames } = this.props;
    return (
      <div className="fluid-container horiztle-scrl">
        <div className='row '>
          <div className='col-sm-5'></div>
          <div className='col-sm-6'>
            <img src={logo} alt="logo" className="img-align" />
          </div>
          <div className='col-sm-1'>
            <p className="dot paddTop-11">{this.state.count}<br />mins</p>
          </div>
        </div>

        <div>
          {questionDetails.map((item, index) => {
            if (pagesNames[page] === item.name) {
              return <div>
                <div className='row marginTop-51'>
                  <div className='col-sm-5'></div>
                  <div className='col-sm-6 paddLeft-41'> <h2 key={index}>{item.name}</h2></div>
                  <div className='col-sm-1'></div>

                </div>
                {item.questions.map((qns, index1) => (
                  <div className="paddleft-115 text-bold" key={index1}>{index1 + 1}. {qns.questtext}
                    {qns.options.map((opt, index2) =>
                      (
                        <div className="lineHeight">
                          <input type="radio" name={opt.questionid}
                            value={opt._id} key={index2}

                            onChange={this.handleAnswer.bind(this, index2, opt._id, opt.questionid)}
                          /> {opt.anstext}
                        </div>
                      ))}
                  </div>
                ))
                }<div className='row'>
                  <div className='col-sm-5'></div>
                  {/* if (item.name === 'lo'){} */}
                  <div className='col-sm-6'>
                  {this.state.showprevious?  <button onClick={this.handlePrevious} >Previous</button> : '' }
                  {this.state.shownext ?  <button  onClick={this.handleNext}>Next</button> : <button className="dot paddTop-25" onClick={this.handleSubmit}>submit1</button>}
                  </div>
                  <div className='col-sm-1'>
                    {/* <span className="dot paddTop-25" onClick={this.handleSubmit} disabled={this.state.answerArray.length > 0}>Submit</span> */}
                  </div>
                </div>
              </div>
            }
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { error, questionDetails, optionDetails, page, pagesNames } = state.QuestionReducers;
  return { error, questionDetails, optionDetails, page, pagesNames };
};

export default withRouter(connect(mapStateToProps, { Question, AddOptionsDetails, nextPage })(Main));