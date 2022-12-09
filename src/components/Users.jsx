import { useContext, useEffect, useState } from "react";
import { UsersLogin } from "./UsersLogin";
import { UserContext } from "./contexts/User";
import { LoadingContext } from "./contexts/Loading";
import { Header } from "./Header";

export const Users = () => {
  const [loading, setLoading] = useState(false);
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  return loading ? (
    <p className="Loading">... Loading</p>
  ) : (
    <div className="Users">
      <header className="Users--header">
        <Header header="Users" />
      </header>
      {loggedInUser ? (
        <div className="Users--loggedIn">
          <h3>Logged in as {loggedInUser.username}</h3>
        </div>
      ) : (
        <UsersLogin />
      )}
    </div>
  );
};
