import React, { useEffect, useState } from "react";
import proPic from "../../image/images (3).jpg";
import "./Home.css";
import Pagination from "../Home/Paginate/Pagination";
import Post from "../Post/Post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import VerticalPost from "../VerticalPost/VerticalPost";

const url = "https://jsonplaceholder.typicode.com/posts";
const Home = () => {
  const [active, setActive] = useState(true);
  const [show, setShow] = useState(true);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [info, setInfo] = useState({
    FirstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
  });
  const validEmail = (email) => {
    const isPhoneEmailValid = /\S+@\S+\.\S+/.test(email);
    return isPhoneEmailValid;
  };

  const validNum = (num) => {
    const isPhoneNumValid = /^(?:\+88|88)?(01[3-9]\d{8})$/.test(num);
    return isPhoneNumValid;
  };

  const handleBlur = (event) => {
    const newInfo = { ...info };
    newInfo[event.target.name] = event.target.value;
    setInfo(newInfo);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validEmail(info.email)) {
        e.target.reset();
     alert("Please enter a valid email or Phone Number")
    }
    
    if (!validNum(info.phone)) {
        e.target.reset();
     alert("Please enter a valid email or Phone Number")
    }
    if(!info){
        console.log("Something")
    }
  };

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("something went wrong while requesting posts");
      })
      .then((posts) => setPosts(posts))
      .catch((error) => setError(error.message));
  }, []);

  if (error) return <h1>{error}</h1>;
  return (
    <div className="row mx-auto ">
      <div
        className="col-md-3 "
        style={{ paddingLeft: "calc(var(--bs-gutter-x) * .0)" }}
      >
        <div className="sidebar">
          <div className="d-flex text-center div_bg  m-3 shadow rounded">
            <div className="rounded mt-2">
              <img className="imageSize" src={proPic} alt="" />
            </div>
            <div className="header">
              <h4>Hi Reader</h4>
              <p>Here is your news!</p>
            </div>
          </div>
          {show ? (
            <div className="div_bg p-4 m-3 shadow rounded text-center">
              <h2>View Toggle</h2>
              <div
                class="btn-group groupBtnDesign"
                role="group"
                aria-label="Basic example"
              >
                <button
                  onClick={() => setActive(true)}
                  type="button"
                  class="toggle"
                >
                  <FontAwesomeIcon icon={faNewspaper} />
                </button>
                <button
                  onClick={() => setActive(false)}
                  type="button"
                  class="toggle"
                >
                  <FontAwesomeIcon icon={faListUl} />
                </button>
              </div>
            </div>
          ) : null}
          <div className="div_bg p-5 m-3  shadow rounded">
            <h5>Have a Feedback?</h5>
            <p className="collapseDesign">
              <button
                class="btn collapseBtn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseWidthExample"
                aria-expanded="false"
                aria-controls="collapseWidthExample"
                onClick={() => setShow(!show)}
              >
                We're Listening!
              </button>
              <div style={{ minHeight: "80px" }}>
                <div
                  class="collapse collapse-horizontal"
                  id="collapseWidthExample"
                >
                  <div
                    class="card card-body "
                    style={{
                      width: "900px",
                      marginLeft: "247px",
                      backgroundColor: "#EBF2F7",
                      border: "none",
                    }}
                  >
                    <form onSubmit={handleSubmit} class="row g-3 mt-3">
                      <h5>Thank you so much for taking the time!</h5>
                      <small>Please provide the bellow details</small>
                      <div class="col-md-7">
                        <label for="validationDefault01" class="form-label">
                          First Name:
                        </label>
                        <input
                          onChange={handleBlur}
                          type="text"
                          name="FirstName"
                          class="form-control"
                          id="validationDefault01"
                          required
                          placeholder="John"
                        />
                      </div>
                      <br />
                      <div class="col-md-7">
                        <label for="validationDefault02" class="form-label">
                          Last Name:
                        </label>
                        <input
                          onChange={handleBlur}
                          type="text"
                          name="lastName"
                          class="form-control"
                          id="validationDefault02"
                          required
                          placeholder="Doe"
                        />
                      </div>

                      <div class="col-md-10">
                        <label for="validationDefault02" class="form-label">
                          Address:
                        </label>
                        <textarea
                          onChange={handleBlur}
                          name="address"
                          type="text"
                          class="form-control"
                          id="validationDefault02"
                          required
                          placeholder="Enter your full Postal Address"
                        />
                      </div>
                      <div class="col-md-8">
                        <label for="validationDefault03" class="form-label">
                          Country:
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="validationDefault03"
                          required
                          placeholder="India"
                        />
                      </div>
                      <div class="col-md-7">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Email Address:
                        </label>
                        <input
                          onChange={handleBlur}
                          name="email"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
                        />
                        <p>{error}</p>
                      </div>
                      <div class="col-md-7">
                        <label class="form-label">Phone Number:</label>
                        <input
                          onChange={handleBlur}
                          name="phone"
                          class="form-control"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div class="col-12">
                        <input class="btn btn-primary" value="Submit Feedback" type="submit"/>
                          
                        
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>

      {active ? (
        <div className="col-md-9 mb-3 pb-5 row">
          {posts.length > 0 ? (
            <>
              <Pagination
                data={posts}
                RenderComponent={Post}
                pageLimit={3}
                dataLimit={3}
              />
            </>
          ) : (
            <h1>No Posts to display</h1>
          )}
        </div>
      ) : (
        <div className="col-md-9  row">
          {posts.length > 0 ? (
            <>
              <Pagination
                data={posts}
                RenderComponent={VerticalPost}
                pageLimit={3}
                dataLimit={6}
              />
            </>
          ) : (
            <h1>No Posts to display</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
