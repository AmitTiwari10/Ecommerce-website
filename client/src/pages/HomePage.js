import React from "react";
import Layout from "../components/Layout/layout";
import { useAuth } from "../context/auth";
const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Best Offers"}>
      <h1>Homepage</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};

export default HomePage;
