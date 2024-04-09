import React, { Fragment, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { connect } from "react-redux";

const SearchData = ({ data }) => {
  const {
    week,
    organicGoogleSearchAveragePosition,
    organicGoogleSearchClickThroughRate,
    organicGoogleSearchClicks,
    organicGoogleSearchImpressions,
  } = data;

  const createChartData = (name, data) => {
    return {
      options: {
        chart: {
          type: "line",
          height: 350,
          width: "100%",
          zoom: {
            enabled: false,
          },
          id: name.toLowerCase().replace(/\s+/g, "-"), 
          group: "search-data",
        },
        xaxis: {
          categories: week,
        },
        colors: ["#000000"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: name,
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"],
            opacity: 0.5,
          },
        },
        yaxis: {
          labels: {
            show: false,
            minWidth: 40, 
          },
        },
      },
      series: [
        {
          name,
          data,
        },
      ],
    };
  };

  const [averagePositionChartData, setAveragePositionChartData] =
    useState(null);
  const [clickThroughRateChartData, setClickThroughRateChartData] =
    useState(null);
  const [clicksChartData, setClicksChartData] = useState(null);
  const [impressionsChartData, setImpressionsChartData] = useState(null);

  useEffect(() => {
    if (week.length) {
      setAveragePositionChartData(
        createChartData("Average Position", organicGoogleSearchAveragePosition)
      );
      setClickThroughRateChartData(
        createChartData(
          "Click Through Rate",
          organicGoogleSearchClickThroughRate
        )
      );
      setClicksChartData(createChartData("Clicks", organicGoogleSearchClicks));
      setImpressionsChartData(
        createChartData("Impressions", organicGoogleSearchImpressions)
      );
    }
  }, [
    week,
    organicGoogleSearchAveragePosition,
    organicGoogleSearchClickThroughRate,
    organicGoogleSearchClicks,
    organicGoogleSearchImpressions,
  ]);

  if (!week.length) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <div className="charts-container">
        {averagePositionChartData && (
          <div className="chart">
            <ReactApexChart
              options={averagePositionChartData.options}
              series={averagePositionChartData.series}
              type="line"
              height={150}
            />
          </div>
        )}
        {clickThroughRateChartData && (
          <div className="chart">
            <ReactApexChart
              options={clickThroughRateChartData.options}
              series={clickThroughRateChartData.series}
              type="line"
              height={150}
            />
          </div>
        )}
        {clicksChartData && (
          <div className="chart">
            <ReactApexChart
              options={clicksChartData.options}
              series={clicksChartData.series}
              type="line"
              height={150}
            />
          </div>
        )}
        {impressionsChartData && (
          <div className="chart">
            <ReactApexChart
              options={impressionsChartData.options}
              series={impressionsChartData.series}
              type="line"
              height={150}
            />
          </div>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  data: state.data.data.search,
});

export default connect(mapStateToProps)(SearchData);
