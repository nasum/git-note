import electron from 'electron'
const ipc = electron.ipcRenderer

export const TOGGLE = 'TOGGLE'
export function toggle(flg) {
  return {
    type: TOGGLE,
    open: !flg
  }
}

export const OPEN_FOLDER = 'OPEN_FOLDER'
export function openFolder() {
  const pathArray = ipc.sendSync('OPEN_FOLDER')
  return {
    type: OPEN_FOLDER,
    path: pathArray[0]
  }
}
