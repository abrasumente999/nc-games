import { useEffect, useState } from "react";
import { getReviews } from "../api";
import { SingleReview } from "./SingleReview";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReviews().then((reviews) => {
      setReviews(reviews);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <p className="Loading">... Loading</p>
  ) : (
    <section className="Reviews--reviews_container">
      <ul>
        <SingleReview reviews={reviews} />;
      </ul>
    </section>
  );
};
