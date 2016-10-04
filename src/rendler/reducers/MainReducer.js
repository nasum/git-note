import * as mainAction from '../actions/MainAction'

const initState = {
  open: false
}

export default function MainReducer(state = initState, action) {
  switch (action.type) {
    case mainAction.OPEN:
      state.open = action.oepn
      return Object.assign({}, state);

    default:
      return state
   }
}
