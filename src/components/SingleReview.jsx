import { useState, useEffect, useContext } from "react";
import { getReviewById } from "../api";
import { useParams, Link } from "react-router-dom";
import { Header } from "./Header";
import { dateFormatter } from "../utils";
import { VoteButton } from "./VoteButton";
import { Comments } from "./Comments";
import { ReviewContext } from "./contexts/Review";

export const SingleReview = () => {
  const { review, setReview } = useContext(ReviewContext);
  const [loading, setLoading] = useState(false);
  const [votes, setVotes] = useState(0);
  const { review_id } = useParams();

  useEffect(() => {
    if (!review) setLoading(true);
    getReviewById(review_id).then((data) => {
      setReview(dateFormatter(data));
      setVotes(data.votes);
      setLoading(false);
    });
  }, [review_id]);

  return (
    <>
      <Header header="NC Games" />
      {loading ? (
        <p className="Loading">... Loading</p>
      ) : (
        <div className="SingleReview">
          <header className="SingleReview--Header">
            <img
              className="SingleReview--Header_img"
              src={review.review_img_url}
              alt={`${review.title}`}
            />
            <div className="SingleReview--Header">
              <h2>{review.title}</h2>
              <span>By {review.owner}</span>
              <time>{review.created_at}</time>
            </div>
          </header>

          <main>
            <article className="SingleReview--ReviewBody">
              <p>{review.review_body}</p>
              <section className="SingleReview--Votes">
                <VoteButton votes={votes} setVotes={setVotes} review={review} />
              </section>
              <section className="SingleReview--Comments">
                <Comments review_id={review.review_id} />
              </section>
            </article>
            <aside>
              <Link
                className="SingleReview--NextReviewLink"
                to={`/reviews/${+review.review_id + 1}`}
              >
                <h3>Read next review</h3>
              </Link>
            </aside>
          </main>
        </div>
      )}
    </>
  );
};
