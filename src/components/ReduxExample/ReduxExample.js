import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitForm } from '../../Actions/ReduxExampleAction';
import {Table} from 'reactstrap';

class ReduxExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            name: '',
            city:''
           
            
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log("name:",this.state.name,)

        // this.setState({name:e.target.value})
        console.log("city:",this.state.city,)
    }
    handleSubmit = (e) => {
      e.preventDefault();
        let reqobj = {
            name1: this.state.name,
            city1: this.state.city
        }
        console.log(reqobj);
        // this.props.submitForm(reqobj);
        // this.setState({name:'',city:''});

    
    }

    render() {
        return (
            <div>
                <form>
                    <label>Name</label>
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
                    <label>City</label>
                    <input type="text" name="city" onChange={this.handleChange} value={this.state.city} />
                    <button onClick={this.handleSubmit}>submit</button>
                    
                   

                </form>
                {this.props.message}
               {/* <p>Name:{this.props.option1.name1}</p> 
               <p>city:{this.props.option1.city1}</p>  */}
                 
                 <Table>
                       <thead>
                          <tr>
                             <th>FName</th>
                            <th>City</th>
                       </tr>
                     </thead>
                    <tbody>
                        {this.props.option1.map((item,index) =>
                            {
                              
                              if(index<5){
                                return<div>
                                  <tr key={index}>
                                <td>{this.props.option1.length}</td>
                                    <td>{item.name1}</td>
                                    <td>{item.city1}</td>
                                </tr>
                                </div>
                              }
                              
                               
                        })}
                           
                    </tbody>

                </Table>
                 {/* <div>{this.props.option1.map((item,index)=>
        (
          <div  key={index}>name:{item.name1}<br/>
          age:{item.city1}
          </div>  
            ))}
            </div>  */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  
    const { message,option1 } = state.ReduxExampleReducers;
    return { message,option1}
}

export default connect(mapStateToProps, { submitForm })(ReduxExample);