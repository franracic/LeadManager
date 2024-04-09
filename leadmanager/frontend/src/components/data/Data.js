import React from "react";
import CountryData from "./CountryData";
import DayData from "./DayData";
import SearchData from "./SearchData";
import TrafficData from "./TrafficData";

export default function Data() {
  return (
    <div className="bg-blue-900 text-gray-700 font-montserrat">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-1 md:col-span-4">
            <div className="bg-blue-500 bg-opacity-90 rounded-lg shadow p-4 relative">
              <div className="text-white">
                <h3 className="text-3xl font-semibold mb-2">1213</h3>
                <h4 className="text-xl font-semibold">CLICKS</h4>
              </div>
              <div id="spark1" className="absolute bottom-0 right-0"></div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-4">
            <div className="bg-green-500 bg-opacity-90 rounded-lg shadow p-4 relative">
              <div className="text-white">
                <h3 className="text-3xl font-semibold mb-2">422</h3>
                <h4 className="text-xl font-semibold">VIEWS</h4>
              </div>
              <div id="spark2" className="absolute bottom-0 right-0"></div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-4">
            <div className="bg-yellow-500 bg-opacity-90 rounded-lg shadow p-4 relative">
              <div className="text-white">
                <h3 className="text-3xl font-semibold mb-2">311</h3>
                <h4 className="text-xl font-semibold">LEADS</h4>
              </div>
              <div id="spark3" className="absolute bottom-0 right-0"></div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-4">
            <div className="bg-purple-500 bg-opacity-90 rounded-lg shadow p-4 relative">
              <div className="text-white">
                <h3 className="text-3xl font-semibold mb-2">22</h3>
                <h4 className="text-xl font-semibold">SALES</h4>
              </div>
              <div id="spark4" className="absolute bottom-0 right-0"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="col-span-1 md:col-span-1">
            <div className="bg-gray-800 rounded-lg shadow p-4">
              <DayData />
            </div>
          </div>
          <div className="col-span-1 md:col-span-1">
            <div className="bg-gray-800 rounded-lg shadow p-4">
              <CountryData />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="col-span-1 md:col-span-1">
            <div className="bg-gray-800 rounded-lg shadow p-4">
              <TrafficData />
            </div>
          </div>
          <div className="col-span-1 md:col-span-1">
            <div className="bg-gray-800 rounded-lg shadow p-4">
              <SearchData />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
