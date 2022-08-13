import { Navigate } from "react-router-dom";

export default function ProtectedRouteLogin(props) {
  let isLogin = localStorage.getItem("access_token");
  if (isLogin) {
    return <Navigate to={"/"} />;
  }
  return props.children;
}
