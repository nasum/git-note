import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as mainActions from '../actions/MainAction'
import * as codeActions from '../actions/CodeAction'
import * as fileTreeActions from '../actions/FileTreeAction'
import mainComponent from '../components/MainComponent'

function mapDispatchToProps(dispatch) {
  return {
    mainActions: bindActionCreators(mainActions, dispatch),
    codeActions: bindActionCreators(codeActions, dispatch),
    fileTreeActions: bindActionCreators(fileTreeActions, dispatch),
  }
}

function mapStateToProps(state) {
  const { MainReducer, CodeReducer, FileTreeReducer } = state
  return {
    MainReducer,
    CodeReducer,
    FileTreeReducer
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(mainComponent)
