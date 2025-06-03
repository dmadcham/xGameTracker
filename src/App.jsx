import "./styles/main.scss";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import store from "./redux/store/store";

/**
 * Componente principal de la aplicación
 * 
 * @component
 * @description Este componente es el punto de entrada de la aplicación. Utiliza Redux para gestionar el estado global y renderiza el enrutador de la aplicación. El componente Provider envuelve la aplicación para proporcionar acceso al store de Redux a todos los componentes hijos.
 * @returns {JSX.Element} Un elemento JSX que representa la aplicación principal.
 */
function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  )
}

export default App
