import { useState } from "react";
import { useParams } from "react-router-dom";
import { patchVotes } from "../api";

export const VoteButton = ({ votes, setVotes }) => {
  const [err, setErr] = useState(null);
  const { review_id } = useParams();

  const handleVote = () => {
    setVotes(votes + 1);

    setErr(null);
    patchVotes(review_id).catch((err) => {
      setVotes(votes - 1);
      setErr("Something went wrong, please try again.");
    });
  };
  if (err) return <span>{err}</span>;
  return (
    <button onClick={handleVote}>
      {votes}
      <span aria-label="votes for this review">Like 👍</span>
    </button>
  );
};
