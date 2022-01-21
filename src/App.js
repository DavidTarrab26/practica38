import './App.css';
import Footer from './componentes/Footer/Footer';
import Inicio from './componentes/Inicio/Inicio';
import Nav from './componentes/Nav/Nav';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AppProvider from './store/appContext';
import Ordenes from './componentes/Ordenes/Ordenes';


function App() {
  return (
    <>
    <AppProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="ejercicio-restaurant/" element={<Inicio />}/>
          <Route path="ejercicio-restaurant/pedido" element={<Ordenes />}/>
        </Routes>
        <Footer />
      </Router>
    </AppProvider>
    </>
  );
}

export default App;
