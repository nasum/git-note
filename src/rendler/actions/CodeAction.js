export const TYPING = 'TYPING'
export function typing(code) {
  return {
    type: TYPING,
    code: code
  }
}
