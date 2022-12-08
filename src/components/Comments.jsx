import { useState, useEffect } from "react";
import { getCommentsByReviewId } from "../api";
import { dateFormatter } from "../utils";

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
          <button>Leave a comment</button>
        </div>

        {!comments ? (
          <p>No Comments</p>
        ) : (
          <ul>
            {comments.map((comment) => {
              return (
                <li key={comment.comment_id} className="Comments--li_item">
                  <article className="Comments--comment_container">
                    <h5>{comment.author}</h5>
                    <p>{comment.body}</p>
                    <span>Likes: {comment.votes}</span>
                  </article>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </>
  );
};
