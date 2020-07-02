import React, { Component } from "react";
import { loadGetInitialProps } from "next";
import ReactGA from "react-ga";

export default () => (Composed) =>
  class extends Component {
    static getInitialProps(ctx) {
      return loadGetInitialProps(Composed, ctx);
    }

    componentDidMount() {
      ReactGA.initialize(process.env.NODE_ENV);
      ReactGA.pageview(window.location.pathname);
    }

    render() {
      return <Composed {...this.props} />;
    }
  };
