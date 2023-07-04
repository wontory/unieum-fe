import { Outlet } from "react-router-dom";

import Layout from "./components/UI/Layout/Layout";

const App = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default App;
