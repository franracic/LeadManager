import React from "react";
import ProjectCard from "./ProjectCard";

export default function NewAdmin() {
  return (
    <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-2xl w-full">
      <div className="flex items-start justify-between">
        <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          <div className="h-screen pt-2 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
            <div className="h-auto px-4 overflow-auto md:px-6">
              <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
                Good afternoon, Fran
              </h1>
              <h2 className="text-gray-400 text-md">
                Here&#x27;s what&#x27;s happening with your website today.
              </h2>
              <div className="flex flex-col items-center w-full my-6 space-y-4 md:space-x-4 md:space-y-0 md:flex-row">
                <div className="w-full md:w-6/12">
                  <div className="relative w-full overflow-hidden bg-white shadow-lg dark:bg-gray-700">
                    <a href="#" className="block w-full h-full">
                      <div className="flex items-center justify-between px-4 py-6 space-x-4">
                        <div className="flex items-center">
                          <span className="relative p-5 bg-yellow-100 rounded-full">
                            <svg
                              width="40"
                              fill="currentColor"
                              height="40"
                              className="absolute h-5 text-yellow-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                              viewBox="0 0 1792 1792"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
                            </svg>
                          </span>
                          <p className="ml-2 text-sm font-semibold text-gray-700 border-b border-gray-200 dark:text-white">
                            Level 2 Ambassador
                          </p>
                        </div>
                        <div className="mt-6 text-xl font-bold text-black border-b border-gray-200 md:mt-0 dark:text-white">
                          $44,453.39
                          <span className="text-xs text-gray-400">/$100K</span>
                        </div>
                      </div>
                      <div className="w-full h-3 bg-gray-100">
                        <div className="w-2/5 h-full text-xs text-center text-white bg-green-400"></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="flex items-center w-full space-x-4 md:w-1/2">
                  <div className="w-1/2">
                    <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
                      <p className="text-2xl font-bold text-black dark:text-white">
                        12
                      </p>
                      <p className="text-sm text-gray-400">Active projects</p>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
                      <p className="text-2xl font-bold text-black dark:text-white">
                        $93.76
                      </p>
                      <p className="text-sm text-gray-400">
                        Commission in approval
                      </p>
                      <span className="absolute p-4 bg-purple-500 rounded-full top-2 right-4">
                        <svg
                          width="40"
                          fill="currentColor"
                          height="40"
                          className="absolute h-4 text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-wrap sm:flex-row ">
              <div className="w-full sm:w-1/2 xl:w-1/3">
                <ProjectCard
                  logo={
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 256 262"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid"
                    >
                      <path
                        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                        fill="#4285F4"
                      ></path>
                      <path
                        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                        fill="#34A853"
                      ></path>
                      <path
                        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                        fill="#FBBC05"
                      ></path>
                      <path
                        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                        fill="#EB4335"
                      ></path>
                    </svg>
                  }
                  companyName="Google"
                  companyDescription="Google Inc."
                  taskDone={25}
                  taskTotal={50}
                  tags={["Web Development", "UX/UI Design"]}
                  avatars={[
                    { src: "/images/person/1.jpg", alt: "Guy" },
                    { src: "/images/person/2.jpeg", alt: "Max" },
                    { src: "/images/person/3.jpg", alt: "Charles" },
                    { src: "/images/person/4.jpg", alt: "Jade" },
                  ]}
                  dueDate="23 SEP"
                />
              </div>
              <div className="w-full sm:w-1/2 xl:w-1/3">
                <div className="mx-0 mb-4 sm:ml-4 xl:mr-4">
                  <div className="w-full bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                    <p className="p-4 font-bold text-black text-md dark:text-white">
                      My Tasks
                      <span className="ml-2 text-sm text-gray-500 dark:text-gray-300">
                        (05)
                      </span>
                    </p>
                    <ul>
                      <li className="flex items-center justify-between py-3 text-gray-600 border-b-2 border-gray-100 dark:text-gray-200 dark:border-gray-800">
                        <div className="flex items-center justify-start text-sm">
                          <span className="mx-4">01</span>
                          <span>Create wireframe</span>
                        </div>
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="mx-4 text-gray-400 dark:text-gray-300"
                          viewBox="0 0 1024 1024"
                        >
                          <path
                            d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </li>
                      <li className="flex items-center justify-between py-3 text-gray-600 border-b-2 border-gray-100 dark:text-gray-200 dark:border-gray-800">
                        <div className="flex items-center justify-start text-sm">
                          <span className="mx-4">02</span>
                          <span>Dashboard design</span>
                          <span className="flex items-center ml-2 text-gray-400 lg:ml-6 dark:text-gray-300">
                            3
                            <svg
                              width="15"
                              height="15"
                              fill="currentColor"
                              className="ml-1"
                              viewBox="0 0 512 512"
                            >
                              <path
                                d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                          <span className="flex items-center mx-4 text-gray-400 dark:text-gray-300">
                            3
                            <svg
                              width="15"
                              height="15"
                              className="ml-1"
                              fill="currentColor"
                              viewBox="0 0 384 512"
                            >
                              <path
                                d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8c-.6 16.1-4.2 28.5-11 36.9c-15.4 19.2-49.3 22.4-85.2 25.7c-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3c0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6c3.1-5.2 7.8-9.8 14.9-13.4c16.2-8.2 40.4-10.4 66.1-12.8c42.2-3.9 90-8.4 118.2-43.4c14-17.4 21.1-39.8 21.6-67.9c31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                        </div>
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="mx-4 text-gray-400 dark:text-gray-300"
                          viewBox="0 0 1024 1024"
                        >
                          <path
                            d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </li>
                      <li className="flex items-center justify-between py-3 text-gray-600 border-b-2 border-gray-100 dark:text-gray-200 dark:border-gray-800">
                        <div className="flex items-center justify-start text-sm">
                          <span className="mx-4">03</span>
                          <span>Components card</span>
                          <span className="flex items-center ml-2 text-gray-400 lg:ml-6 dark:text-gray-300">
                            3
                            <svg
                              width="15"
                              height="15"
                              fill="currentColor"
                              className="ml-1"
                              viewBox="0 0 512 512"
                            >
                              <path
                                d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                        </div>
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="mx-4 text-gray-400 dark:text-gray-300"
                          viewBox="0 0 1024 1024"
                        >
                          <path
                            d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </li>
                      <li className="flex items-center justify-between py-3 text-gray-400 border-b-2 border-gray-100 dark:border-gray-800">
                        <div className="flex items-center justify-start text-sm">
                          <span className="mx-4">04</span>
                          <span className="line-through">
                            Google logo design
                          </span>
                        </div>
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 1024 1024"
                          className="mx-4 text-green-500"
                        >
                          <path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </li>
                      <li className="flex items-center justify-between py-3 text-gray-400 border-b-2 border-gray-100 dark:border-gray-800">
                        <div className="flex items-center justify-start text-sm">
                          <span className="mx-4">05</span>
                          <span className="line-through">
                            Header navigation
                          </span>
                        </div>
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 1024 1024"
                          className="mx-4 text-green-500"
                        >
                          <path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </li>
                      <li className="flex items-center justify-between py-3 text-gray-600 border-b-2 border-gray-100 dark:text-gray-200 dark:border-gray-800">
                        <div className="flex items-center justify-start text-sm">
                          <span className="mx-4">06</span>
                          <span>International</span>
                          <span className="flex items-center ml-2 text-gray-400 lg:ml-6 dark:text-gray-300">
                            3
                            <svg
                              width="15"
                              height="15"
                              fill="currentColor"
                              className="ml-1"
                              viewBox="0 0 512 512"
                            >
                              <path
                                d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                          <span className="flex items-center mx-4 text-gray-400 dark:text-gray-300">
                            3
                            <svg
                              width="15"
                              height="15"
                              className="ml-1"
                              fill="currentColor"
                              viewBox="0 0 384 512"
                            >
                              <path
                                d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8c-.6 16.1-4.2 28.5-11 36.9c-15.4 19.2-49.3 22.4-85.2 25.7c-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3c0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6c3.1-5.2 7.8-9.8 14.9-13.4c16.2-8.2 40.4-10.4 66.1-12.8c42.2-3.9 90-8.4 118.2-43.4c14-17.4 21.1-39.8 21.6-67.9c31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                        </div>
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="mx-4 text-gray-400 dark:text-gray-300"
                          viewBox="0 0 1024 1024"
                        >
                          <path
                            d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </li>
                      <li className="flex items-center justify-between py-3 text-gray-600 dark:text-gray-200">
                        <div className="flex items-center justify-start text-sm">
                          <span className="mx-4">07</span>
                          <span>Production data</span>
                        </div>
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="mx-4 text-gray-400 dark:text-gray-300"
                          viewBox="0 0 1024 1024"
                        >
                          <path
                            d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mb-4 sm:ml-4 xl:mr-4">
                  <div className="w-full bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4">
                      <p className="font-bold text-black text-md dark:text-white">
                        Google
                      </p>
                      <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
                        <svg
                          width="15"
                          height="15"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <g fill="none">
                            <path
                              d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
                              fill="currentColor"
                            ></path>
                          </g>
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center justify-between px-4 py-2 text-gray-600 bg-blue-100 border-l-4 border-blue-500 dark:bg-gray-800">
                      <p className="flex items-center text-xs dark:text-white">
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="mr-2 text-blue-500"
                          viewBox="0 0 24 24"
                        >
                          <g fill="none">
                            <path
                              d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z"
                              fill="currentColor"
                            ></path>
                          </g>
                        </svg>
                        Create wireframe
                      </p>
                      <div className="flex items-center">
                        <span className="ml-2 mr-2 text-xs font-bold dark:text-gray-200 md:ml-4">
                          25 min 20s
                        </span>
                        <button className="p-1 mr-4 text-sm text-gray-400 bg-blue-500 border rounded">
                          <svg
                            width="17"
                            height="17"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="text-white"
                          >
                            <g fill="none">
                              <path
                                d="M9 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1zm6 0a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1z"
                                fill="currentColor"
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border-b-2 border-gray-100">
                      <p className="font-bold text-black text-md dark:text-white">
                        Slack
                      </p>
                      <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
                        <svg
                          width="15"
                          height="15"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <g fill="none">
                            <path
                              d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
                              fill="currentColor"
                            ></path>
                          </g>
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center justify-between px-4 py-2 text-gray-600 border-b-2 border-gray-100">
                      <p className="flex items-center text-xs dark:text-white">
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="mr-2"
                          viewBox="0 0 24 24"
                        >
                          <g fill="none">
                            <path
                              d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z"
                              fill="currentColor"
                            ></path>
                          </g>
                        </svg>
                        International
                      </p>
                      <div className="flex items-center">
                        <span className="ml-2 mr-2 text-xs text-gray-400 md:ml-4">
                          30 min
                        </span>
                        <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
                          <svg
                            width="15"
                            height="15"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <g fill="none">
                              <path
                                d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
                                fill="currentColor"
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-4 py-2 text-gray-600 border-b-2 border-gray-100">
                      <p className="flex items-center text-xs dark:text-white">
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="mr-2"
                          viewBox="0 0 24 24"
                        >
                          <g fill="none">
                            <path
                              d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z"
                              fill="currentColor"
                            ></path>
                          </g>
                        </svg>
                        Slack logo design
                      </p>
                      <div className="flex items-center">
                        <span className="ml-2 mr-2 text-xs text-gray-400 md:ml-4">
                          30 min
                        </span>
                        <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
                          <svg
                            width="15"
                            height="15"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <g fill="none">
                              <path
                                d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
                                fill="currentColor"
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-4 py-2 text-gray-600">
                      <p className="flex items-center text-xs dark:text-white">
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="mr-2"
                          viewBox="0 0 24 24"
                        >
                          <g fill="none">
                            <path
                              d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z"
                              fill="currentColor"
                            ></path>
                          </g>
                        </svg>
                        Dahboard template
                      </p>
                      <div className="flex items-center">
                        <span className="ml-2 mr-2 text-xs text-gray-400 md:ml-4">
                          30 min
                        </span>
                        <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
                          <svg
                            width="15"
                            height="15"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <g fill="none">
                              <path
                                d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
                                fill="currentColor"
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 xl:w-1/3">
                <div className="mb-4">
                  <div className="p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                    <div className="flex flex-wrap overflow-hidden">
                      <div className="w-full rounded shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-xl font-bold text-left text-black dark:text-white">
                            Dec 2021
                          </div>
                          <div className="flex space-x-4">
                            <button className="p-2 text-white bg-blue-500 rounded-full">
                              <svg
                                width="15"
                                height="15"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"
                                ></path>
                              </svg>
                            </button>
                            <button className="p-2 text-white bg-blue-500 rounded-full">
                              <svg
                                width="15"
                                height="15"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="-mx-2">
                          <table className="w-full dark:text-white">
                            <tr>
                              <th className="px-2 py-3 md:px-3 ">S</th>
                              <th className="px-2 py-3 md:px-3 ">M</th>
                              <th className="px-2 py-3 md:px-3 ">T</th>
                              <th className="px-2 py-3 md:px-3 ">W</th>
                              <th className="px-2 py-3 md:px-3 ">T</th>
                              <th className="px-2 py-3 md:px-3 ">F</th>
                              <th className="px-2 py-3 md:px-3 ">S</th>
                            </tr>
                            <tr className="text-gray-400 dark:text-gray-500">
                              <td className="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">
                                25
                              </td>
                              <td className="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">
                                26
                              </td>
                              <td className="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">
                                27
                              </td>
                              <td className="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">
                                28
                              </td>
                              <td className="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">
                                29
                              </td>
                              <td className="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">
                                30
                              </td>
                              <td className="px-2 py-3 text-center text-gray-800 cursor-pointer md:px-3 hover:text-blue-500">
                                1
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                2
                              </td>
                              <td className="relative px-1 py-3 text-center cursor-pointer hover:text-blue-500">
                                3
                                <span className="absolute bottom-0 w-2 h-2 transform -translate-x-1/2 bg-blue-500 rounded-full left-1/2"></span>
                              </td>
                              <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                4
                              </td>
                              <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                5
                              </td>
                              <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                6
                              </td>
                              <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                7
                              </td>
                              <td className="relative px-2 py-3 text-center cursor-pointer md:px-3 lg:px-3 hover:text-blue-500">
                                8
                                <span className="absolute bottom-0 w-2 h-2 transform -translate-x-1/2 bg-yellow-500 rounded-full left-1/2"></span>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                9
                              </td>
                              <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                10
                              </td>
                              <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                11
                              </td>
                              <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                12
                              </td>
                              <td className="px-2 py-3 text-center text-white cursor-pointer md:px-3">
                                <span className="p-2 bg-blue-500 rounded-full">
                                  13
                                </span>
                              </td>
                              <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                14
                              </td>
                              <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                15
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                16
                              </td>
                              <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                17
                              </td>
                              <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                18
                              </td>
                              <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                19
                              </td>
                              <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                20
                              </td>
                              <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                21
                              </td>
                              <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                22
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                23
                              </td>
                              <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                24
                              </td>
                              <td className="relative px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                25
                                <span className="absolute bottom-0 w-2 h-2 transform -translate-x-1/2 bg-red-500 rounded-full left-1/2"></span>
                              </td>
                              <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                26
                              </td>
                              <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                27
                              </td>
                              <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                28
                              </td>
                              <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                29
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                30
                              </td>
                              <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                31
                              </td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                    <p className="font-bold text-black text-md dark:text-white">
                      Messages
                    </p>
                    <ul>
                      <li className="flex items-center my-6 space-x-2">
                        <a href="#" className="relative block">
                          <img
                            alt="profil"
                            src="/images/person/1.jpg"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                        <div className="flex flex-col">
                          <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                            Charlie Rabiller
                          </span>
                          <span className="ml-2 text-sm text-gray-400 dark:text-gray-300">
                            Hey John ! Do you read the NextJS doc ?
                          </span>
                        </div>
                      </li>
                      <li className="flex items-center my-6 space-x-2">
                        <a href="#" className="relative block">
                          <img
                            alt="profil"
                            src="/images/person/5.jpg"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                        <div className="flex flex-col">
                          <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                            Marie Lou
                          </span>
                          <span className="ml-2 text-sm text-gray-400 dark:text-gray-300">
                            No I think the dog is better...
                          </span>
                        </div>
                      </li>
                      <li className="flex items-center my-6 space-x-2">
                        <a href="#" className="relative block">
                          <img
                            alt="profil"
                            src="/images/person/6.jpg"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                        <div className="flex flex-col">
                          <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                            Ivan Buck
                          </span>
                          <span className="ml-2 text-sm text-gray-400 dark:text-gray-300">
                            Seriously ? haha Bob is not a child !
                          </span>
                        </div>
                      </li>
                      <li className="flex items-center my-6 space-x-2">
                        <a href="#" className="relative block">
                          <img
                            alt="profil"
                            src="/images/person/7.jpg"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                        <div className="flex flex-col">
                          <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                            Marina Farga
                          </span>
                          <span className="ml-2 text-sm text-gray-400 dark:text-gray-300">
                            Do you need that design ?
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
