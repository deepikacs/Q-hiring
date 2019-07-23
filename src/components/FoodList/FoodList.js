import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {foodDetails} from '../../Actions/LocationAction';

class FoodList extends Component {
    componentDidMount(){
        this.props.foodDetails(this.props.location.state.menuId)
    }
    render() {
        return (
            <div>
                foodlist
                {this.props.foodarray.map((item,index)=>(
                   <div key={item.index} >
                  <p>{item.foodName}</p> 
                </div>
               ))}  
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    debugger;
    const { foodarray} = state.LocationReducers;
    return { foodarray };
  };

// export default FoodList;
export default withRouter(connect(mapStateToProps,{foodDetails})(FoodList));