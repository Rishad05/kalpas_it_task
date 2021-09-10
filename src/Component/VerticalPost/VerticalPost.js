import React from "react";
import newsPaper from "../../image/nature.jpg";
import "./VerticalPost.css";

const VerticalPost = (props) => {
  const { title, body } = props.data;
  return (
    <div className="mx-auto">
      <div className=" col-md-4 design  rounded shadow" style={{ height: "350px", marginTop: "60px", marginLeft: "60px"}}>
        <h3 style={{ height: "30px", overflow: "hidden" }}>{title}</h3>
        <p style={{ height: "50px", overflow: "hidden" }}>{body}</p>
        <span className="text-muted pb-2 ">Mon, 21 Dec 2021 14:57 GMT</span>
        <img
          style={{
            height: "170px",
            width: "100%",
            justifyContent: "center",
            paddingTop: "10px",
          }}
          src={newsPaper}
          alt=""
        />
      </div>
    </div>
  
  );
};

export default VerticalPost;
