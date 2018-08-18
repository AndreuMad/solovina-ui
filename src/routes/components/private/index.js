import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import Notification from '../../../modules/notifications/index';
import { WrapperStyled } from './styled';
import Main from '../../../modules/main';
// -- start importing modules
// -- end importing modules

/* eslint-disable react/no-unused-prop-types */
const propTypes = {
  userRole: PropTypes.string
};

const PrivateRoutes = props => {
  return (
    <WrapperStyled>
      <Switch>
        <Route exact path="/" component={Main}/>
        {/* -- start connecting routes */}
        {/* -- end connecting routes */}
        <Redirect to="/"/>
      </Switch>
      <Notification />
    </WrapperStyled>
  );
};

PrivateRoutes.propTypes = propTypes;

export default PrivateRoutes;
