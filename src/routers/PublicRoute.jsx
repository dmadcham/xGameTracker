import { Navigate } from "react-router-dom";

/**
 * Componente ProtectedRoute
 * 
 * @component
 * @description Este componente se utiliza para proteger rutas que requieren autenticación. Verifica si el usuario está autenticado comprobando la existencia de un token en el almacenamiento local. Si el usuario está autenticado, renderiza los hijos del componente; de lo contrario, redirige al usuario a la página de inicio de sesión.
 * @param {Object} props - Las propiedades del componente.
 * @param {JSX.Element} props.children - Los elementos hijos que se renderizarán si el usuario está autenticado.
 * 
 * @returns {JSX.Element} Un elemento JSX que representa la ruta protegida o una redirección a la página de inicio de sesión.
 */
const PublicRoute = ({ children }) => {
    const isAutenticated = !!localStorage.getItem("token");

    return isAutenticated ? <Navigate to={"/"} replace /> : children;
}

export default PublicRoute;