import ApexCharts from "apexcharts";
import React, { useEffect, useRef } from "react";

const RadialBarChart = ({
  notStarted,
  stuck,
  working,
  done,
  toggleTable,
  process,
}) => {
  const chartRef = useRef(null);
  const summation = notStarted + stuck + working + done;
  const percentage = Math.round(((summation - notStarted) * 100) / summation);
  console.log(notStarted, stuck, working, done, percentage);
  useEffect(() => {
    const options = {
      series: [done, working, stuck],
      chart: {
        height: 290,
        type: "donut",
      },
      colors: ["#d5f5f6", "#e1effe", "#feecdc"],
      plotOptions: {
        pie: {
          endAngle: Math.floor(percentage * 3.6),
          donut: {
            labels: {
              show: true,
              total: {
                show: true,
                label: "",
                formatter: () => `${percentage}%`,
              },
              value: {
                show: true,
                fontSize: 60,
                formatter: () => `${percentage}%`,
              },
              name: {
                show: true,
                formatter: () => "",
              },
            },
          },
        },
      },
      labels: ["done", "working", "stuck"],
      legend: {
        show: false,
      },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();
    return () => {
      chart.destroy();
    };
  }, [notStarted, stuck, working, done, percentage]);

  return (
    <div className="max-w-md w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4">
      <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
        <div className="grid grid-cols-4 gap-3 mb-2 text-center">
          <dl className="bg-orange-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-around h-[78px]">
            <dt className="w-8 h-8 rounded-full bg-orange-100 dark:bg-gray-500 text-orange-600 dark:text-orange-300 text-xs font-medium flex items-center justify-around mb-1">
              {stuck}
            </dt>
            <dd className="text-orange-600 dark:text-orange-300 text-xs font-medium">
              Stuck
              <br />
            </dd>
          </dl>
          <dl className="bg-teal-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-around h-[78px]">
            <dt className="w-8 h-8 rounded-full bg-teal-100 dark:bg-gray-500 text-teal-600 dark:text-teal-300 text-xs font-medium flex items-center justify-around mb-1">
              {done}
            </dt>
            <dd className="text-teal-600 dark:text-teal-300 text-xs font-medium">
              Done
              <br />
            </dd>
          </dl>
          <dl className="bg-blue-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
            <dt className="w-8 h-8 rounded-full bg-blue-100 dark:bg-gray-500 text-blue-600 dark:text-blue-300 text-xs font-medium flex items-center justify-around mb-1">
              {working}
            </dt>
            <dd className="text-blue-600 dark:text-blue-300 text-xs font-medium">
              In progress
            </dd>
          </dl>
          <dl className="bg-gray-200 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
            <dt className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-500 text-gray-600 dark:text-orange-300 text-xs font-medium flex items-center justify-around mb-1">
              {notStarted}
            </dt>
            <dd className="text-gray-600 dark:text-orange-300 text-xs font-medium">
              Not started
            </dd>
          </dl>
        </div>
      </div>

      <div id="chart" ref={chartRef}></div>
    </div>
  );
};

export default RadialBarChart;
