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
  return gamesApi.get(`/reviews/${review_id}`).then(({ data: { review } }) => {
    return review;
  });
};

export const getCommentsByReviewId = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}/comments`).then(({ data }) => {
    return data;
  });
};

export const patchVotes = (review_id, vote) => {
  const patchBody = {
    inc_votes: vote,
  };
  return gamesApi.patch(`/reviews/${review_id}`, patchBody).then(({ data }) => {
    return data.review;
  });
};

export const postComment = (review_id, comment) => {
  const postBody = {
    username: comment.username,
    body: comment.body,
  };
  return gamesApi
    .post(`reviews/${review_id}/comments`, postBody)
    .then(({ data }) => {
      return data;
    });
};

export const getUsers = () => {
  return gamesApi.get("/users").then(({ data }) => {
    return data;
  });
};
