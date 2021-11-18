import React, { Component, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./Create.css";
import Home from "./Home";
import "../node_modules/react-dropdown/style.css";
const Create = ({ posts, handlePosts, testFun }) => {
  console.log({ testFun });
  const [newPost, setNewPost] = useState({
    id: 2,
    comment: false,
    username: "Salman",
    caption: "this is my first clone",
    imgurl: "./images/img/2.jpg",
    comments: "",
    likes: 19,
  });

  const handleMessage = (e) => {
    console.log("ok");
    handlePosts([newPost, ...posts]);
  };

  return (
    <>
      <form
        onSubmit={handleMessage}
        onChange={(e) => {
          const newPosts = {
            ...posts,
            [e.target.name]: e.target.value,
          };
          // setNewPost(newPosts);
        }}
      >
        <div className="Popup">
          <h5>Create a Post</h5>
          <hr />
          <input
            type="file"
            name="imgurl"
            id="file"
            class="custom-file-input"
          />
          <input type="text" name="username" />
        </div>
        <button onClick={handleMessage}>Create</button>
      </form>
      <div className="Main">
        <button onClick={testFun}>Test</button>
        <Home posts={posts} setPosts={handlePosts} />
      </div>
    </>
  );
};
export default Create;
