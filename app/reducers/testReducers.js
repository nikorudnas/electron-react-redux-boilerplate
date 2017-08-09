// @flow
export default function reducer(state = {
  item: null
}, action) {
  switch (action.type) {
    case "SETITEM_REQUEST":
      {
        return {
          ...state,
          item: action.payload
        }
      }
    default:
      return state;
  }
}