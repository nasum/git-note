import * as fileTreeAction from '../actions/FileTreeAction'

const initState = {
  file_path: "",
  code: "",
}

function selectFile(state, action) {
  return Object.assign({}, state, {
    file_path: action.file_path
  });
}

function setFile(state, action) {
  return Object.assign({}, state, {
    code: action.code
  });
}

function openFile(state, action) {
  return Object.assign({}, state, {
    file_path: action.file_path
  });
}

export default function FileTreeReducer(state = initState, action) {
  switch (action.type) {
    case fileTreeAction.SELECT_FILE:
      return selectFile(state, action)
    case fileTreeAction.SET_FILE:
      return setFile(state, action)
    case fileTreeAction.OPEN_FILE:
      return openFile(state, action)
    default:
      return state
   }
}
