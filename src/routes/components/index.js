import React, { Component } from 'react';
import { ConnectedRouter as Router } from 'react-router-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { WrapperStyled } from './styled';
import history from '../../utils/history';
import Header from '../../modules/header';

export default class RootRoutes extends Component {
  render() {
    return (
      <Router history={history}>
        <WrapperStyled>
          <Header/>
          <Switch>
            {/* -- start connecting routes */}
            <Route path="/main" render={() => <div style={{ height: '2200px' }}>{'main'}</div>}/>
            <Route path="/advices" render={() => <span>{'advices'}</span>}/>
            <Route path="/articles" render={() => <span>{'articles'}</span>}/>
            <Route path="/vocabulary" render={() => <span>{'vocabulary'}</span>}/>
            <Route path="/about-us" render={() => <span>{'about-us'}</span>}/>
            {/* -- end connecting routes */}
            <Redirect to="/main"/>
          </Switch>
        </WrapperStyled>
      </Router>
    );
  }
}
