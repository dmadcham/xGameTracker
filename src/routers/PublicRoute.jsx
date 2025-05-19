import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
    const isAutenticated = !!localStorage.getItem("token");

    return isAutenticated ? <Navigate to={"/"} replace /> : children;
}

export default PublicRoute;