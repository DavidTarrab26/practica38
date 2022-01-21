import './App.css';
import Buscadas from './componentes/Buscadas/Buscadas';
import Footer from './componentes/Footer/Footer';
import Ingredientes from './componentes/ingredientes/Ingredientes';
import Nav from './componentes/Nav/Nav';
import Premium from './componentes/Premium/Premium';
import Slider from './componentes/Slider/Slider';

function App() {
  return (
    <>
    <Nav />
    <Slider />
    <Buscadas />
    <Premium />
    <Ingredientes />
    <Footer />
    </>
  );
}

export default App;
