
import { useContext } from 'react/cjs/react.production.min';
import { Context } from '../../store/appContext';
import './Ordenes.css'

const Ordenes = () => {
    const {carrito} = useContext(Context)
    return ( 
        <h2>Tu pedido:</h2>
     );
}
 
export default Ordenes;