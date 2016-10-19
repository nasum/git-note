import * as codeAction from '../actions/CodeAction'

const initState = {
  code: ''
}

function typing(state, action) {
  return Object.assign({}, state, {
    code: action.code
  });
}

export default function CodeReducer(state = initState, action) {
  switch (action.type) {
    case codeAction.TYPING:
      return typing(state, action)
    default:
      return state
   }
}
