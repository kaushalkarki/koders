import React from "react";
import "../Components/coding.css";
import Card from "./card";

const Coding = () => {
  return (
    <div className="Header">
      <h1>Coding Curriculum</h1>
      <div className="CurriculumSection ">
        <div className="CourseBar row m-0 py-5">
          <div className="tab active col-lg-2 col-md-4 col-6 col-xs-3 py-5">
            <h5>Beginner</h5>
            <div className="down active">(Grade1)</div>
          </div>
          <div className="tab col-lg-2 col-md-4 col-6 col-xs-3  py-5">
            <h5>Intermediate</h5>
            <div className="down">(Grade1)</div>
          </div>
          <div className="tab col-lg-2 col-md-4 col-6 col-xs-3 py-5">
            <h5>Advanced</h5>
            <div className="down">(Grade1)</div>
          </div>
          <div className="tab col-lg-2 col-md-4 col-6 col-xs-3 py-5">
            <h5>Proffesional</h5>
            <div className="down">(Grade1)</div>
          </div>
          <div className="tab i col-lg-2 col-md-4 col-6 col-xs-3 py-5">
            <h5>Applied Tech</h5>
            <div className="down">(Grade1)</div>
          </div>
          <div className="cardBody">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>

      {/* <div className="row m-0 py-5">
        <div className="col-lg-2 col-md-4 col-6 col-xs-3 py-5"> */}

      {/* </div>
      </div> */}
    </div>
  );
};

export default Coding;
