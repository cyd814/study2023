// 主进程
const { BrowserWindow, app } = require('electron')
const createWindow = () => {
  const win = new BrowserWindow({ width: 300, height: 300, alwaysOnTop: true, x: 800, y: 100 })
  win.loadFile('index.html')
  // win.webContents.toggleDevTools()
}
app.whenReady().then(() => {
  createWindow()

  app.on('window-all-closed', () => {
    if (process.platform != 'darwin') app.quit()
  })
  app.on('activate', () => {
    createWindow()
  })
})

