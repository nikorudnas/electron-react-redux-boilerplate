// @flow
export function setItem(item) {
    return dispatch => {
        dispatch(setItemRequest(item));
    }
}

function setItemRequest(data) {
    return {
        type: "SETITEM_REQUEST",
        payload: data
    }
}
