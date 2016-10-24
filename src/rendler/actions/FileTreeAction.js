import electron from 'electron'
const ipc = electron.ipcRenderer

export const SELECT_FILE = 'SELECT_FILE'
export function selectFile(file_path) {
  return (dispatch) => {
    ipc.send('OPEN_FILE', file_path)
    ipc.on('CATCH_FILE', function(events, args){
      dispatch(setFile(args.text))
    })
    return {
      type: SELECT_FILE,
      file_path: file_path
    }
  }
}

export const SET_FILE = 'SET_FILE'
export function setFile(code) {
  return {
    type: SET_FILE,
    code: code
  }
}

export const OPEN_FILE = 'OPEN_FILE'
export function openFile(file_path) {
}
