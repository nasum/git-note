import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import mui from 'material-ui';
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Codemirror from 'react-codemirror'
import markdown from 'codemirror/mode/markdown/markdown'
import FileTree from './FileTree'

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    this._handleToggle = this._handleToggle.bind(this)
    this._handleOpenFolder = this._handleOpenFolder.bind(this)
    this._updateCode = this._updateCode.bind(this)
  }

  _handleToggle(e) {
    this.props.mainActions.toggle(this.props.MainReducer.open)
  }

  _handleOpenFolder(e){
    this.props.mainActions.openFolder()
  }

  _updateCode(code) {
    this.props.codeActions.typing(code)
  }

  render() {
    const {
      open,
      files,
      dirs,
    } = this.props.MainReducer
    const {
      code
    } = this.props.CodeReducer
    const options = {
      lineNumbers: true,
      mode: 'markdown',
    }
    return (
      <MuiThemeProvider>
        <div id="page_container">
          <Drawer
            open={ open }
            docked={ false }
            onRequestChange={this._handleToggle}>
            <MenuItem onTouchTap={this._handleOpenFolder}>Open</MenuItem>
          </Drawer>
          <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={ this._handleToggle }
          />
          <div>
            <Codemirror value={ code } onChange={ this._updateCode } options={options}  />
          </div>
          <FileTree files={ files } dirs={ dirs } />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default MainContainer
