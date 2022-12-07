import { useEffect, useState } from "react";
import { getReviews } from "../api";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { dateFormatter } from "../utils";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReviews().then((reviews) => {
      setReviews(reviews);
      setLoading(false);
    });
  }, []);

  const formattedReviews = dateFormatter(reviews);

  return loading ? (
    <p className="Loading">... Loading</p>
  ) : (
    <>
      <Header header="Reviews" />
      <main>
        <section className="Reviews--Content_container">
          <ul>
            <article className="Reviews--Container">
              {formattedReviews.map((review) => {
                return (
                  <Link
                    className="Reviews--Link"
                    to={`/reviews/${review.review_id}`}
                  >
                    <li key={review.review_id} className="Reviews--li_item">
                      <img
                        className="Reviews--review_img"
                        src={review.review_img_url}
                        alt="Review"
                      />
                      <div className="Reviews--li_text">
                        <h3>{review.title}</h3> <p>By {review.owner}</p>
                        <p>On {review.created_at}</p>
                        <p>Comments: {review.comment_count}</p>
                        <p>Votes: {review.votes}</p>
                      </div>
                    </li>
                  </Link>
                );
              })}
            </article>
          </ul>
        </section>
      </main>
    </>
  );
};
