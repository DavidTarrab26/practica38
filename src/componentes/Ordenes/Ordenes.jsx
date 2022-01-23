
import { useContext } from 'react';
import { Context } from '../../store/appContext';
import './Ordenes.css'

const Ordenes = () => {
    const {carrito} = useContext(Context)
    return ( 
        <>
        {carrito.length > 0 ?
        <div className='container'>
        <div className='d-flex justify-content-center my-5 cartasOredenes'>
            {carrito.map((prod)=>(
                
                    <div className="card mx-3 col-4" style={{width: '18rem'}} key={prod.id}>
                        <img src={require(`../../assets/img/buscadas/${prod.imagen}.png`)} className="card-img-top" alt="..."/>
                        <div className="card-body text-center">
                            <h5 className="card-title">{prod.nombre}</h5>
                            {prod.ingredientes.map((ingre, index)=>(
                                    <div className='ingre' key={index}>
                                        <p>- {ingre}</p>
                                    </div>
                                ))}
                            <div className='text-center'>
                                <button className='btn btn-warning mt-3 mx-1' disabled={true}>${prod.precio}</button>
                                <button className='btn btn-danger mt-3 mx-1'><i className="bi bi-trash-fill"></i></button>
                            </div>
                        </div>
                    </div>
                
            ))}
        </div>
        </div>
        :
        <h1>ta lleno</h1>
        }
        </>
     );
}
 
export default Ordenes;