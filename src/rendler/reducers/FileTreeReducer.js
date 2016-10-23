import * as fileTreeAction from '../actions/FileTreeAction'

const initState = {
  file_path: ""
}

function openFile(state, action) {
  return Object.assign({}, state, {
    file_path: action.file_path
  });
}

export default function FileTreeReducer(state = initState, action) {
  switch (action.type) {
    case fileTreeAction.OPEN_FILE:
      return openFile(state, action)
    default:
      return state
   }
}
