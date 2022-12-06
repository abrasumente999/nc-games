import { useState, useEffect } from "react";
import { getCommentsById } from "../api";

export const SingleReview = (props, { id }) => {
  const { reviews } = props;
  console.log(reviews);
  let formmattedDates = [...reviews];

  formmattedDates.forEach((review) => {
    const parsedDate = new Date(review.created_at).toLocaleDateString("en-GB");
    review.date = parsedDate;
  });

  console.log(formmattedDates);

  return (
    <article className="SingleReview--Container">
      {formmattedDates.map((review) => {
        return (
          <li className="SingleReview--li_item" key={review.review_id}>
            <img
              className="SingleReview--review_img"
              src={review.review_img_url}
              alt="Review"
            />

            <div className="SingleReview--li_text">
              <h3>{review.title}</h3>
              <p>By {review.owner}</p>
              <p>On {review.date}</p>

              <p className="SingleReview--VotesComments">
                <p className="SingleReview--p">
                  Comments: {review.comment_count}
                </p>
                <p className="SingleReview--p">Votes: {review.votes}</p>
              </p>
            </div>
          </li>
        );
      })}
    </article>
  );
};
