import "./App.css";
import Post from "./Post";
import { useState } from "react";
import Stories from "./stories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faHome,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Slider } from "@mui/material";
import { Route, Switch } from "react-router";
import Message from "./message";
import Home from "./Home";
import Create from "./Create";
import { Link } from "react-router-dom";
import { textAlign } from "@mui/system";

function App() {
  const [isFocused, setIsFocused] = useState(false);
  const [isTrue, setisTrue] = useState(false);
  const Dropdown = () => {
    setisTrue(!isTrue);
  };
  const [work, setwork] = useState([
    {
      id: 2,
      comment: false,
      username: "Salman",
      caption: "this is my first clone",
      imgurl: "./images/img/2.jpg",
      comments: [],
      likes: 0,
    },
    {
      id: 3,
      comment: false,
      username: "Kamran",
      caption: "this is my first clone",
      imgurl: "./images/book.jpg",
      comments: [],
      likes: 0,
    },
    {
      id: 2,
      comment: false,
      username: "Salman",
      caption: "this is my first clone",
      imgurl: "./images/img/2.jpg",
      comments: [],
      likes: 0,
    },
  ]);

  const [posts, setPosts] = useState([
    {
      id: 1,
      comment: true,
      username: "Ahtisham",
      caption: "this is my first clone",
      imgurl: "./images/img/1.jpg",
      comments: [],
      likes: 0,
    },
    {
      id: 2,
      comment: false,
      username: "Salman",
      caption: "this is my first clone",
      imgurl: "./images/img/2.jpg",
      comments: [],
      likes: 0,
    },
    {
      id: 3,
      comment: false,
      username: "Kamran",
      caption: "this is my first clone",
      imgurl: "./images/book.jpg",
      comments: [],
      likes: 0,
    },
    {
      id: 2,
      comment: false,
      username: "Salman",
      caption: "this is my first clone",
      imgurl: "./images/img/2.jpg",
      comments: [],
      likes: 0,
    },
    {
      id: 3,
      comment: false,
      username: "Kamran",
      caption: "this is my first clone",
      imgurl: "./images/book.jpg",
      comments: [],
      likes: 0,
    },
  ]);

  const hello = () => {
    console.log({ hello: "Hello" });
  };
  return (
    <>
      <div className="app_header d-flex align-items-center justify-content-space-evenly">
        <img
          className="app_headerimage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
        <div className="app__icons">
          <input
            type="text"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {!isFocused && (
            <div className="app__search">
              <span>
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <span>Search</span>
            </div>
          )}
        </div>
        <div className="app__ico">
          <span>
            {" "}
            <Link to="/">
              <FontAwesomeIcon className="ico__home " icon={faHome} />
            </Link>
          </span>
          <span>
            {" "}
            <Link to="/message">
              <FontAwesomeIcon className="ico__comment" icon={faComment} />
            </Link>
          </span>
          <span>
            <Link to="/create">
              <FontAwesomeIcon className="ico__plus " icon={faPlus} />
            </Link>
          </span>
          <span>
            {" "}
            <FontAwesomeIcon
              className="ico__heart "
              icon={faHeart}
              onClick={Dropdown}
            />
          </span>
        </div>
      </div>

      <div
        className="DropDown"
        style={{
          position: "absolute",
          right: "300px",
          zIndex: 1,
          backgroundColor: "#Efefef",
          padding: "50px",
          transition: " 0.5s ease",
          opacity: isTrue ? 1 : 0,
          top: isTrue ? 70 : 50,
        }}
      >
        <div
          className="Heart__ico"
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <p style={{ textAlign: "center" }}>Activity on your post</p>
        <span>
          When someone likes or comments on one of your posts, you'll see it
          here.
        </span>
      </div>
      <Switch>
        <Route exact path="/">
          <Home posts={posts} setPosts={setPosts} work={work} />
        </Route>
        <Route exact path="/message" component={Message} />
        <Route
          exact
          path="/create"
          component={() => (
            <Create testFun={hello} posts={posts} handlePosts={setPosts} />
          )}
        />
      </Switch>
    </>
  );
}

export default App;
