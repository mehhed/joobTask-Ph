import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import { BiSolidUser } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [navbar, setnavbar] = useState(false);
  return (
    <div className="sticky top-0 py-4 bg-[#20232d] z-50">
      <div className="flex justify-between items-center h-full w-full">
        <div className="text-white text-2xl md:text-3xl flex-1">
          Mehedi Hasan
        </div>
        <div
          onClick={() => {
            setnavbar(!navbar);
          }}
          className="lg:hidden cursor-pointer text-2xl flex justify-end flex-1 text-white">
          {navbar ? <AiOutlineClose /> : <HiOutlineMenu />}
        </div>
        <div
          className={`lg:flex  flex-1 ${
            navbar ? "block" : "hidden"
          } absolute lg:static top-full left-0 w-full bg-[#20232d] lg:bg-transparent justify-end z-40`}>
          <ul className="flex flex-col lg:flex-row lg:justify-end justify-start gap-x-5 lg:items-center text-white">
            <li className="lg:my-1 my-1">
              <NavLink
                onClick={() => {
                  setnavbar(!navbar);
                }}
                to={`/`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active text-[#15fffd]"
                    : isPending
                    ? "pending"
                    : "block lg:inline-block"
                }>
                Home
              </NavLink>
            </li>
            <li className="lg:my-1 my-1">
              <NavLink
                onClick={() => {
                  setnavbar(!navbar);
                }}
                to={`/About`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active text-[#15fffd]"
                    : isPending
                    ? "pending"
                    : ""
                }>
                About
              </NavLink>
            </li>
            <li className="lg:my-1 my-1">
              <NavLink
                onClick={() => {
                  setnavbar(!navbar);
                }}
                to={`#education`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active text-[#15fffd]"
                    : isPending
                    ? "pending"
                    : ""
                }>
                Education
              </NavLink>
            </li>
            <li className="lg:my-1 my-1">
              <NavLink
                onClick={() => {
                  setnavbar(!navbar);
                }}
                to={`/Project`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active text-[#15fffd]"
                    : isPending
                    ? "pending"
                    : ""
                }>
                Project
              </NavLink>
            </li>
            <li className="lg:my-1 my-1">
              <NavLink
                onClick={() => {
                  setnavbar(!navbar);
                }}
                to={`/Contact`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active text-[#15fffd]"
                    : isPending
                    ? "pending"
                    : ""
                }>
                Contact
              </NavLink>
            </li>
            <li className="lg:my-1 my-1">
              <NavLink
                onClick={() => {
                  setnavbar(!navbar);
                }}
                to={`/login`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active text-[#15fffd]"
                    : isPending
                    ? "pending "
                    : ""
                }>
                <BiSolidUser></BiSolidUser>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
