import React, { Component } from 'react';



class Question extends Component {
    constructor(props){
        super(props);
        this.state={
            array:[{
                'question':"That which cannot be belived",
                'qid':1

            },{
                
                'question':"That which cannot be detremin",
                'qid':2

            }

            
        ],
        array1:[],
        
        };
    }
    handle=(qid)=>{
        debugger;
          this.setState({array1:[
                {
                    'qid':'1',
                    'answer':'Incredible'
                },{
                    'qid':'1',
                    'answer':'unreliable'
                },
                {
                    'qid':'1',
                    'answer':'impulsible'
                },
                {
                    'qid':'1',
                    'answer':'incrdious'
                }
            
                
            ]
        });
        console.log(this.state.array1);
        }
    
  render() {
    return (
      <div>
       
    {this.state.array.map((item,index)=>
        (
            <div>{item.question}{this.handle.call(this,item)}

            {/* <button onClick={this.handle}>button</button>; */}
            {this.state.array1.map((ans)=>(
                <div>
                <input type="radio" name={ans.qid}/> {ans.answer}
                </div>
            ))}
            
        
             {/* {item.answers.map((ans) =>
             (
                <div >
                <input type="radio" name={ans.qid}/> {ans.answer}
                </div>
             ))} */}
         
         </div>
        ))}
      </div>
    );
  }
}

export default Question;
