import * as ActionTypes from '../Actions/types';

const INPUT_STATE= {
    name:'deepika',
    age:20
};

export default (state = INPUT_STATE, action) => {
    const newState = {...state};

    switch(action.type){
        case 'FETCH_PAYMENTDETAILS_SUCCESS': 
            // newState.token1 = action.paymentToken;
            // newState.token1 =action.value;

            return { ...state,name: action.name
              }
              
            break;

        case 'AGE_UP': 
            newState.age += action.value;
            break;
        
        case 'AGE_DOWN': 
            newState.age -= action.value;
            break;
        
        
    }
    return state;
};



// const initialState = {
//         token1:'deepika'
//     };

//     const storePaymentToken = (state=initialState, action) => {
//         debugger;
//     const newState = {...state};
//     // switch(action.type){
//                 // case 'FETCH_PAYMENTDETAILS_SUCCESS': 
//                     newState.token1 =paymentToken;
//                     // newState.token1 ="deepu";
//                     // break;
                
                
//             // }
//             return newState;

//     }
//     export default storePaymentToken;