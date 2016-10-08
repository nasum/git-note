export const TOGGLE = 'TOGGLE'
export function toggle(flg) {
  return {
    type: TOGGLE,
    open: !flg
  }
}
