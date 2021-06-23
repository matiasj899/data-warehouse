import React, { useContext, useCallback } from "react";
import Context from "../context/LoginContext";

export default function useUser() {
  const { jwt, setJwt } = useContext(Context);
  const userLog = useCallback(
    (token,admin) => {
      window.sessionStorage.setItem("jwt", token);
      setJwt(token);
      window.sessionStorage.setItem("admin", admin);
    },
    [setJwt]
  );
  const logOut = useCallback(() => {
    window.sessionStorage.removeItem("jwt");
    setJwt(null);
    window.sessionStorage.removeItem("admin");
  }, [setJwt]);
  return {
    isLogged: Boolean(jwt),
    userLog,
    logOut,
  };
}
