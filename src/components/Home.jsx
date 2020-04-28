import React, { Component } from "react";
import axios from "axios";
import Page from "./Page";
export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: ""
    };
  }

  componentDidMount = () => {
    const { pageData } = this.props;
  };

  render() {
    const { pageData } = this.props;
    return (
      <div>
        {pageData &&
          pageData.map(elem => {
            return (
              <div key={elem.id}>
                <Page access_token={elem.access_token} id={elem.id} />
              </div>
            );
          })}
      </div>
    );
  }
}

export default Home;
