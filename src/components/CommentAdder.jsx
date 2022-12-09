import { postComment } from "../api";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "./contexts/User";
import { LoadingContext } from "./contexts/Loading";
import { Link } from "react-router-dom";

export const CommentAdder = ({ review_id, setComments }) => {
  const [posted, setPosted] = useState();
  const [newComment, setNewComment] = useState("");
  const [textAreaHeight, setTextAreaHeight] = useState(2);
  const { loggedInUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const handleNewComment = (e) => {
    setNewComment(e.target.value);
    const height = e.target.scrollHeight;

    const rowHeight = 15;
    const trows = Math.ceil(height / rowHeight) - 1;

    if (trows > textAreaHeight) {
      setTextAreaHeight(trows);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const commentToPost = {
      username: loggedInUser.username,
      body: newComment,
    };
    postComment(review_id, commentToPost)
      .then((comment) => {
        setPosted(true);
        setLoading(false);
        setComments((currComments) => {
          const comments = [...currComments];
          return comments;
        });
      })
      .catch((err) => {
        setPosted(false);
        setLoading(false);
      });
    setComments("");
  };

  return !loggedInUser ? (
    <p>
      You must be{" "}
      <Link to="/users" className="Users--link">
        logged in
      </Link>{" "}
      to post a comment
    </p>
  ) : (
    <div className="CommentAdder">
      {loading ? (
        <p>loading... </p>
      ) : (
        <form onSubmit={handleSubmit} className="CommentAdder">
          <label htmlFor="newComment">Add a comment </label>
          <textarea
            placeholder="What are your thoughts?"
            id="newComment"
            rows={textAreaHeight}
            onChange={handleNewComment}
          ></textarea>
          <button type="submit">Post</button>
          {posted && <p>Submitted successfully</p>}
          {posted === false && <p>Something went wrong</p>}
        </form>
      )}
    </div>
  );
};
