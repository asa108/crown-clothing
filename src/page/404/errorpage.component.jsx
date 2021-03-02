import React from "react";

import "./errorpage.style.scss";

import { Link } from "react-router-dom";
import HomePage from "../homepage/homepage.component";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>404 page not found...</h1>
      <h3>We're sorry. The page might be deleted.</h3>
      <Link to="/" className="go-to-home">
        Go Home →
      </Link>
    </div>
  );
};

export default ErrorPage;
