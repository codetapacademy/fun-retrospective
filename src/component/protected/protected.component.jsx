import React from "react";
import { Redirect } from "@reach/router";
import { useSelector } from "react-redux";

export const Protected = ({ children }) => {
  const isLoggedIn = useSelector(({ user }) => user.isLoggedIn);

  return isLoggedIn ? (
    <>{children}</>
  ) : (
    <Redirect from="/" to="/login" noThrow />
  );
};
