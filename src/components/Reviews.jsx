import { useEffect, useState } from "react";
import { getReviews } from "../api";
import { SingleReview } from "./SingleReview";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((reviews) => {
      setReviews(reviews);
    });
  }, []);

  return (
    <section className="Reviews--reviews_container">
      <ul>
        <SingleReview reviews={reviews} />;
      </ul>
    </section>
  );
};
