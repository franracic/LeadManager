import React from "react";

const Header = () => {
  return (
    <div className="items-end flex fixed z-50 inset-0 flex-col backdrop-blur-sm grow overflow-x-hidden overflow-y-auto">
      <div className="max-w-4xl w-full bg-white grow flex-col flex transform duration-300">
        <div className="px-11 py-12 grow flex-col flex">
          <h2 className="text-6xl max-w-sm">Hey! Tell us all the things</h2>
          <form className="mt-10 grow flex-col flex">
            <div className="justify-between flex">
              <div className="w-96">
                <div data-error="false" className="w-full flex flex-col">
                  <header data-className="head" className="mb-4">
                    <h3 data-className="title">Name</h3>
                  </header>
                  <div
                    data-className="field"
                    className="rounded-md bg-slate-100 flex flex-col"
                  >
                    <input
                      className="px-4 min-h-14 bg-transparent outline-0 resize-none"
                      name="nameOrCompany"
                      placeholder="Fran Račić"
                      value=""
                    />
                  </div>
                </div>
              </div>
              <div className="w-96">
                <div data-error="false" className="w-full flex flex-col">
                  <header data-className="head" className="mb-4">
                    <h3 data-className="title">Your Email</h3>
                  </header>
                  <div
                    data-className="field"
                    className="rounded-md bg-slate-100 flex flex-col"
                  >
                    <input
                      className="px-4 min-h-14 bg-transparent outline-0 resize-none"
                      name="email"
                      placeholder="fran.racic@gmail.com"
                      value=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="mb-4">I'm interested in...</h3>
              <ul className="flex-wrap flex ps-0">
                <li className="mx-2 my-2 px-4 py-3 border-2 cursor-pointer rounded-lg">
                  <p>Web Development</p>
                </li>
                <li className="mx-2 my-2 px-4 py-3 border-2 cursor-pointer rounded-lg">
                  <p>App Development</p>
                </li>
                <li className="mx-2 my-2 px-4 py-3 border-2 cursor-pointer rounded-lg">
                  <p>UX/UI Design</p>
                </li>
                <li className="mx-2 my-2 px-4 py-3 border-2 cursor-pointer rounded-lg">
                  <p>Branding</p>
                </li>
                <li className="mx-2 my-2 px-4 py-3 border-2 cursor-pointer rounded-lg">
                  <p>Site from scratch</p>
                </li>
                <li className="mx-2 my-2 px-4 py-3 border-2 cursor-pointer rounded-lg">
                  <p>App from scratch</p>
                </li>
                <li className="mx-2 my-2 px-4 py-3 border-2 cursor-pointer rounded-lg">
                  <p>Maintenance</p>
                </li>
              </ul>
            </div>
            <div data-error="false" className="mt-10 grow flex-col flex">
              <header data-className="head" className="mb-4">
                <h3 data-className="title">Tell us more about your project</h3>
              </header>
              <div
                data-className="field"
                className="cursor-text grow items-start flex rounded-md bg-slate-100"
              >
                <textarea
                  className="p-4 grow min-h-14 bg-transparent outline-0 resize-none flex flex-col border-0"
                  name="about"
                  placeholder="Something about your great idea"
                  style={{ height: "90px" }}
                ></textarea>
              </div>
            </div>
            <div className="pt-6 flex items-center justify-between">
              <p className="text-slate-300">
                My Email{" "}
                <a href="fran.racic@gmail.com">
                  <u>fran.racic@gmail.com</u>
                </a>
              </p>
              <button
                type="submit"
                className="flex items-center py-3 px-6 rounded-3xl overflow-hidden"
              >
                <span className="flex flex-col h-5 z-20">
                  Submit the request
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
