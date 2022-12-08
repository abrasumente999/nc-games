import { useEffect, useState, useContext } from "react";
import { getReviews } from "../api";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { dateFormatter, listAllReviews } from "../utils";

export const Reviews = () => {
  const [reviews, setReviews] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReviews().then((reviews) => {
      setReviews(dateFormatter(reviews));
      setLoading(false);
    });
  }, []);

  return (
    <div className="Reviews">
      <Header header="Reviews" />
      {loading ? (
        <p className="Loading">... Loading</p>
      ) : (
        <>
          <main>
            <section className="Reviews--Content_container">
              <article className="Reviews--Container">
                <ul>{listAllReviews(reviews)}</ul>
              </article>
            </section>
          </main>
        </>
      )}
    </div>
  );
};
