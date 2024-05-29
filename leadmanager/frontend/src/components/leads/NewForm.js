import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addLead } from "../../actions/leads";

const Products = [
  "Sprint",
  "Design",
  "In Development",
  "Continous Integration",
];

const NewForm = ({ owner, state, handleClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    complexity: 0,
  });

  const { name, message, complexity, process } = formData;
  const onSubmit = (e) => {
    e.preventDefault();
    const lead = { name, message, owner, process, complexity, state };
    console.log(lead);
    dispatch(addLead(lead));
    setFormData({
      name: "",
      message: "",
      complexity: 0,
      process: "",
    });
  };
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <div className="items-end flex fixed z-50 inset-0 flex-col backdrop-blur-sm grow overflow-x-hidden overflow-y-auto">
      <button
        className="absolute top-8 end-10 z-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        onClick={handleClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="max-w-4xl w-full bg-white grow flex-col flex transform duration-300">
        <div className="px-11 py-12 grow flex-col flex">
          <h2 className="text-6xl max-w-sm">Add a Task</h2>
          <form className="mt-10 grow flex-col flex" onSubmit={onSubmit}>
            <div className="justify-between flex">
              <div className="w-96">
                <div className="w-full flex flex-col">
                  <header className="mb-4">
                    <h3>Name</h3>
                  </header>
                  <div className="rounded-md bg-slate-100 flex flex-col">
                    <input
                      className="px-4 min-h-14 bg-transparent outline-0 resize-none"
                      type="text"
                      name="name"
                      onChange={onChange}
                      value={name}
                    />
                  </div>
                </div>
              </div>
              <div className="w-96">
                <div className="w-full flex flex-col">
                  <header className="mb-4">
                    <h3>Time Complexity</h3>
                  </header>
                  <div className="rounded-md bg-slate-100 flex flex-col">
                    <input
                      className="px-4 min-h-14 bg-transparent outline-0 resize-none"
                      type="number"
                      name="complexity"
                      onChange={onChange}
                      value={complexity}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="mb-4">Choose a Process</h3>
              <ul className="flex-wrap flex ps-0">
                {Products.map((product) => (
                  <li
                    key={product}
                    className={
                      "mx-2 my-2 px-4 py-3 border-2 cursor-pointer rounded-lg"
                    }
                    style={{
                      borderColor: process === product[0] ? "#048368" : "",
                    }}
                    onClick={() =>
                      setFormData({ ...formData, process: product[0] })
                    }
                  >
                    <p>{product}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 grow flex-col flex">
              <header className="mb-4">
                <h3>Message</h3>
              </header>
              <div className="cursor-text grow items-start flex rounded-md bg-slate-100">
                <textarea
                  className="p-4 grow min-h-14 bg-transparent outline-0 resize-none flex flex-col border-0 focus:ring-0 h-full"
                  type="text"
                  name="message"
                  onChange={onChange}
                  value={message}
                ></textarea>
              </div>
            </div>
            <div className="pt-6 flex items-center justify-between">
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

export default NewForm;
