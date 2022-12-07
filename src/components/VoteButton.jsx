import { useContext } from "react";
import { patchVotes } from "../api";
import { ReviewContext } from "./contexts/Review";

export const VoteButton = (props) => {
  const { review, setReview } = useContext(ReviewContext);
  const handleVote = (review_id) => {
    patchVotes(review_id).then((updatedReview) => {});
  };

  return (
    <button onClick={() => handleVote(review.review_id)}>
      {review.votes} <span aria-label="votes for this review">👍</span>
    </button>
  );
};
