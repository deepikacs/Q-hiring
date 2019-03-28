import React, { Component } from 'react';
import logo from '../../Images/qwinix.png';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { Question } from '../../Actions/QuestionAction';

import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      count: 60,
      checked:'',
      answerArray:[],

    }
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  componentDidMount() {
    debugger;
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
  handleAnswer=(index,ansid,qid)=>{
    debugger;
    this.setState({checked:index});
    console.log(this.state.checked);
    const data={
      answerid:ansid,
      questionid:qid
    };
  
  if( this.state.answerArray.length>0){
    const index1 = this.state.answerArray.findIndex((res) => res.questionid === qid);
    if(index1 != -1){
      this.state.answerArray[index1]['answerid']=ansid;
    }
    else{
      this.state.answerArray.push(data);
    }
  }
  else{
    this.state.answerArray.push(data);
  }  
    console.log(this.state.answerArray)
    
  }


  render() {
    return (
       <div className="fluid-container hrztle-scrl"> 
        <div className='row'>
          <div className='col-sm-5'></div>
          <div className='col-sm-6'>
            <img src={logo} alt="logo" className="img-align" />
          </div>
          <div className='col-sm-1'>
            <p className="dot paddTop-11">{this.state.count}<br />mins</p>
          </div>
        </div>
        <div className='row'>
        <div className='col-sm-5'></div>
        <div className='col-sm-6 paddLeft-41'> <h2>Verbal Test</h2></div>
        <div className='col-sm-1'></div>
       
        </div> 
        <div>
        {this.props.questionDetails.map((item,index)=>
        (
            <div className="paddleft-30" ><span className="text-bold">{index+1}.  {item.questtext}</span>

        
             {item.answers.map((ans,index) =>
             (
                <div className="lineHeight">
                <input type="radio" name={ans.question} 
                value= {ans._id} key={index} 

                onChange={this.handleAnswer.bind(this,index,ans._id,ans.question)}
                /> {ans.anstext}
                </div>
             ))}
         
         </div>
        ))}
        </div>

        {/* last */}
        <div className='row'>
          <div className='col-sm-5'></div>
          <div className='col-sm-6'>
          </div>
          <div className='col-sm-1'>
            <p className="dot paddTop-25">Submit</p>
          </div>
        </div>

        </div>
        

    );
  }
}

const mapStateToProps = (state) => {
  debugger;
  const { error ,questionDetails} = state.QuestionReducers;
  return { error,questionDetails };
};

export default withRouter(connect(mapStateToProps, { Question })(Main));
