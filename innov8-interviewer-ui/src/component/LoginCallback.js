import React, {Component} from "react";
import { connect } from "react-redux";
import { CallbackComponent } from "redux-oidc";
import { push } from "react-router-redux";
import userManager from "../redux/config/userManager";

class LoginCallback extends Component {
  render() {
      console.log('HELLO');
    // just redirect to '/' in both cases
    return (
      <CallbackComponent
        userManager={userManager}
        successCallback={() => this.props.dispatch(push("/"))}
        errorCallback={error => {
          this.props.dispatch(push("/"));
          console.error(error);
        }}
        >
        <div>Redirecting...</div>
      </CallbackComponent>
    );
  }
}

export default connect()(LoginCallback);
