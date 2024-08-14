import React from "react";

const OverView = () => {
  return (
    <div className="p-5 w-full">
      {/*  top bar  */}
      <div className="flex items-center justify-between w-full gap-5">
        <span className="text-[25px] font-medium text-[#4163E9] lg:pr-[200px]">
          Overview
        </span>
        <span className="flex-1">
          <input
            type="text"
            placeholder="&#x1F50D; Search"
            className="px-4 py-2 -[100%]  border rounded-3xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
          />
        </span>
        <span className="p-3 rounded-full bg-gray-100">
          <img
            src="https://raw.githubusercontent.com/mehhed/fakeData/main/fi-rr-bell.png"
            alt=""
          />
        </span>
        <span className="flex justify-end items-center gap-2">
          <spa>
            <img
              className="w-[48px]  rounded-full"
              src="https://raw.githubusercontent.com/mehhed/fakeData/main/f2cf44bfa3af771f6396363d4ae67aab.jpg"
              alt=""
            />
          </spa>
          <span>
            <h2 className="text-lg font-bold">Alexa Calen</h2>
            <p>Student</p>
          </span>
        </span>
      </div>
      {/*  main content  */}
      <div className="grid grid-cols-3 gap-5">
        {/* left part */}
        <div className="">
          <div className="w-full rounded-md m-2 p-5 bg-gradient-to-r from-[#4163E9] to-[#a7b6f3]">
            <h2 className="text-[20px] font-medium text-white">
              Foundations of User Experience (UX) Design
            </h2>
            <div className="flex justify-between items-end gap-5">
              <div>
                <div className="text-[14px] font-medium text-white flex justify-center items-center gap-3 mt-1">
                  <span>4 Assignment</span>
                  <span>20 Videos</span>
                </div>
                <span className="cursor-pointer w-full p-3 bg-white block rounded-3xl mt-5">
                  Continue Course
                </span>
              </div>
              <div>
                <div
                  className="radial-progress text-white"
                  style={{ "--value": 80 }}
                  role="progressbar">
                  80% <br />
                  <span className="text-[5px]">Complete</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-md m-2 p-5  bg-[#f7f7ff]">
            <h2 className="text-[20px] font-medium ">
              Foundations of User Experience (UX) Design
            </h2>
            <div className="flex justify-between items-end gap-5">
              <div>
                <div className="text-[14px] font-medium  flex justify-center items-center gap-3 mt-1">
                  <span>4 Assignment</span>
                  <span>20 Videos</span>
                </div>
                <span className="cursor-pointer w-full p-3 bg-gradient-to-r from-[#4163E9] to-[#a7b6f3] block rounded-3xl mt-5">
                  Continue Course
                </span>
              </div>
              <div>
                <div
                  className="radial-progress "
                  style={{ "--value": 80 }}
                  role="progressbar">
                  80% <br />
                  <span className="text-[5px]">Complete</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-md m-2 p-5  bg-[#f7f7ff]">
            <h2 className="text-[20px] font-medium ">
              Foundations of User Experience (UX) Design
            </h2>
            <div className="flex justify-between items-end gap-5">
              <div>
                <div className="text-[14px] font-medium  flex justify-center items-center gap-3 mt-1">
                  <span>4 Assignment</span>
                  <span>20 Videos</span>
                </div>
                <span className="cursor-pointer w-full p-3 bg-gradient-to-r from-[#4163E9] to-[#a7b6f3] block rounded-3xl mt-5">
                  Continue Course
                </span>
              </div>
              <div>
                <div
                  className="radial-progress "
                  style={{ "--value": 70 }}
                  role="progressbar">
                  70% <br />
                  <span className="text-[5px]">Complete</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-md m-2 p-5  bg-[#f7f7ff]">
            <h2 className="text-[20px] font-medium ">
              Foundations of User Experience (UX) Design
            </h2>
            <div className="flex justify-between items-end gap-5">
              <div>
                <div className="text-[14px] font-medium  flex justify-center items-center gap-3 mt-1">
                  <span>4 Assignment</span>
                  <span>20 Videos</span>
                </div>
                <span className="cursor-pointer w-full p-3 bg-gradient-to-r from-[#4163E9] to-[#a7b6f3] block rounded-3xl mt-5">
                  Continue Course
                </span>
              </div>
              <div>
                <div
                  className="radial-progress "
                  style={{ "--value": 80 }}
                  role="progressbar">
                  80% <br />
                  <span className="text-[5px]">Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right part */}
        <div className="col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <div className="text-[48px] font-semibold">04</div>
              <div>Completed Course</div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
