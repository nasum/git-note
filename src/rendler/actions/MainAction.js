import electron from 'electron'
const ipc = electron.ipcRenderer

export const TOGGLE = 'TOGGLE'
export function toggle(flg) {
  return {
    type: TOGGLE,
    open: !flg
  }
}

export const SET_FILES_AND_DIRS = 'SER_FILES_AND_DIRS'
export function setFilesAndDirs(open_folder){
  return {
    type: SET_FILES_AND_DIRS,
    files: open_folder.files,
    dirs: open_folder.dirs
  }
}

export const OPEN_FOLDER = 'OPEN_FOLDER'
export function openFolder() {
  return (dispatch) => {
    ipc.send('OPEN_FOLDER')
    ipc.on('CATCH_RESPONSE', function(events, args){
      dispatch(setFilesAndDirs(args))
      dispatch(toggle(true))
    })
    return {
      type: OPEN_FOLDER,
    }
  }
}
