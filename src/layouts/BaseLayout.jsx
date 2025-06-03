import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components/common/index";

/**
 * Componente BaseLayout
 * 
 * @component
 * @description Este componente define el diseño base de la aplicación, incluyendo la barra de navegación y el pie de página. Utiliza el componente Outlet de React Router para renderizar las rutas hijas dentro del diseño.
 * 
 * @returns {JSX.Element} Un elemento JSX que representa el diseño base de la aplicación.
 */
const BaseLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default BaseLayout
