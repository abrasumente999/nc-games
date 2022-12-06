import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://expensive-fashion-fly.cyclic.app/api",
});

export const getReviews = () => {
  return gamesApi.get("/reviews").then(({ data: { reviews } }) => {
    return reviews;
  });
};

export const getCommentsById = () => {
  return gamesApi
    .get(`/reviews/:review_id/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};
