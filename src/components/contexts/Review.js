import { createContext } from "react";
import { useState } from "react";

export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [review, setReview] = useState([]);

  return (
    <ReviewContext.Provider value={{ review, setReview }}>
      {children}
    </ReviewContext.Provider>
  );
};
