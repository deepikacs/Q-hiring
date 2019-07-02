export function btnA(b) {
    return function (dispatch) {
        dispatch({
            type: "UPDATE_A",payloadB:b
        });
    }
}

export function btnB(a) {
    return function (dispatch) {
        dispatch({
            type: "UPDATE_B",payloadA:a
        });
    }
}