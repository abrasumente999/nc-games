import { useState, useEffect } from "react";
import { getCommentsByReviewId } from "../api";
import { dateFormatter, commentMapper } from "../utils";
import { CommentAdder } from "./CommentAdder";

export const Comments = (props) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { review_id } = props;

  useEffect(() => {
    getCommentsByReviewId(review_id).then((data) => {
      if (!data) {
        setComments();
      } else {
        setComments(dateFormatter(data));
      }
      setLoading(false);
    });
  }, [review_id]);

  return loading ? (
    <p className="Loading">... Loading</p>
  ) : (
    <>
      <section className="Comments">
        <div className="Comments--header">
          <h3>Comments</h3>
          <CommentAdder review_id={review_id} setComments={setComments} />
        </div>
        {!comments ? <p>No Comments</p> : <ul>{commentMapper(comments)}</ul>}
      </section>
    </>
  );
};
