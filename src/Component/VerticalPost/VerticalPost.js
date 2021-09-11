import React, { useState } from "react";
import newsPaper from "../../image/nature.jpg";
import popupImage from "../../image/image.png";
import Popup from "./Popup/Popup";
import "./VerticalPost.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const VerticalPost = (props) => {
  const [popupPage, setPopupPage] = useState(false);
  const { title, body } = props.data;
  return (
    <div className="mx-auto cross">
      <div
        onClick={() => setPopupPage(true)}
        className=" col-md-4 design  mt-2 mb-2 rounded shadow"
        // style={{ height: "350px", marginLeft: "60px" }}
      >
        <button className="close-btn">
          <FontAwesomeIcon icon={faTimes} />
        </button>
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
      <Popup trigger={popupPage} setTrigger={setPopupPage}>
        <img
          style={{ width: "100%", height: "100%" }}
          src={popupImage}
          alt=""
        />
      </Popup>
    </div>
  );
};

export default VerticalPost;
