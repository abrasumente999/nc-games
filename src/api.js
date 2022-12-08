import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://expensive-fashion-fly.cyclic.app/api",
});

export const getReviews = () => {
  return gamesApi.get("/reviews").then(({ data: { reviews } }) => {
    return reviews;
  });
};

export const getReviewById = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};

export const getCommentsByReviewId = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}/comments`).then(({ data }) => {
    return data;
  });
};

export const patchVotes = (review_id) => {
  const patchBody = {
    inc_votes: 1,
  };
  return gamesApi.patch(`/reviews/${review_id}`, patchBody).then(({ data }) => {
    return data.review;
  });
};
