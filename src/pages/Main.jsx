import { Outlet } from "react-router-dom";
import "../../public/home.css";

import { Helmet } from "react-helmet-async";

const Main = () => {
  return (
    <div className="max-w-[1565px] body">
      <div className="flex flex-col h-[80vh]">
        <div className="flex-grow">
          <Outlet></Outlet>
        </div>
      </div>
      <Helmet>
        <title>ONCourse | Deshbord</title>
      </Helmet>
    </div>
  );
};

export default Main;
