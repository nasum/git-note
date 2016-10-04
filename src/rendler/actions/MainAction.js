export const OPEN = 'OPEN'
function open() {
  return {
    type: OPEN,
    open: true
  }
}

export const CLOSE = 'CLOSE'
function close() {
  return {
    type: CLOSE,
    open: false
  }
}
