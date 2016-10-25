import React from 'react'
import {List, ListItem} from 'material-ui/List';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import Avatar from 'material-ui/Avatar';
import {blue500, yellow600} from 'material-ui/styles/colors';

class FileTree extends React.Component {
  constructor(props) {
    super(props)
    this._handleSelectFile = this._handleSelectFile.bind(this)
  }

  _handleSelectFile(file_path) {
    this.props.fileTreeActions.selectFile(file_path)
  }

  render() {
    const { files } = this.props
    return (
      <div>
        <List>
          {
            files.map((file, index) => {
              return <ListItem
                leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
                rightIcon={<ActionInfo />}
                primaryText={ file }
                key={ index }
                onTouchTap={this._handleSelectFile.bind(this, file)}
              />
            })
          }
        </List>
      </div>
    )
  }
}

export default FileTree
