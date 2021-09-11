import React, { useState } from "react";
import cross from "../../image/images.png";
import newsPaper from "../../image/nature.jpg";
import popupImage from "../../image/image.png";
import Popup from "./Popup/Popup";
import "./Post.css";

const Post = (props) => {
  const [popupPage, setPopupPage] = useState(false);
  const { title, body } = props.data;
  return (
    <>
      <div className=" row mt-2 m-auto">
        <>
          <div
            onClick={() => setPopupPage(true)}
            className="col-md-10 d-flex div_bg rounded shadow p-2 m-3"
          >
            <div className="rounded ">
              <img className="newsImage" src={newsPaper} alt="" />
            </div>
            <div className="p-2">
              {/* <button>{id}</button> */}
              <h3 style={{ height: "30px", overflow: "hidden" }}>{title}</h3>
              <span >
                <p style={{ height: "50px", overflow: "hidden" }}>{body}</p> <br />
                <span className="text-muted">Mon, 21 Dec 2021 14:57 GMT</span>
              </span>
            </div>
          </div>
          <div className="col-md-1 crossSize ">
            <img className="crossSize rounded shadow" src={cross} alt="" />
          </div>
        </>
      </div>
      <Popup trigger={popupPage} setTrigger={setPopupPage}>
        <img
          style={{ width: "100%", height: "100%" }}
          src={popupImage}
          alt=""
        />
      </Popup>
    </>
  );
};

export default Post;
