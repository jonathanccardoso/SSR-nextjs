import React from "react";
import axios from "axios";

import Link from "next/link";
import Head from "next/head";

import withAnalyics from "../src/hocs/withAnalytics";

const User = ({ users }) => (
  <div>
    <Head>
      <title>Users</title>
    </Head>
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.login}</li>
      ))}
    </ul>
    <Link href="/">
      <a>Home</a>
    </Link>
  </div>
);

// prop static used only to pages
User.getInitialProps = async () => {
  const response = await axios.get(
    "https://api.github.com/orgs/rockeseat/members"
  );

  return { users: response.data };
};

export default withAnalyics()(User);
