import React from "react";
import styled from "styled-components";

import Head from "next/head";
import Link from "next/link";

import withAnalytics from "../src/hocs/withAnalytics";

const Title = styled.h1`
  color: #069;
  font-size: 40px;
`;

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Title>Hello World Next JS</Title>
    <img src="/static/logo-easy.png" width="300px" />
    <br />
    <Link href="/users">
      <a>Users</a>
    </Link>
  </div>
);

export default Home;
// export default withAnalytics()(Home); // error: TypeError: Object(...) is not a function
