import { useState } from "react";
import { useParams } from "react-router-dom";
import { patchVotes } from "../api";

export const VoteButton = ({ votes, setVotes }) => {
  const [err, setErr] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const { review_id } = useParams();

  const handleVote = () => {
    if (isClicked) {
      setVotes(votes - 1);
      patchVotes(review_id, -1).catch((err) => {
        setVotes(votes + 1);
        setErr("Something went wrong, please try again.");
      });
    } else {
      setVotes(votes + 1);
      patchVotes(review_id, 1).catch((err) => {
        setVotes(votes - 1);
        setErr("Something went wrong, please try again.");
      });
    }
    setIsClicked(!isClicked);
  };

  if (err) return <span>{err}</span>;
  return (
    <div className="Votes">
      <p>{votes}</p>
      <button onClick={handleVote} className="Vote--button">
        <span aria-label="votes for this review"> Like 👍</span>
      </button>
    </div>
  );
};
