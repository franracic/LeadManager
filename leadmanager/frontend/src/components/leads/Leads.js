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
      {["Sprint", "Design", "In Development", "Continuous Integration"].map(
        (process, index) => (
          <Fragment key={index}>
            <div className="flex-row flex mb-40">
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
