import React from "react";
import "../Components/card.css";

const Card = () => {
  const Details = {
    tag: "Introduction To Coding",
    classes: "8",
    label: "Save %",
    cur: "Curriculum Includes",
    content: "   Sequence, Fundamentals Coding Blocks, Loop",
    link: "   View Detailed curriculum",
    cprice: "₹ 7,199",
    sprice: "₹ 7,799",
    classprice: "Price Per Class ₹ 900",
    btn: "Buy Now",
  };

  return (
    <div className="row">
      <div className="cardBox col-lg-4 py-3">
        <div className="planBasic">
          <div className="heading">
            <h4>{Details.tag}</h4>
            <div className="details">
              <div>{Details.classes}</div>
              <div className="saveLabel">{Details.label}</div>
            </div>
          </div>
          <div className="planDesc">
            <h5 className="cur">{Details.cur}</h5>
            <div className="content">{Details.content}</div>
            <a href="#" className="link">
              {Details.link}
            </a>
          </div>
          <div className="priceDesc">
            <div className="plantag">Popular</div>

            <div className="price">
              <h3>{Details.cprice}</h3>
              <del>{Details.sprice}</del>
            </div>
            <div className="clsPrice">{Details.classprice}</div>
            <button className="buyNow">
              <span>{Details.btn}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
