import { NavLink } from "react-router-dom";
import "../../public/home.css";
import OverView from "../componennts/OverView";
const Home = () => {
  return (
    <div className="flex">
      <div>
        <div className="drawer lg:drawer-open bg-[#F7F7FF]">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden">
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-0 flex flex-col justify-between">
              {/* Sidebar content here */}
              <div>
                {/* logo and name  */}
                <div className="w-full sm:py-5 md:py-8 lg:py-10 flex justify-center items-center">
                  <span className="flex justify-start items-center gap-2">
                    <img
                      className="w-10"
                      src="https://raw.githubusercontent.com/mehhed/fakeData/main/Group%2074.png"
                      alt=""
                    />
                    <span className=" text-xl font-semibold">
                      <span className="text-[#7d83ff]">ON</span>
                      Course
                    </span>
                  </span>
                </div>

                {/* nav one  */}
                <li className="text-[16px] font-medium">
                  <NavLink
                    to="/"
                    style={({ isActive }) => ({
                      color: isActive ? "#7d83ff" : "black",
                      backgroundColor: "transparent",
                      textDecoration: "none",
                      borderLeft: isActive
                        ? "5px solid #7d83ff"
                        : "5px solid transparent",
                      textAlign: "center",
                      borderRadius: "0px",
                      padding: "10px",
                    })}>
                    <span className="flex justify-start gap-2 items-center">
                      <img
                        className="w-5 ml-5"
                        src="https://raw.githubusercontent.com/mehhed/fakeData/main/Overview.png"
                        alt=""
                      />
                      <span>Overview</span>
                    </span>
                  </NavLink>
                </li>
                {/* nav one  */}
                <li className="text-[16px] font-medium">
                  <NavLink
                    to="/MyCourse"
                    style={({ isActive }) => ({
                      color: isActive ? "#7d83ff" : "black",
                      backgroundColor: "transparent",
                      textDecoration: "none",
                      borderLeft: isActive
                        ? "5px solid #7d83ff"
                        : "5px solid transparent",
                      textAlign: "center",
                      borderRadius: "0px",
                      padding: "10px",
                    })}>
                    <span className="flex justify-start gap-2 items-center">
                      <img
                        className="w-5 ml-5"
                        src="https://raw.githubusercontent.com/mehhed/fakeData/main/fi-rr-book-alt.png"
                        alt=""
                      />
                      <span>My Course</span>
                    </span>
                  </NavLink>
                </li>
                {/* nav one  */}
                <li className="text-[16px] font-medium">
                  <NavLink
                    to="/Completed"
                    style={({ isActive }) => ({
                      color: isActive ? "#7d83ff" : "black",
                      backgroundColor: "transparent",
                      textDecoration: "none",
                      borderLeft: isActive
                        ? "5px solid #7d83ff"
                        : "5px solid transparent",
                      textAlign: "center",
                      borderRadius: "0px",
                      padding: "10px",
                    })}>
                    <span className="flex justify-start gap-2 items-center">
                      <img
                        className="w-5 ml-5"
                        src="https://raw.githubusercontent.com/mehhed/fakeData/main/fi-rr-graduation-cap.png"
                        alt=""
                      />
                      <span>Completed</span>
                    </span>
                  </NavLink>
                </li>
                {/* nav one  */}
                <li className="text-[16px] font-medium">
                  <NavLink
                    to="/FinancialAid"
                    style={({ isActive }) => ({
                      color: isActive ? "#7d83ff" : "black",
                      backgroundColor: "transparent",
                      textDecoration: "none",
                      borderLeft: isActive
                        ? "5px solid #7d83ff"
                        : "5px solid transparent",
                      textAlign: "center",
                      borderRadius: "0px",
                      padding: "10px",
                    })}>
                    <span className="flex justify-start gap-2 items-center">
                      <img
                        className="w-5 ml-5"
                        src="https://raw.githubusercontent.com/mehhed/fakeData/main/fi-rr-cube.png"
                        alt=""
                      />
                      <span>Financial Aid</span>
                    </span>
                  </NavLink>
                </li>
                {/* nav one  */}
                <li className="text-[16px] font-medium">
                  <NavLink
                    to="/Transactions"
                    style={({ isActive }) => ({
                      color: isActive ? "#7d83ff" : "black",
                      backgroundColor: "transparent",
                      textDecoration: "none",
                      borderLeft: isActive
                        ? "5px solid #7d83ff"
                        : "5px solid transparent",
                      textAlign: "center",
                      borderRadius: "0px",
                      padding: "10px",
                    })}>
                    <span className="flex justify-start gap-2 items-center">
                      <img
                        className="w-5 ml-5"
                        src="https://raw.githubusercontent.com/mehhed/fakeData/main/fi-rr-dollar.png"
                        alt=""
                      />
                      <span>Transactions</span>
                    </span>
                  </NavLink>
                </li>
                {/* nav one  */}
                <li className="text-[16px] font-medium">
                  <NavLink
                    to="/Reports"
                    style={({ isActive }) => ({
                      color: isActive ? "#7d83ff" : "black",
                      backgroundColor: "transparent",
                      textDecoration: "none",
                      borderLeft: isActive
                        ? "5px solid #7d83ff"
                        : "5px solid transparent",
                      textAlign: "center",
                      borderRadius: "0px",
                      padding: "10px",
                    })}>
                    <span className="flex justify-start gap-2 items-center">
                      <img
                        className="w-5 ml-5"
                        src="https://raw.githubusercontent.com/mehhed/fakeData/main/fi-rr-signal-alt-1.png"
                        alt=""
                      />
                      <span>Reports</span>
                    </span>
                  </NavLink>
                </li>
                {/* nav one  */}
                <li className="text-[16px] font-medium">
                  <NavLink
                    to="/Statistics"
                    style={({ isActive }) => ({
                      color: isActive ? "#7d83ff" : "black",
                      backgroundColor: "transparent",
                      textDecoration: "none",
                      borderLeft: isActive
                        ? "5px solid #7d83ff"
                        : "5px solid transparent",
                      textAlign: "center",
                      borderRadius: "0px",
                      padding: "10px",
                    })}>
                    <span className="flex justify-start gap-2 items-center">
                      <img
                        className="w-5 ml-5"
                        src="https://raw.githubusercontent.com/mehhed/fakeData/main/fi-rr-chart-histogram.png"
                        alt=""
                      />
                      <span>Statistics</span>
                    </span>
                  </NavLink>
                </li>
              </div>
              {/*  */}
              <div className="my-5">
                <li className="text-[16px] font-medium">
                  <NavLink
                    to="/Statistics"
                    style={({ isActive }) => ({
                      color: isActive ? "#7d83ff" : "black",
                      backgroundColor: "transparent",
                      textDecoration: "none",
                      borderLeft: isActive
                        ? "5px solid #7d83ff"
                        : "5px solid transparent",
                      textAlign: "center",
                      borderRadius: "0px",
                      padding: "10px",
                    })}>
                    <span className="flex justify-start gap-2 items-center">
                      <img
                        className="w-5 ml-5"
                        src="https://raw.githubusercontent.com/mehhed/fakeData/main/fi-rr-signal-alt-1.png"
                        alt=""
                      />
                      <span>Support</span>
                    </span>
                  </NavLink>
                </li>
                <li className="text-[16px] font-medium">
                  <NavLink
                    to="/Statistics"
                    style={({ isActive }) => ({
                      color: isActive ? "#7d83ff" : "black",
                      backgroundColor: "transparent",
                      textDecoration: "none",
                      borderLeft: isActive
                        ? "5px solid #7d83ff"
                        : "5px solid transparent",
                      textAlign: "center",
                      borderRadius: "0px",
                      padding: "10px",
                    })}>
                    <span className="flex justify-start gap-2 items-center">
                      <img
                        className="w-5 ml-5"
                        src="https://raw.githubusercontent.com/mehhed/fakeData/main/settings.png"
                        alt=""
                      />
                      <span>Settings</span>
                    </span>
                  </NavLink>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-scroll max-h-screen">
        <OverView></OverView>
      </div>
    </div>
  );
};

export default Home;
