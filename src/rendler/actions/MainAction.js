export const TOGGLE = 'TOGGLE'
export function toggle(flg) {
  return {
    type: TOGGLE,
    open: !flg
  }
}

export const OPEN_FOLDER = 'OPEN_FOLDER'
export function openFolder() {
  return {
    type: OPEN_FOLDER
  }
}
