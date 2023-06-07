import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import Places from "./Places";
import AccountNav from "../components/AccountNav";

const Profile = () => {
  const { user, ready, setUser } = useContext(UserContext);

  const [redirect, setRedirect] = useState(null);

  let { subpage } = useParams();

  if (subpage === undefined) subpage = "profile";

  if (!ready) {
    return "Loading...";
  }

  if (ready && !user) {
    return <Navigate to={"/login"} />;
  }

  if (redirect) {
    setUser(null);
    return <Navigate to={redirect} />;
  }

  async function logout(e) {
    e.preventDefault();
    await axios.post("/logout");
    setRedirect("/");
  }

  return (
    <div>
      <AccountNav />
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email})<br />
          <button className="primary max-w-sm mt-2" onClick={logout}>
            Logout
          </button>
        </div>
      )}
      {subpage === "places" && <Places />}
    </div>
  );
};

export default Profile;
