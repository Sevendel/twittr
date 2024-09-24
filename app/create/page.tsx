/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import {
  Content,
  availableSchedule,
  formatTime,
  tableHeadings,
} from "@/utils/utils";
import { FaClock } from "react-icons/fa6";
import Handle from "../components/UserHandle";

const Dashboard = () => {
  const [yourSchedule, updateYourSchedule] = useState(availableSchedule);

  //👇🏻 add scheduled post
  const handleAddPost = (id: number, time: number) => {
    console.log({ id, time });
  };

  //👇🏻 delete scheduled post
  const handleDeletePost = (
    e: React.MouseEvent<HTMLParagraphElement>,
    content: Content,
    time: number
  ) => {
    e.stopPropagation();
    if (content.day !== undefined) {
      console.log({ time, content });
    }
  };

  return (
    <main className="min-h-screen w-full">
      <header className="my-6 flex w-full items-center justify-center">
        <h2 className="mr-2 text-center text-3xl font-extrabold">
          {/* Your Post Schedules */}
          <Handle />
        </h2>
        <FaClock className="text-3xl text-amber-500" />
      </header>
      <div className="px-4">
        <div className="h-[80vh] w-full overflow-y-scroll">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {tableHeadings.map((day, index) => (
                  <th
                    key={index}
                    className="bg-amber-700 p-4 text-lg font-bold"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {yourSchedule.map((item, index) => (
                <tr key={index}>
                  <td className="bg-amber-800 text-lg font-bold">
                    {formatTime(item.time)}
                  </td>
                  {item.schedule.map((sch, id) => (
                    <td
                      key={id}
                      onClick={() => handleAddPost(id, item.time)}
                      className="cursor-pointer border"
                    >
                      {sch.map((content, ind: number) => (
                        <div
                          key={ind}
                          onClick={(e) =>
                            handleDeletePost(e, content, item.time)
                          }
                          className={`p-3 ${
                            content.published ? "bg-pink-500" : "bg-green-600"
                          }  mb-2 cursor-pointer rounded-md text-xs`}
                        >
                          <p className="mb-2 text-gray-700">
                            {content.minutes === 0
                              ? "o'clock"
                              : `at ${content.minutes} minutes past`}
                          </p>
                          <p className=" text-white">{content.content}</p>
                        </div>
                      ))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
