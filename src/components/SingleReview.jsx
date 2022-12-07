import { useState, useEffect } from "react";
import { getReviewById } from "../api";
import { useParams, Link } from "react-router-dom";
import { Header } from "./Header";
import { dateFormatter } from "../utils";
import { VoteButton } from "./VoteButton";

export const SingleReview = () => {
  const [review, setReview] = useState({});
  const { review_id } = useParams();

  useEffect(() => {
    getReviewById(review_id).then((data) => {
      setReview(data);
    });
  }, [review_id]);

  const rev = dateFormatter(review);

  return (
    <>
      <Header header="NC Games" />
      <div className="SingleReview">
        <header className="SingleReview--Header">
          <img
            className="SingleReview--Header_img"
            src={rev.review_img_url}
            alt={`${review.title}`}
          />
          <div className="SingleReview--Header">
            <h2>{rev.title}</h2>
            <span>By {rev.owner}</span>
            <time>{rev.created_at}</time>
          </div>
        </header>

        <main>
          <article className="SingleReview--ReviewBody">
            <p>{rev.review_body}</p>
            <section className="SingleReview--Votes">
              <p>
                Vote button here <VoteButton />
              </p>
            </section>
            <section className="SingleReview--Comments">
              <h4>Comments</h4>
              <button>Post a comment</button>
              <article className="SingleReview--Comments_body">
                Comments go here
              </article>
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
    </>
  );
};
