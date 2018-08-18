import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter as Router } from 'react-router-redux';
import history from '../../utils/history';
import Loader from '../../modules/shared/components/common/MainLoader';
import NotAuthorized from '../../modules/shared/components/common/NotAuthorized';
import PrivateRoutes from './private/index';

export default class RootRoutes extends Component {
  static propTypes = {
    isAuthenticated : PropTypes.bool.isRequired,
    isSynced        : PropTypes.bool.isRequired,
    user            : PropTypes.shape({
      account                : PropTypes.shape({
        passwordChangeBeforeExpire: PropTypes.bool,
        passwordExpired           : PropTypes.bool
      }),
      firstname              : PropTypes.string,
      language               : PropTypes.string,
      lastname               : PropTypes.string,
      middlename             : PropTypes.string,
      organizationDisplayName: PropTypes.shape({
        'en_GB': PropTypes.string
      }),
      role                   : PropTypes.string,
      selectedClient         : PropTypes.shape({
        clientNumber    : PropTypes.string,
        id              : PropTypes.number,
        name            : PropTypes.string,
        organizationName: PropTypes.string
      }),
      username               : PropTypes.string
    }),
    fetchUserProfile: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { fetchUserProfile } = this.props;

    fetchUserProfile();
  }

  render() {
    const {
      isAuthenticated,
      isSynced,
      user
    } = this.props;

    if (!isSynced) {
      return <Loader />;
    }

    if (isSynced && !isAuthenticated) {
      return <NotAuthorized />;
    }

    return (
      <Router history={history}>
        <PrivateRoutes userRole={user.role}/>
      </Router>
    );
  }
}
