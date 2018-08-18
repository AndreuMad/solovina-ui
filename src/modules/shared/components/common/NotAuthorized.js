import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

export default class NotAuthorized extends Component {

  handleBtnClick() {
    window.location.href = '/';
  }

  render() {
    return (
      <div className="container-fluid not-auth justify-content-center">
        <h2>
          <FormattedMessage id="general.placeholders.notAuthorized"/>
        </h2>
        <div className="row justify-content-center">
          <button className="btn" onClick={this.handleBtnClick}>
            <FormattedMessage id="general.buttons.toMain"/>
          </button>
        </div>
      </div>
    );
  }
}
