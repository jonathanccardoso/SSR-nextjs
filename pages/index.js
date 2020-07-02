import React from "react";

import Head from "next/head";

// add component analytics
import withAnalyics from "../src/hocs/withAnalytics";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <h1>Hello World</h1>
  </div>
);

export default withAnalyics()(Home);
