import React, { useEffect, useState } from "react";
import proPic from "./image/images (3).jpg";
import "./App.css";
import Pagination from "./Component/Paginate/Pagination";
import Post from "./Component/Post/Post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import VerticalPost from "./Component/VerticalPost/VerticalPost";

const url = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [active, setActive] = useState(true);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

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
          <div className="d-flex  div_bg  m-3 shadow rounded">
            <div className="rounded mt-2">
              <img className="imageSize" src={proPic} alt="" />
            </div>
            <div className="header">
              <h4>Hi Reader</h4>
              <p>Here is your news!</p>
            </div>
          </div>
          <div className="div_bg p-4 m-3 shadow rounded text-center">
            <h2>View Toggle</h2>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button
                onClick={() => setActive(true)}
                type="button"
                class="btn "
              >
                <FontAwesomeIcon icon={faNewspaper} />
              </button>
              <button
                onClick={() => setActive(false)}
                type="button"
                class="btn "
              >
                <FontAwesomeIcon icon={faListUl} />
              </button>
            </div>
          </div>
          <div className="div_bg p-5 m-3 shadow rounded">
            <h5>Have a Feedback?</h5>
            <button className="Listening btn btn-danger">
              we are listening!
            </button>
          </div>
        </div>
      </div>
      
        
        {
          active ? <div className="col-md-9 mb-3 pb-5 row">
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
          </div> :  <div  className="col-md-9  row">
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

        }
       
      
    
    </div>
  );
}

export default App;
