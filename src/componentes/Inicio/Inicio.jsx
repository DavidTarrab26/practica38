import Premium from './Premium';
import Slider from './Slider';
import Ingredientes from './ingredientes';
import Buscadas from './Buscadas';
import './Inicio.css'

const Inicio = () => {
    return ( 
        <>
        <Slider />
        <Buscadas />
        <Premium />
        <Ingredientes />
        </>
     );
}
 
export default Inicio;