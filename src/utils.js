import { Link } from "react-router-dom";

export const dateFormatter = (data) => {
  if (Array.isArray(data)) {
    const arr = [...data];
    return arr.map((element) => {
      element.created_at = new Date(element.created_at).toLocaleDateString(
        "en-GB"
      );
      return element;
    });
  } else {
    const obj = { ...data };
    obj.created_at = new Date(obj.created_at).toLocaleDateString("en-GB");
    return obj;
  }
};

export const commentMapper = (comments) => {
  return comments.map((comment) => {
    return (
      <li key={comment.comment_id} className="Comments--li_item">
        <article className="Comments--comment_container">
          <h5>{comment.author}</h5>
          <p>{comment.body}</p>
          <p>Likes: {comment.votes}</p>
        </article>
      </li>
    );
  });
};

export const listAllReviews = (reviews) => {
  return reviews.map((review) => {
    return (
      <li className="Reviews--li_item" key={`review${review.review_id}`}>
        <Link className="Reviews--Link" to={`/reviews/${review.review_id}`}>
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
        </Link>
      </li>
    );
  });
};
