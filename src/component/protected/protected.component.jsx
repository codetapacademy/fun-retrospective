import React, { memo } from "react";
import { Redirect } from "@reach/router";
import { useSelector } from "react-redux";

const Protected = ({ children }) => {
  const isLoggedIn = useSelector(({ user }) => user.isLoggedIn);

  return isLoggedIn ? (
    <>{children}</>
  ) : (
    <Redirect from="/" to="/login" noThrow />
  );
};

const ProtectedMemo = memo(Protected)

export {
  ProtectedMemo as Protected
} 
