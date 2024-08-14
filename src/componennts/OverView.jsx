import React from "react";

const OverView = () => {
  let paiData = [
    { video: 70, practice: 30, _id: 1 },
    { video: 50, practice: 80, _id: 2 },
    { video: 90, practice: 20, _id: 3 },
    { video: 30, practice: 30, _id: 4 },
    { video: 70, practice: 70, _id: 5 },
    { video: 40, practice: 90, _id: 6 },
    { video: 10, practice: 30, _id: 7 },
    { video: 50, practice: 60, _id: 8 },
    { video: 80, practice: 50, _id: 9 },
    { video: 30, practice: 10, _id: 10 },
    { video: 90, practice: 70, _id: 11 },
    { video: 70, practice: 50, _id: 12 },
  ];

  const reminders = [
    {
      type: "Assignment -1",
      icon: "https://raw.githubusercontent.com/mehhed/fakeData/main/fi-sr-book.png",
      detail: "Foundations of User Experience...",
      due: "5 June 2024",
      faculty: "Same Jhon",
      status: "Done",
    },
    {
      type: "Quiz - 2",
      icon: "https://raw.githubusercontent.com/mehhed/fakeData/main/fi-sr-diploma.png",
      detail: "Foundations of User Experience...",
      due: "5 Aug 2024",
      faculty: "Jhon Ab",
      status: "Coming",
    },
    {
      type: "Last Class",
      icon: "https://raw.githubusercontent.com/mehhed/fakeData/main/Vector(3).png",
      detail: "Foundations of User Experience...",
      due: "5 June 2024",
      faculty: "Kabir Same",
      status: "Done",
    },
    {
      type: "Quiz - 2",
      icon: "https://raw.githubusercontent.com/mehhed/fakeData/main/fi-sr-diploma.png",
      detail: "Foundations of User Experience...",
      due: "5 June 2024",
      faculty: "Lee Jhon",
      status: "Coming",
    },
    {
      type: "Assignment - 4",
      icon: "https://raw.githubusercontent.com/mehhed/fakeData/main/fi-sr-book.png",
      detail: "Foundations of User Experience...",
      due: "5 June 2024",
      faculty: "Abraham Leo",
      status: "Done",
    },
    {
      type: "Last Class",
      icon: "https://raw.githubusercontent.com/mehhed/fakeData/main/Vector(3).png",
      detail: "Foundations of User Experience...",
      due: "5 June 2024",
      faculty: "Atik Saw",
      status: "Done",
    },
  ];

  let pai = paiData[0];
  console.log(pai.practice);

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
            className="px-4 py-2 w-[100%]  border rounded-3xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
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
          {/* section one */}
          <div className="grid grid-cols-1 md:grid-cols-2 m-2 gap-4">
            <div className="flex justify-between gap-5 bg-[#f7f7ff] rounded-lg p-5">
              <div className="">
                <div className="text-[48px] font-semibold">04</div>
                <div>Completed Course</div>
              </div>
              <div>
                <span className="p-3 rounded-full bg-gray-100 inline-block">
                  <img
                    src="https://raw.githubusercontent.com/mehhed/fakeData/main/graduation-cap%201.png"
                    className="w-[48px]"
                    alt=""
                  />
                </span>{" "}
                <br />
                <span className="text-xs">
                  20% lncrease{" "}
                  <img
                    className="float-right ml-2 mt-2"
                    src="https://raw.githubusercontent.com/mehhed/fakeData/main/Vector.png"
                    alt=""
                  />
                </span>
              </div>
            </div>
            <div className="flex justify-between gap-5 bg-[#f7f7ff] rounded-lg p-5">
              <div className="">
                <div className="text-[48px] font-semibold">12</div>
                <div>Course in Progress</div>
              </div>
              <div>
                <span className="p-3 rounded-full bg-gray-100 inline-block">
                  <img
                    src="https://raw.githubusercontent.com/mehhed/fakeData/main/graduation-cap%201(1).png"
                    className="w-[48px]"
                    alt=""
                  />
                </span>{" "}
                <br />
                <span className="text-xs">
                  20% decrease{" "}
                  <img
                    className="float-right ml-2 mt-2"
                    src="https://raw.githubusercontent.com/mehhed/fakeData/main/Vector(1).png"
                    alt=""
                  />
                </span>
              </div>
            </div>
          </div>
          {/* paichart section */}
          <div className="bg-[#f7f7ff] p-5 m-2 rounded-lg">
            <div className="flex justify-between items-center gap-5">
              <div>Course Activity</div>
              <div className="flex justify-center items-center gap-5">
                <span className="flex justify-start items-center gap-3">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#4163e9]"></div>
                  <span>video</span>
                </span>
                <span className="flex justify-start items-center gap-3">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#1e2e69]"></div>
                  <span>Practice</span>
                </span>
              </div>
              <div>
                <span className="inline-block py-3 px-5 rounded-3xl bg-white">
                  Mounthly{" "}
                  <img
                    src="https://raw.githubusercontent.com/mehhed/fakeData/main/Vector(2).png"
                    className="float-right mt-2 ms-2"
                    alt=""
                  />
                </span>
              </div>
            </div>
            <div className="flex h-[193px] w-full  mt-3 gap-3">
              <div className="flex flex-col justify-between h-full">
                <span>8H</span>
                <span>6H</span>
                <span>4H</span>
                <span>2H</span>
                <span>0H</span>
              </div>
              <div className="flex justify-between flex-1">
                {paiData?.map((oneData) => (
                  <div
                    className="h-full w-[30px] flex justify-center gap-1 items-end"
                    key={oneData?._id}>
                    <div
                      style={{ height: `${oneData?.video}%`, width: "8px" }}
                      className="rounded-3xl bg-[#4163e9]"></div>
                    <div
                      style={{ height: `${oneData?.practice}%`, width: "8px" }}
                      className="rounded-3xl bg-[#1e2e69]"></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center ps-8  mt-3">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>
          </div>
          {/* last section  */}
          <div className="p-5 m-2 bg-[#f7f7ff] rounded-lg">
            <div className="flex justify-between items-center gap-5">
              <span className="text-[25px] font-semibold">Remainder</span>
              <div>
                <span className="inline-block py-3 px-5 rounded-3xl bg-white">
                  Mounthly{" "}
                  <img
                    src="https://raw.githubusercontent.com/mehhed/fakeData/main/Vector(2).png"
                    className="float-right mt-2 ms-2"
                    alt=""
                  />
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Due</th>
                    <th>Faculty</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {reminders.map((reminder, index) => (
                    <tr key={index}>
                      <td>
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex justify-center items-center rounded-full bg-blue-100 text-blue-600">
                            <img
                              src={reminder?.icon}
                              className="avatar"
                              alt=""
                            />
                            {/* Placeholder for the icon */}
                          </div>
                          <div className="ml-3">
                            <div className="font-bold">{reminder.type}</div>
                            <div className="text-sm text-gray-500">
                              {reminder.detail}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{reminder.due}</td>
                      <td>
                        <div className="flex items-center">
                          <div className="avatar">
                            <div className="w-8 h-8 rounded-full">
                              <img
                                src={`https://raw.githubusercontent.com/mehhed/fakeData/main/f2cf44bfa3af771f6396363d4ae67aab.jpg`}
                                alt="Avatar"
                              />{" "}
                              {/* Placeholder for faculty image */}
                            </div>
                          </div>
                          <div className="ml-3">{reminder.faculty}</div>
                        </div>
                      </td>
                      <td>
                        <span
                          className={`px-3 py-1 rounded-full text-white ${
                            reminder.status === "Done"
                              ? "bg-blue-600"
                              : "bg-orange-500"
                          }`}>
                          {reminder.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
