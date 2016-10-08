import * as mainAction from '../actions/MainAction'

const initState = {
  open: false
}

function toggle(state, action) {
  return Object.assign({}, state, {
    open: action.open
  });
}

export default function MainReducer(state = initState, action) {
  switch (action.type) {
    case mainAction.TOGGLE:
      return toggle(state, action)
    default:
      return state
   }
}
