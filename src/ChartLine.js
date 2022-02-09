import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: [0,7,14,21,28],
  datasets: [
    {
      label: "First dataset",
      data: [500, 1300,1200,1100,2200,2400],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Second dataset",
      data: [300, 1100,1400,1300,1800,1800],
      fill: false,
      borderColor: "#143774"
    }
  ]
};


class LChart extends React.Component{
    render(){
        return(
            <div className="App">
            <Line data={data} />
          </div>
        )
    }
}
export default LChart;