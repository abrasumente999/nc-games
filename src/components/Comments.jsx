import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
        <ul>
          {!comments ? (
            <p>No Comments</p>
          ) : (
            comments.map((comment) => {
              return (
                <article className="Comments--comment_container">
                  <li key={comment.comment_id} className="Comments--li_item">
                    <h5>{comment.author}</h5>
                    <p>{comment.body}</p>
                    <span>Likes: {comment.votes}</span>
                  </li>
                </article>
              );
            })
          )}
        </ul>
      </section>
    </>
  );
};
