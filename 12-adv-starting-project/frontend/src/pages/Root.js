import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

const RootPage = () => {
  return (
    <div>
      <MainNavigation />
      <Outlet />
    </div>
  );
};
export default RootPage;
