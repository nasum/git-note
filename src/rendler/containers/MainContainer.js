import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as mainctions from '../actions/MainAction'
import mainComponent from '../components/MainComponent'
import mapStateToProps from './mapStateToProps'

function mapDispatchToProps(dispatch) {
  return {
    mainActions: bindActionCreators(mainComponent, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(mainComponent)
