import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as selectors from '../selectors';
import Component from '../components';
import { fetchUserProfile } from '../../modules/auth/actions';

const mapStateToProps = state => ({
  isSynced       : selectors.getIsUserSynced(state),
  isAuthenticated: selectors.getIsUserAuthenticated(state),
  user           : selectors.getUser(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUserProfile
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Component);
