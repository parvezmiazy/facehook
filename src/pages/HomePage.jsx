import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const HomePage = () => {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <div>
      Home Page
      <Link to="/me">Go to Profile</Link>
    </div>
  );
};

export default HomePage;
