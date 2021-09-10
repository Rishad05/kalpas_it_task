import React, { useState } from "react";
import cross from "../../image/images.png";
import newsPaper from "../../image/nature.jpg";
import Popup from "./Popup/Popup";
import "./Post.css";

const Post = (props) => {
  const [popupPage, setPopupPage] = useState(false);
  const { title, body } = props.data;
  return (
    <div className=" row mt-2 m-auto">
      <>
        <div onClick={()=> setPopupPage(true)} className="col-md-10 d-flex div_bg rounded shadow p-2 m-3">
          <div className="rounded ">
            <img className="newsImage" src={newsPaper} alt="" />
          </div>
          <div className="p-2">
            {/* <button>{id}</button> */}
            <h3>{title}</h3>
            <p>
              {body} <br />
              <span className="text-muted">Mon, 21 Dec 2021 14:57 GMT</span>
            </p>
          </div>
        </div>
        <div className="col-md-1 crossSize ">
          <img className="crossSize rounded shadow" src={cross} alt="" />
        </div>
        
      </>
      <Popup trigger={popupPage} setTrigger={setPopupPage}>
          <h3>my popup</h3>
        </Popup>
    </div>
  );
};

export default Post;
