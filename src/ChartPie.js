import React from "react";
import { Pie } from "react-chartjs-2";
import 'chart.js/auto';

// some of this code is a variation on https://jsfiddle.net/cmyker/u6rr5moq/


const data = {
  labels: ["Desktop","Tablet","Mobile"],
  datasets: [
    {
      data: [65,25,10],
      backgroundColor: [
        "rgb(242,165,152)",
        "rgb(255,232,157)",
        "rgb(122,231,125)",
      ],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ],
 
  plugins: {
    labels: {
      render: "percentage",
      fontColor: ["green", "white", "red"],
      precision: 2
    },
  },
   text: "23%",
};

class PChart extends React.Component {
  render() {
    return (
      <div>
        {/* <h2>React Doughnut with Text Example</h2> */}
        <Pie
          data={data}
          options={{
            
            elements: {
              
              center: {
                legend: { display: false, position: "right" },
                text: "Red is 2/3 the total numbers",
                color: "#FF6384", // Default is #000000
                fontStyle: "Arial", // Default is Arial
                sidePadding: 20, // Default is 20 (as a percentage)
                minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
                lineHeight: 25 // Default is 25 (in px), used for when text wraps
              }
            },
            
          }}
        />
      </div>
    );
  }
}
export default PChart;
// ReactDOM.render(<PChart />, document.getElementById("root"));
