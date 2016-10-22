import * as mainAction from '../actions/MainAction'

const initState = {
  open: false,
  dirs: [],
  files: [],
}

function toggle(state, action) {
  return Object.assign({}, state, {
    open: action.open
  });
}

function openFolder(state, action) {
}

function setFilesAndDirs(state, action) {
  return Object.assign({}, state, {
    files: action.files,
    dirs: action.dirs,
  })
}

export default function MainReducer(state = initState, action) {
  switch (action.type) {
    case mainAction.TOGGLE:
      return toggle(state, action)
    case mainAction.OPEN_FOLDER:
      return openFolder(state, action)
    case mainAction.SET_FILES_AND_DIRS:
      return setFilesAndDirs(state, action)
    default:
      return state
   }
}
