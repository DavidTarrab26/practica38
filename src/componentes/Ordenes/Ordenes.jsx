
import { useContext } from 'react';
import { Context } from '../../store/appContext';
import './Ordenes.css'

const Ordenes = () => {
    const {carrito} = useContext(Context)
    return ( 
        <>
        {carrito.length > 0 ?
        carrito.map((prod)=>(
            <div className="card" style={{width: '18rem'}} key={prod.id}>
                <img src={require(`../../assets/img/buscadas/${prod.imagen}.png`)} className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                    <h5 className="card-title">{prod.nombre}</h5>
                    {prod.ingredientes.map((ingre, index)=>(
                            <div className='ingre' key={index}>
                                <p>- {ingre}</p>
                            </div>
                        ))}
                    <div className='text-center'>
                        <button className='btn btn-warning mt-3' disabled={true}>{prod.precio}</button> 
                    </div>
                </div>
            </div>
        ))
        :
        <h1>ta lleno</h1>
        }
        </>
     );
}
 
export default Ordenes;