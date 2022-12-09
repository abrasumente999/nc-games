import { useState, useEffect, useContext } from "react";
import { getCommentsByReviewId } from "../api";
import { dateFormatter, commentMapper } from "../utils";
import { CommentAdder } from "./CommentAdder";

export const Comments = (props) => {
  const [comments, setComments] = useState([]);
  const [change, setChange] = useState(false);
  const [loading, setLoading] = useState(true);
  const { review_id } = props;

  useEffect(() => {
    getCommentsByReviewId(review_id).then((data) => {
      setComments(dateFormatter(data));
      setLoading(false);
      setChange(false);
    });
  }, [review_id, change]);

  return loading ? (
    <p>...Loading comments</p>
  ) : (
    <section className="Comments">
      <div className="Comments--header">
        <h3>Comments</h3>
      </div>
      <CommentAdder
        review_id={review_id}
        setComments={setComments}
        setChange={setChange}
      />
      {!comments ? <p>No Comments</p> : <ul>{commentMapper(comments)}</ul>}
    </section>
  );
};
