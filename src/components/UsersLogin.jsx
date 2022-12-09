import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "./contexts/Loading";
import { UserContext } from "./contexts/User";
import { getUsers } from "../api";

export const UsersLogin = () => {
  const [users, setUsers] = useState([]);
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <p className="Loading">... Loading</p>
  ) : (
    <div className="Users">
      <main>
        <section className="Users--Content_container">
          <article className="Users--Container">
            <ul>
              {users.map((user) => {
                return (
                  <li className="Users--li_item" key={`${user.username}`}>
                    <div className="Users--avatar">
                      <img
                        className="Users--avatar_img"
                        src={user.avatar_url}
                        alt={`avatar for ${user.username}`}
                      />
                    </div>
                    <div className="Users--li_text">
                      <h3>{user.username}</h3>
                      <button onClick={() => setLoggedInUser(user)}>
                        Log in
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </article>
        </section>
      </main>
    </div>
  );
};
