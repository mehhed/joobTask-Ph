import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Error from "./pages/Error";
import Home from "./pages/Home";
const Routs = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default Routs;
