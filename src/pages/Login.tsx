import { InteractionStatus } from "@azure/msal-browser";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

export const Login: React.FC = () => {
  const { instance, inProgress } = useMsal();
  const isAuth = useIsAuthenticated()

  useEffect(() => {
    if (!isAuth && inProgress === InteractionStatus.None) {
      instance.loginRedirect()
    }
  }, [inProgress, isAuth, instance])

  if (isAuth) {
    return <Navigate to="/" />
  }

  return (
    <div>
      <h1>Login</h1>
    </div>
  )
}