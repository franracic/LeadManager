import { scaleLinear } from "d3-scale";
import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { Tooltip } from "react-tooltip";
import features from "./features.json";

const geoUrl = features;

const colorScale = scaleLinear()
  .domain([0.29, 0.68])
  .range(["#ffedea", "#ff5233"]);
const CountryData = ({ data }) => {
  const [TooltipContent, setTooltipContent] = useState("");
  return (
    <Fragment>
      <ComposableMap
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 147,
        }}
      >
        <ZoomableGroup center={[10, 45]} zoom={7} minZoom={1}>
          {data.country.length > 0 && (
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const d = data.country.findIndex(
                    (s) => s === geo.properties.name
                  );
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={
                        d != -1
                          ? colorScale(data.activeUsers[d] / 5 + 0.1)
                          : "#D6D6DA"
                      }
                      stroke="#FFFFFF"
                      strokeWidth={0.1}
                      onMouseEnter={() => {
                        setTooltipContent(
                          d != -1
                            ? [
                                geo.properties.name,
                                data.activeUsers[d],
                                data.averageSessionDuration[d],
                              ]
                            : [geo.properties.name, 0, 0]
                        );
                      }}
                      onMouseLeave={() => {
                        setTooltipContent("");
                      }}
                      style={{
                        hover: {
                          fill: "#18A558",
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          )}
        </ZoomableGroup>
      </ComposableMap>
      <Tooltip anchorSelect=".rsm-geography">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>
            <strong>{TooltipContent[0]}</strong>
          </span>
          <span>Active Users: {TooltipContent[1]}</span>
          <span>Average Session Duration: {parseInt(TooltipContent[2])}s</span>
        </div>
      </Tooltip>
    </Fragment>
  );
};

CountryData.propTypes = {
  data: PropTypes.any.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data.data.country,
});

export default connect(mapStateToProps)(CountryData);
