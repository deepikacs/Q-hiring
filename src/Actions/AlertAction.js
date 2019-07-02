export function AlertFunction(){
    // let data=[];
    // data.push(y);
    // let data=y;
    // console.log(data);
    return function (dispatch){
        dispatch({
            type:"ALERT_MESSAGE",
            message: 'test message'
        });

        setTimeout(() => {
            dispatch({
                type:"ALERT_MESSAGE",
                message: ''
            }) 
        }, 5000)
    }
}