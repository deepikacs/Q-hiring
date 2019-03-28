import React, { Component } from 'react';



class question1 extends Component {
    constructor(props){
        super(props);
        this.state={
            array:[{
                'question':"That which cannot be belived",

            },
            {'answers':[{
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
        ]},{
                
                'question':"That which cannot be abc",

            },
            {'answers':[{
                'qid':'2',
                'answer':'rash'
            },{
                'qid':'2',
                'answer':'bold'
            },
            {
                'qid':'2',
                'answer':'carageous'
            },
            {
                'qid':'2',
                'answer':'incrdeible'
            }
        ]}

            
        ],
        
        };
    }
  
    
  render() {
    return (
      <div>
       
    {this.state.array.map((item,index)=>
        (
            <div>{item.question}

        
             {item.answers.map((ans) =>
             (
                <div >
                <input type="radio" name={ans.qid}/> {ans.answer}
                </div>
             ))}
         
         </div>
        ))}
      </div>
    );
  }
}

export default question1;
