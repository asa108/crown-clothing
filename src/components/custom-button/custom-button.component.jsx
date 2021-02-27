import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  contact,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""}
    ${isGoogleSignIn ? "google-sign-in" : ""} custom-button
    ${contact ? "contact" : ""}
    `}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
