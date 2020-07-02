import React from "react";

import Head from "next/head";
import Link from "next/link";

import withAnalytics from "../src/hocs/withAnalytics";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <h1>Hello World</h1>
    <img src="/static/logo-easy.png" width="300px" />
    <br />
    <Link href="/users">
      <a>Home</a>
    </Link>
  </div>
);

export default Home;
// export default withAnalytics()(Home); // error: TypeError: Object(...) is not a function
