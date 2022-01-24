
import { useContext, useState } from 'react';
import { Context } from '../../store/appContext';
import './Ordenes.css'

const Ordenes = () => {
    const {carrito, remove, finCompra, confirmarCompra} = useContext(Context)
    const [totalOrden, setTotalOrden] = useState (0)
    const [cantidad, setCantidad] = useState('')

    const ordenar = (e) =>{
        console.log(cantidad)
    }

    const sumarTotal = (precio) =>{
        setTotalOrden(totalOrden+precio)
    }
    return ( 
        <>
        {carrito.length > 0 ?
        <div className='container'>
            {confirmarCompra == '' ?
        ''
        :
        totalOrden == 0 ?
        <div className="alert alert-danger" role="alert">
           Debe seleccionar una hamburguesa
        </div>
        :
        <div className="alert alert-success" role="alert">
            {confirmarCompra}
        </div>
        }
            <div className='d-flex justify-content-center flex-wrap my-5'>
                {carrito.map((prod)=>(
                    
                        <div className="card mx-3 col-4 mt-2" style={{width: '18rem'}} key={prod.id}>
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
                                    <button className='btn btn-danger mt-3 mx-1' onClick={()=>remove(prod.id)}><i className="bi bi-trash-fill"></i></button>
                                </div>
                                <div className='d-flex justify-content-center mt-3'>
                                    <p className='mx-1'>cantidad:</p>
                                    <input type={'number'} min={'1'} max={'20'} className='inputHamb' /* onChange={(e)=>setCantidad([e.target.value, prod.id])} *//>
                                </div>
                                <button className='btn btn-warning' onClick={()=>sumarTotal(prod.precio)}>ORDENAR!</button>
                            </div>
                        </div>
                ))}
            </div>
            <div className='text-center'>
                <h3>Total: ${totalOrden}</h3>
                <button className='btn btn-success' onClick={finCompra}>Finalizar Compra</button>
            </div>
        </div>
        :
        <h2 className='text-center'>Agrega tus hamburguesa al carrito!!</h2>
        }
        </>
     );
}
 
export default Ordenes;