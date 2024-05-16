import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { deleteLead, getLeads } from "../../actions/leads";
import RadialBarChart from "./RadialBarChart";

const Leads = ({ leads, getLeads, deleteLead }) => {
  const [tableStatus, setTableStatus] = useState(false);

  useEffect(() => {
    getLeads();
  }, [getLeads]);

  const toggleTable = () => {
    setTableStatus(!tableStatus);
  };

  const notStartedCounts = {
    S: 0,
    D: 0,
    I: 0,
    C: 0,
    A: 0,
  };
  const stuckCounts = {
    S: 0,
    D: 0,
    I: 0,
    C: 0,
    A: 0,
  };
  const workingCounts = {
    S: 0,
    D: 0,
    I: 0,
    C: 0,
    A: 0,
  };
  const doneCounts = {
    S: 0,
    D: 0,
    I: 0,
    C: 0,
    A: 0,
  };
  leads.forEach((lead) => {
    const { state, process, complexity } = lead;
    switch (state) {
      case "N":
        notStartedCounts[process] += complexity;
        notStartedCounts["A"] += complexity;
        break;
      case "S":
        stuckCounts[process] += complexity;
        stuckCounts["A"] += complexity;
        break;
      case "W":
        workingCounts[process] += complexity;
        workingCounts["A"] += complexity;
        break;
      case "D":
        doneCounts[process] += complexity;
        doneCounts["A"] += complexity;
        break;
      default:
        break;
    }
  });

  return (
    <Fragment>
      <h2>Tasks</h2>
      <div className="flex-row flex mb-40">
        <RadialBarChart
          notStarted={notStartedCounts["A"]}
          stuck={stuckCounts["A"]}
          working={workingCounts["A"]}
          done={doneCounts["A"]}
          toggleTable={toggleTable}
          process="Total"
        />
      </div>
      <div className="snap-y">
        {["Sprint", "Design", "In Development", "Continuous Integration"].map(
          (process, index) => (
            <Fragment key={index}>
              <div className="flex-row flex mb-40 snap-center">
                <RadialBarChart
                  notStarted={notStartedCounts[process[0]]}
                  stuck={stuckCounts[process[0]]}
                  working={workingCounts[process[0]]}
                  done={doneCounts[process[0]]}
                  toggleTable={toggleTable}
                  process={process}
                />
                {tableStatus && (
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
                        <th className="px-6 py-3">complexity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leads
                        .filter((lead) => lead.process === process[0])
                        .map((lead) => (
                          <tr
                            key={lead.id}
                            className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                          >
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {lead.name}
                            </td>
                            <td className="px-6 py-3">{lead.message}</td>
                            <td className="px-6 py-3">{lead.state}</td>
                            <td className="px-6 py-3">{lead.complexity}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                )}
              </div>
            </Fragment>
          )
        )}
      </div>
      <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-800">
        <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
          Project Reffered
        </p>
        <div className="flex items-end my-6 space-x-2">
          <p className="text-5xl font-bold text-black dark:text-white">12</p>
          <span className="flex items-center text-xl font-bold text-green-500">
            <svg
              width="20"
              fill="currentColor"
              height="20"
              className="h-3"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
            </svg>
            22%
          </span>
        </div>
        <div className="dark:text-white">
          <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
            <p>Unique refferal URL</p>
            <div className="flex items-end text-xs">
              34
              <span className="flex items-center">
                <svg
                  width="20"
                  fill="currentColor"
                  height="20"
                  className="h-3 text-green-500"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                </svg>
                22%
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
            <p>Embedded form</p>
            <div className="flex items-end text-xs">
              13
              <span className="flex items-center">
                <svg
                  width="20"
                  fill="currentColor"
                  height="20"
                  className="h-3 text-green-500"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                </svg>
                12%
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between space-x-12 text-sm md:space-x-24">
            <p>New visitor</p>
            <div className="flex items-end text-xs">
              45
              <span className="flex items-center">
                <svg
                  width="20"
                  fill="currentColor"
                  height="20"
                  className="h-3 text-green-500"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                </svg>
                41%
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Leads.propTypes = {
  leads: PropTypes.array.isRequired,
  getLeads: PropTypes.func.isRequired,
  deleteLead: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  leads: state.leads.leads,
});

export default connect(mapStateToProps, { getLeads, deleteLead })(Leads);
