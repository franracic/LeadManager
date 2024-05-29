import React from "react";

const tagColors = {
  "Web Development": "text-blue-500 bg-blue-100",
  "App Development": "text-green-500 bg-green-100",
  "UX/UI Design": "text-purple-500 bg-purple-100",
  Branding: "text-yellow-500 bg-yellow-100",
  "Site from scratch": "text-red-500 bg-red-100",
  "App from scratch": "text-pink-500 bg-pink-100",
  Maintenance: "text-gray-500 bg-gray-100",
};
const ProjectCard = ({
  logo,
  companyName,
  companyDescription,
  taskDone,
  taskTotal,
  tags,
  avatars,
  dueDate,
}) => {
  return (
    <div className="mb-4">
      <div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <span className="relative p-2 bg-blue-100 rounded-xl">{logo}</span>
            <div className="flex flex-col">
              <span className="ml-2 font-bold text-black text-md dark:text-white">
                {companyName}
              </span>
              <span className="ml-2 text-sm text-gray-500 dark:text-white">
                {companyDescription}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4 space-x-12">
          <span className="flex items-center px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-200 rounded-md">
            PROGRESS
          </span>
          <span
            className={`flex items-center px-2 py-1 text-xs font-semibold text-red-400 bg-white border border-red-400 rounded-md`}
          >
            HIGH PRIORITY
          </span>
        </div>
        <div className="block m-auto">
          <div>
            <span className="inline-block text-sm text-gray-500 dark:text-gray-100">
              Tasks done :
              <span className="font-bold text-gray-700 dark:text-white">
                {taskDone}
              </span>
              /{taskTotal}
            </span>
          </div>
          <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
            <div
              className="h-full text-xs text-center text-white bg-purple-500 rounded-full"
              style={{ width: `${(taskDone / taskTotal) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className="flex items-center justify-start my-4 space-x-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`flex items-center px-2 py-1 text-xs font-semibold ${
                tagColors[tag] || "text-blue-500 bg-blue-100"
              } rounded-md`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex -space-x-2">
          {avatars.map((avatar, index) => (
            <a href="#" key={index} className="">
              <img
                className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                src={avatar.src}
                alt={avatar.alt}
              />
            </a>
          ))}
        </div>
        <span className="flex items-center px-2 py-1 mt-4 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-md w-fit">
          DUE DATE : {dueDate}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
