import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../actions/auth";
import { addLead, changeLead, deleteLead, getLeads } from "../../actions/leads";
import NewForm from "./NewForm";
import RadialBarChart from "./RadialBarChart";

const categoryStyles = {
  Sprint: { bgColor: "bg-red-100", textColor: "text-red-500" },
  Design: { bgColor: "bg-blue-100", textColor: "text-blue-500" },
  "In Development": { bgColor: "bg-yellow-100", textColor: "text-yellow-500" },
  "Continuous Integration": {
    bgColor: "bg-green-100",
    textColor: "text-green-500",
  },
};
const categoryNames = {
  S: "Sprint",
  D: "Design",
  I: "In Development",
  C: "Continuous Integration",
};

const UserCard = ({ user, onUserClicked, selected }) => {
  return (
    <li
      onClick={() => {
        onUserClicked(user.id);
      }}
      className={`w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200 sm:py-4 border-l-4 flex items-center justify-start hover:bg-gray-200 hover:text-gray-700 ${
        selected ? " border-green-500" : "border-transparent"
      }`}
    >
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img
            className="w-8 h-8 rounded-full"
            src="https://randomuser.me/api/portraits/men/46.jpg"
            alt={`${user.username} image`}
          />
        </div>
        <div className="flex-1 min-w-0 ms-4">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {user.username}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {user.email}
          </p>
        </div>
      </div>
    </li>
  );
};
const Card = ({
  category,
  title,
  date,
  comments,
  attachments,
  image,
  deleteLead,
  id,
}) => {
  const longCategory = categoryNames[category] || category;
  const style = categoryStyles[longCategory] || { bgColor: "", textColor: "" };
  return (
    <div
      className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
      draggable="true"
      onDragStart={(event) => event.dataTransfer.setData("text/plain", id)}
    >
      <button
        onClick={() => deleteLead(id)}
        className="absolute top-0 right-0 items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex"
      >
        <svg
          className="w-4 h-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      </button>
      <span
        className={`flex items-center h-6 px-3 text-xs font-semibold ${style.textColor} ${style.bgColor} rounded-full`}
      >
        {longCategory}
      </span>
      <h4 className="mt-3 text-sm font-medium">{title}</h4>
      <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
        <div className="flex items-center">
          <svg
            className="w-4 h-4 text-gray-300 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
          <span className="ml-1 leading-none">{date}</span>
        </div>
        <div className="relative flex items-center ml-4">
          <svg
            className="relative w-4 h-4 text-gray-300 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
              clipRule="evenodd"
            />
          </svg>
          <span className="ml-1 leading-none">{comments}</span>
        </div>
        <div className="flex items-center ml-4">
          <svg
            className="w-4 h-4 text-gray-300 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
              clipRule="evenodd"
            />
          </svg>
          <span className="ml-1 leading-none">{attachments}</span>
        </div>
        <img
          className="w-6 h-6 ml-auto rounded-full"
          src={image}
          alt="user avatar"
        />
      </div>
    </div>
  );
};

const NewAdminLeads = ({
  leads,
  getLeads,
  deleteLead,
  getUsers,
  users,
  changeLead,
}) => {
  useEffect(() => {
    getLeads();
    getUsers();
  }, [getLeads, getUsers]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    if (users.length > 0) {
      setUserId(users[0].id);
    }
  }, [users]);
  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    if (selectedState !== "") {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [selectedState]);
  const handleClose = () => {
    setSelectedState("");
  };

  return (
    <div className="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
      <div className="px-10 mt-6">
        <h1 className="text-2xl font-bold">Team Project Board</h1>
      </div>
      <div className="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">
        <div className="flex flex-col flex-shrink-0 w-72 justify-evenly">
          <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-fit">
            <div className="flow-root">
              <ul role="list">
                {users.map((user) => (
                  <UserCard
                    key={user.id}
                    user={user}
                    name="owner"
                    defaultValue={""}
                    onUserClicked={(e) => setUserId(e)}
                    selected={userId === user.id}
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-fit">
            <RadialBarChart
              notStarted={
                leads.filter(
                  (lead) =>
                    lead.owner === parseInt(userId) && lead.state === "N"
                ).length
              }
              stuck={
                leads.filter(
                  (lead) =>
                    lead.owner === parseInt(userId) && lead.state === "S"
                ).length
              }
              working={
                leads.filter(
                  (lead) =>
                    lead.owner === parseInt(userId) && lead.state === "W"
                ).length
              }
              done={
                leads.filter(
                  (lead) =>
                    lead.owner === parseInt(userId) && lead.state === "D"
                ).length
              }
              process="Total"
            />
          </div>
        </div>
        {["Not Started", "Stuck", "Working on it", "Done"].map((process) => (
          <div
            className="flex flex-col flex-shrink-0 w-72"
            key={process}
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => {
              event.preventDefault();
              const id = event.dataTransfer.getData("text/plain");
              changeLead(id, process[0]);
            }}
          >
            <div className="flex items-center flex-shrink-0 h-10 px-2">
              <span className="block text-sm font-semibold">{process}</span>
              <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">
                {
                  leads.filter(
                    (lead) =>
                      lead.owner === parseInt(userId) &&
                      lead.state === process[0]
                  ).length
                }
              </span>
              <button
                onClick={() => setSelectedState(process)}
                className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col pb-2 overflow-auto">
              {leads
                .filter(
                  (lead) =>
                    lead.owner === parseInt(userId) && lead.state === process[0]
                )
                .map((lead) => (
                  <Card
                    id={lead.id}
                    key={lead.id}
                    category={lead.process}
                    title={lead.name}
                    date="Dec 12"
                    comments={lead.complexity}
                    attachments={lead.state}
                    deleteLead={deleteLead}
                    image="https://randomuser.me/api/portraits/men/46.jpg"
                  />
                ))}
            </div>
            {selectedState !== "" && (
              <NewForm
                owner={userId}
                state={selectedState[0]}
                handleClose={handleClose}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
NewAdminLeads.propTypes = {
  leads: PropTypes.array.isRequired,
  getLeads: PropTypes.func.isRequired,
  deleteLead: PropTypes.func.isRequired,
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  changeLead: PropTypes.func.isRequired,
  addLead: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  leads: state.leads.leads,
  users: state.users.users,
});

export default connect(mapStateToProps, {
  getLeads,
  deleteLead,
  getUsers,
  changeLead,
  addLead,
})(NewAdminLeads);
