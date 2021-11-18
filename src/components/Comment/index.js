import React, { useState } from "react";

export const Comment = ({ post, addComment }) => {
  const [newComment, setNewComment] = useState({
    text: "",
    postId: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("khsda", newComment);
    addComment(newComment);
  };
  return (
    <div>
      {post.comment && (
        <form
          action=""
          onChange={(e) => {
            setNewComment({
              ...newComment,
              postId: post.id,
              text: e.target.value,
            });
          }}
          onSubmit={handleSubmit}
        >
          <input type="text" name="comment" />
        </form>
      )}
      {post.comments.map((item) => {
        return <p>{item.text}</p>;
      })}
    </div>
  );
};
