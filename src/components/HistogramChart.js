import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import "../styles/App.css";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{payload[0].payload.x}: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const HistogramChart = ({ name, data, title, xLabel, yLabel, color }) => {
  const [activeIndex, setActiveIndex] = React.useState(null); //const [state, setState] = React.useState(initialValue);
  return (
    <div className="section" id={title + name}>
      <h3 style={{ textAlign: "center" }}>{title} for dataset: {name}</h3>
      <div className="chart-container">
        <ResponsiveContainer width="100%" aspect={2}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 20, left: 20, bottom: 40 }}
            // e.activeTooltipIndex is a property of the event object that contains the index of the active tooltip.
            // This is used to determine which bar is currently being hovered over.
            onMouseMove={(e) => setActiveIndex(e?.activeTooltipIndex)} // The ?. (optional chaining) ensures it doesn't crash if e is null.
            onMouseLeave={() => setActiveIndex(null)}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" label={{ value: xLabel, position: "bottom", dy: 10 }} />
            <YAxis 
              label={{ value: yLabel, angle: -90, position: "center", dx: -33 }} 
              tick={{ angle: -60, textAnchor: "end" }} // text anchor to align the text to the end
            />
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Bar
              dataKey="y"
              fill={color}
              barSize={40}
              // Customizes the shape of each bar instead of using the default rectangular bars.
              shape={(props) => { // props contains the properties of the bar - a js feature
                const { x, y, width, height, index } = props;
                const isActive = index === activeIndex; // Check if the current bar is active (hovered over)
                return (
                  <rect
                    x={x - (isActive ? 2.5 : 0)} // Shift left when scaling
                    y={y}
                    width={isActive ? width + 5 : width} // Expand bar on hover
                    height={height}
                    rx={3}
                    ry={3}
                    fill={color}
                    style={{
                      transition: "all 0.2s ease-out", // ease out transition
                      filter: isActive ? "brightness(1.3)" : "brightness(1)",
                    }}
                  />
                );
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HistogramChart;