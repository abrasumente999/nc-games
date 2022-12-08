import { postComment } from "../api";
import { useState } from "react";

export const CommentAdder = ({ review_id, setComments }) => {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentToPost = {
      username: "user",
      body: newComment,
    };

    postComment(review_id, newComment).then((comment) => {
      setNewComment("");
      setComments((currComments) => {
        const newComments = [...currComments];
        newComments.unshift(comment);
        return newComments;
      });
    });
  };

  return (
    <form className="CommentAdder" onSubmit={handleSubmit}>
      <label htmlFor="newComment">Add a comment </label>
      <textarea
        id="newComment"
        value={newComment.body}
        onChange={(e) => {
          setNewComment(e.target.value);
        }}
      ></textarea>

      <button>Post</button>
    </form>
  );
};
