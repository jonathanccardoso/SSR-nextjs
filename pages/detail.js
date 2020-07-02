import React from "react";
import axios from "axios";

import Head from "next/head";

import withAnalytics from "../src/hocs/withAnalytics";

const Detail = ({ user }) => (
  <div>
    <Head>
      <title>Detail</title>
    </Head>
    <h1>{user.login}</h1>
    <img src={user.avatar_url} width="300px" />
  </div>
);

Detail.getInitialProps = async ({ query }) => {
  const response = await axios.get(
    `https://api.github.com/users/${query.user}`
  );

  return { user: response.data };
};

export default Detail;
// export default withAnalytics()(Detail);