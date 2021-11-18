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
import { Route, Switch } from "react-router-dom";
import Message from "./message";
import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";
import "../node_modules/react-dropdown/style.css";

function Home(props) {
  const { posts, setPosts, work } = props;

  return (
    <div className="app">
      <div className="fle">
        <div className="divvv col-md-6 col-xs-12">
          <Stories />
        </div>

        <div className="divv col-md-4">
          <Sidebar />
        </div>
      </div>
      <div className="col-md-12">
        <Post posts={posts} setPosts={setPosts} />
      </div>
    </div>
  );
}

export default Home;
