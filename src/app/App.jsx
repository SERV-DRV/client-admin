import { AppRoutes } from "./router/AppRoutes";
import { Toaster, toast } from 'react-hot-toast';


function App() {
  return(
    <>
      <Toaster />

      <button 
      onClick={()=>{toast('¡Hola, soy una notificación!')}}
      style={{marginBottom: '20px'}}
      >
        Mostrar notificación
      </button>

      <AppRoutes />
    </>
  );
}

export default App;