import React, { Component } from "react";
import { loadGetInitialProps } from "next";
import ReactGA from "react-ga";

// export default () => (Composed) =>
const withAnalytics = (Composed) =>
  class extends Component {
    constructor() {
      super();
    }

    static getInitialProps(ctx) {
      // if (Composed.getInitialProps) return Composed.getInitialProps(ctx);
      // if (Composed.getInitialProps) return loadGetInitialProps(Composed, ctx);
      return loadGetInitialProps(Composed, ctx);
    }

    componentDidMount() {
      console.log("page view");

      ReactGA.initialize(process.env.ID_ANALYTICS);
      ReactGA.pageview(window.location.pathname);
    }

    render() {
      return <Composed {...this.props} />;
    }
  };

export default withAnalytics;
