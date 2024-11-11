import React from "react";

export default function LoginButton({ isLoggedIn }) {
  return (
    <div>
      <h2>{isLoggedIn ? "Welcome Back!" : "Please Login"}</h2>
    </div>
  );
}
