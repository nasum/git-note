import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import mui from 'material-ui';
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    this._handleToggle = this._handleToggle.bind(this);
  }

  _handleToggle(e) {
    this.props.mainActions.toggle(this.props.MainReducer.open)
  }

  render() {
    const {
      open
    } = this.props.MainReducer
    return (
      <MuiThemeProvider>
        <div id="page_container">
          <Drawer
            open={open}
            docked={false}
            onRequestChange={this._handleToggle}>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
          <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this._handleToggle}
          />
          <div className="main-container">
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default MainContainer
