import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../actions/auth";
import { changeLead, deleteLead, getLeads } from "../../actions/leads";



const AdminLeads = ({
  leads,
  getLeads,
  deleteLead,
  getUsers,
  users,
  changeLead,
}) => {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    getLeads();
    getUsers();
  }, [getLeads, getUsers]);

  const onChange = (e) => changeLead(e.target.name, e.target.value);

  return (
    <Fragment>
      <h2>Tasks</h2>
      <select
        name="owner"
        onChange={(e) => setUserId(e.target.value)}
        defaultValue={""}
      >
        <option value="" disabled hidden>
          Choose a user
        </option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.username}
          </option>
        ))}
      </select>
      {["Sprint", "Design", "In Development", "Continuous Integration"].map(
        (process) => (
          <Fragment key={process}>
            <h3>{process}</h3>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead
                className="
                text-xs
                text-gray-700
                uppercase
                bg-gray-50
                dark:bg-gray-700
                dark:text-gray-400"
              >
                <tr>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Message</th>
                  <th className="px-6 py-3">State</th>
                  <th className="px-6 py-3">Complexity</th>{" "}
                  <th className="px-6 py-3"></th>{" "}
                </tr>
              </thead>
              <tbody>
                {leads
                  .filter(
                    (lead) =>
                      lead.owner === parseInt(userId) &&
                      lead.process === process[0]
                  )
                  .map((lead) => (
                    <tr
                      key={lead.id}
                      className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    >
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {lead.name}
                      </td>
                      <td className="px-6 py-3">{lead.message}</td>
                      <td className="px-6 py-3">
                        <select
                          name={lead.id}
                          onChange={onChange}
                          defaultValue={lead.state}
                        >
                          <option value="N">Not Started</option>
                          <option value="S">Stuck</option>
                          <option value="W">Working on it</option>
                          <option value="D">Done</option>
                        </select>
                      </td>
                      <td className="px-6 py-3">{lead.complexity}</td>{" "}
                      <td className="px-6 py-3">
                        <button
                          onClick={() => deleteLead(lead.id)}
                          className="btn btn-danger btn-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </Fragment>
        )
      )}
    </Fragment>
  );
};

AdminLeads.propTypes = {
  leads: PropTypes.array.isRequired,
  getLeads: PropTypes.func.isRequired,
  deleteLead: PropTypes.func.isRequired,
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  changeLead: PropTypes.func.isRequired,
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
})(AdminLeads);
