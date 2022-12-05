export const SingleReview = (props) => {
  const { reviews } = props;
  console.log(reviews);

  return (
    <article className="Review--Container">
      {reviews.map((review) => {
        return (
          <li key={review.review_id}>
            <img
              className="Review--review_img"
              src={review.review_img_url}
              alt="Review"
            />
            <h3>{review.title}</h3>
            <p>{review.owner}</p>
          </li>
        );
      })}
    </article>
  );
};
