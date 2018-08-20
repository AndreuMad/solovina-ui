import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as selectors from '../selectors';
import Component from '../components';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Component);
