export function submitForm(y){
    // let data=[];
    // data.push(y);
    let data=y;
    // console.log(data);
    return function (dispatch){
        dispatch({
            type:"FORM_SUBMIT",
            data
        });
    }
}