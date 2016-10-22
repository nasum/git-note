import electron from 'electron'
import fs from 'fs'

const app = electron.app
const BrowserWindow = electron.BrowserWindow
const dialog = electron.dialog
const Menu = electron.Menu
const ipc = electron.ipcMain

let dir_path = ""

let mainWindow = null

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 })
  mainWindow.loadURL(`file://${__dirname}/../index.html`)
  mainWindow.on('closed', () => {
    mainWindow = null
  })
  initMenu(Menu)
})

ipc.on('OPEN_FOLDER', (event, args) => {
  const path = dialog.showOpenDialog(mainWindow, { title: 'open folder', properties: ['openDirectory', 'createDirectory'] })[0]
  let files = []
  let dirs = []
  fs.readdir(path, function(err, find_files){
    find_files.forEach(function(file){
        var _type = "";
        if(fs.statSync(path + "/" + file).isFile()){
          files.push(path + "/" + file)
        }else{
          dirs.push(path + "/" + file)
        }
    });
    event.sender.send('CATCH_RESPONSE', {
      files: files,
      dirs: dirs,
    })
  })
})

ipc.on('SHOW_FILES', (event, args) => {

})

function initMenu(Menu){
  const template = [
    {
      label: 'Edit',
      submenu: [
        {
          role: 'undo'
        },
        {
          role: 'redo'
        },
        {
          type: 'separator'
        },
        {
          role: 'cut'
        },
        {
          role: 'copy'
        },
        {
          role: 'paste'
        },
        {
          role: 'pasteandmatchstyle'
        },
        {
          role: 'delete'
        },
        {
          role: 'selectall'
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'Reload',
          accelerator: 'CmdOrCtrl+R',
          click (item, focusedWindow) {
            if (focusedWindow) focusedWindow.reload()
          }
        },
        {
          label: 'Toggle Developer Tools',
          accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
          click (item, focusedWindow) {
            if (focusedWindow) focusedWindow.webContents.toggleDevTools()
          }
        },
        {
          type: 'separator'
        },
        {
          role: 'resetzoom'
        },
        {
          role: 'zoomin'
        },
        {
          role: 'zoomout'
        },
        {
          type: 'separator'
        },
        {
          role: 'togglefullscreen'
        }
      ]
    },
    {
      role: 'window',
      submenu: [
        {
          role: 'minimize'
        },
        {
          role: 'close'
        }
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click () { require('electron').shell.openExternal('http://electron.atom.io') }
        }
      ]
    }
  ]

  const myMenu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(myMenu)
}
