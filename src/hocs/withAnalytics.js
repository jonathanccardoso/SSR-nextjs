import React, { Component } from "react";
import { loadGetInitialProps } from "next/dist/lib/utils";
import ReactGA from "react-ga";

export default () => (Composed) =>
  class extends Component {
    static getInitialProps(ctx) {
      return loadGetInitialProps(Composed, ctx);
    }

    componentDidMount() {
      console.log("Page View");

      // para saber toda a movimentação no site
      ReactGA.initialize("ID_ANALITYCS");
      ReactGA.pageview(window.location.pathname);
    }

    render() {
      return <Composed {...this.props} />;
    }
  };
