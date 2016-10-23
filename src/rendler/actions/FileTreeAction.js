export const OPEN_FILE = 'OPEN_FILE'
export function openFile(file_path) {
  return {
    type: OPEN_FILE,
    file_path: file_path
  }
}
