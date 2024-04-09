import React, { Fragment, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { connect } from "react-redux";

const TrafficData = ({ data }) => {
  const [chartData, setChartData] = useState({});
  const [userChartData, setUserChartData] = useState({});
  useEffect(() => {
    if (data.week.length) {
      setChartData({
        series: data.sessionMedium.map((sess) => ({
          name: sess,
          data: data[sess].averageSessionDuration,
        })),
        options: {
          chart: {
            type: "bar",
            height: 350,
            width: "100%",
          },
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },
          xaxis: {
            categories: data.week,
          },
          dataLabels: {
            enabled: false,
          },
          title: {
            text: "Average Session Duration",
            align: "left",
          },
          grid: {
            row: {
              colors: ["#f3f3f3", "transparent"],
              opacity: 0.5,
            },
          },
        },
      });
      setUserChartData({
        series: data.sessionMedium.map((sess) => ({
          name: sess,
          data: data[sess].activeUsers,
        })),
        options: {
          chart: {
            type: "bar",
            height: 350,
            width: "100%",
          },
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },
          xaxis: {
            categories: data.week,
          },
          dataLabels: {
            enabled: false,
          },
          title: {
            text: "Active Users",
            align: "left",
          },
          grid: {
            row: {
              colors: ["#f3f3f3", "transparent"],
              opacity: 0.5,
            },
          },
        },
      });
    }
  }, [data]);

  return (
    <Fragment>
      {Object.keys(chartData).length > 0 && (
        <div>
          <h3>Average Session Duration</h3>
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            height={350}
          />
          <h3>Active Users</h3>
          <ReactApexChart
            options={userChartData.options}
            series={userChartData.series}
            type="bar"
            height={350}
          />
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  data: state.data.data.traffic,
});

export default connect(mapStateToProps)(TrafficData);
