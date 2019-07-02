export function submitData(y){
    let data=y;
    return function (dispatch){
        dispatch({
            type:"SIGNUP_FORM_SUBMIT",
            data
        });
    }
}