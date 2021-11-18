import React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faCommentSlash,
  faHeart,
  faHome,
  faLeaf,
  faPlus,
  faSearch,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { Comment } from "./components/Comment";
import "./Post.css";

const Post = ({ posts, setPosts }) => {
  const Counter = (id) => {
    const index = posts.findIndex((x) => x.id === id);

    if (index > -1) {
      const postsState = [...posts];
      const likes = postsState[index].likes + 1;
      // console.log(postsState[index].likes);

      postsState[index].likes = likes;
      setPosts(postsState);
    }
  };
  const setComments = (id) => {
    const index = posts.findIndex((x) => x.id === id);
    if (index > -1) {
      const postss = [...posts];
      console.log(postss[index].comment);
      postss[index].comment = !postss[index].comment;
      console.log(postss[index].comment);

      setPosts(postss);
    }
  };

  const handleAddComment = (newComment) => {
    const index = posts.findIndex((x) => x.id === newComment.postId);
    if (index > -1) {
      const postss = [...posts];

      postss[index].comment = !postss[index].comment;
      // console.log(postss[index].comment);
      postss[index].comments = [newComment, ...postss[index].comments];
      setPosts(postss);
    }
  };

  console.log({ posts });

  return (
    <>
      <div className="postss ">
        {posts.map((item) => (
          <div className="post">
            <div className="post__header">
              <Avatar
                className="post__avatar"
                alt={item.username}
                src="/static/images/avatar/1.jpg"
              />
              <h5>{item.username}</h5>
            </div>
            <hr />
            {/* header avatar + username */}
            <img className="post__img" src={item.imgurl} alt="" />
            <div className="post__ic">
              <span>
                <FontAwesomeIcon
                  className="ico__heart ic"
                  onClick={() => Counter(item.id)}
                  icon={faHeart}
                />
              </span>
              <span>
                <FontAwesomeIcon
                  className="ico__comment ic"
                  onClick={() => setComments(item.id)}
                  icon={faComment}
                />
              </span>
              <span>
                <FontAwesomeIcon className="ico__share ic" icon={faShare} />
              </span>
              <br />

              <h5 style={{ fontSize: "14px" }}>{item.likes} Likes</h5>

              <Comment post={item} addComment={handleAddComment} />
            </div>

            <h6 className="post__text">
              <strong>{item.username} </strong>
              <span style={{ fontSize: "12px" }}>{item.caption}</span>
            </h6>
          </div>
        ))}
      </div>
    </>
  );
};

export default Post;
