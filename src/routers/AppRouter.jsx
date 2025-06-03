import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  Error,
  ViewGameAll,
  ViewGameDetails,
  ViewStoreAll,
  ViewStoreDetails,
  ViewCreatorAll,
  ViewLogin,
  ViewRegister,
  ViewDashboard
} from "../views/index";
import BaseLayout from "../layouts/BaseLayout";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

/**
 * Componente AppRouter
 * 
 * @component
 * @description Este componente define las rutas de la aplicación utilizando React Router. Incluye rutas públicas y protegidas, y renderiza diferentes vistas según la ruta actual. Utiliza el componente BaseLayout para envolver las vistas con una estructura común que incluye la barra de navegación y el pie de página.
 * 
 * @returns {JSX.Element} Un elemento JSX que representa las rutas de la aplicación.
 */
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/error" element={<Error />} />
          <Route path="games" element={<ViewGameAll />} />
          <Route path="games/:gameId" element={<ViewGameDetails />} />
          <Route path="stores" element={<ViewStoreAll />} />
          <Route path="stores/:storeId" element={<ViewStoreDetails />} />
          <Route path="creators" element={<ViewCreatorAll />} />

          <Route
            path="login"
            element={
              <PublicRoute>
                <ViewLogin />
              </PublicRoute>
            }
          />

          <Route
            path="register"
            element={
              <PublicRoute>
                <ViewRegister />
              </PublicRoute>
            }
          />

          <Route 
            path="dashboard"
            element={
              <ProtectedRoute>
                <ViewDashboard />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
