/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import {
  Content,
  DelSelectedCell,
  SelectedCell,
  availableSchedule,
  formatTime,
  tableHeadings,
} from "@/utils/utils";
import { FaClock } from "react-icons/fa6";
import Handle from "../components/UserHandle";



const Dashboard = () => {
  const [yourSchedule, updateYourSchedule] = useState(availableSchedule);

  const [selectedCell, setSelectedCell] = useState<SelectedCell>({
    day_id: 0,
    day: "",
    time_id: 0,
    time: "",
  });
  const [delSelectedCell, setDelSelectedCell] = useState<DelSelectedCell>({
    content: "",
    day_id: 0,
    day: "",
    time_id: 0,
    time: "",
    minutes: 0,
  });
  //👇🏻 triggers the add post modal
  const [addPostModal, setAddPostModal] = useState(false);
  //👇🏻 triggers the delete post modal
  const [deletePostModal, setDeletePostModal] = useState(false);

  const handleAddPost = (id: number, time: number) => {
    setSelectedCell({
      day_id: id + 1,
      day: tableHeadings[id + 1],
      time_id: time,
      time: formatTime(time),
    });
    setAddPostModal(true);
  };
  
  const handleDeletePost = (
    e: React.MouseEvent<HTMLParagraphElement>,
    content: Content,
    time: number
  ) => {
    e.stopPropagation();
    if (content.day !== undefined) {
      setDelSelectedCell({
        content: content.content,
        day_id: content.day,
        day: tableHeadings[content.day],
        time_id: time,
        time: formatTime(time),
        minutes: content.minutes,
      });
      setDeletePostModal(true);
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
