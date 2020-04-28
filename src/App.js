import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
import Home from "./components/Home";
import dotenv from "dotenv";
import path from "path";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accessToken: "",
      pageData: [],
      flagRes: true
    };
  }

  componentClicked = data => {
    console.log("data", data);
  };

  responseFacebook = response => {
    // console.log(response);
    this.setState({ flagRes: false });
    this.getUserLongLive(response.accessToken);
  };

  getUserLongLive = accessToken => {
    // console.log(accessToken);
    let appId = process.env.REACT_APP_ID;
    let secretId = process.env.REACT_APP_SECRET_ID;
    axios
      .get(
        `https://graph.facebook.com/v6.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${appId}&client_secret=${secretId}&fb_exchange_token=${accessToken}`
      )
      .then(res => {
        // console.log(res.data.access_token, "long live");
        this.getUserId(res.data.access_token);
      })
      .catch(err => console.log(err.message));
  };

  getUserId = longLiveAccessToken => {
    // console.log(longLiveAccessToken, "longLiveAccessToken");
    axios
      .get(
        `https://graph.facebook.com/v6.0/me?access_token=${longLiveAccessToken}`
      )
      .then(res => {
        // console.log(res.data);
        this.getPageAccessToken(res.data.id, longLiveAccessToken);
      })
      .catch(err => console.log(err.message));
  };

  getPageAccessToken = (userID, longLiveAccessToken) => {
    // console.log(userID, "userID getPageAccessToken");
    // console.log(longLiveAccessToken, "longLiveAccessToken getPageAccessToken");
    axios
      .get(
        `https://graph.facebook.com/${userID}/accounts?access_token=${longLiveAccessToken}`
      )
      .then(
        res => {
          // console.log(res.data, "pa");
          this.setState({ pageData: res.data.data });
        }
      )
      .catch(err => console.log(err.message));
  };

  render() {
    const { pageData, flagRes } = this.state;
    return (
      <div className="container ">
        <Home pageData={pageData} />

        {flagRes ? (
          <div className="row justify-content-center align-items-center h-100">
            <FacebookLogin
              appId={process.env.REACT_APP_ID}
              autoLoad={false}
              fields="name,email,picture"
              onClick={this.componentClicked}
              callback={this.responseFacebook}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
