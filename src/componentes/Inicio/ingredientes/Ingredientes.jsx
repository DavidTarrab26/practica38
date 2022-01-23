import axios from 'axios';
import { useEffect, useState } from 'react';
import './Ingredientes.css'
import carne from '../../../assets/img/ingredientes/Carne.png'

const Ingredientes = () => {
    const [ingredientes, setIngredientes] = useState('')
    const [pedido, setPedido] = useState([])
    const [total, setTotal] = useState(350)

    useEffect(()=>{
        axios
    .get('https://apipdtc.herokuapp.com/bulldog/ingredientes')
    .then((response)=>{
        setIngredientes(response.data)
    })    
    },[])

    const mostrar = (ingre, precio) =>{
        setPedido([ingre,...pedido])
        setTotal(total+precio)
    }

    const remove = (id, preciomenos) =>{
        setPedido(pedido.filter((ped) => ped.id != id))
        setTotal(total-preciomenos)
    }
    
    return ( 
        <div className='container-fluid'>
            <div className='row mt-5 todo'>
                <div className='my-3'>
                    <h2 className='blanco text-center'>Arma la tuya!</h2>
                </div>
                <div className='col-sm-12 col-md-6'>
                    {/* TERNARIO PARA MOSTRAR ELECCION DE INGREDIENTES */}
                    {ingredientes == '' ?
                        <p>cargando...</p>
                    :   
                    /* MAP DE LA API */
                        ingredientes.map((ingre)=>(
                            <div key={ingre.id}>
                                <div className="d-grid gap-2 col-6 mx-auto my-1">
                                    <button className="btn btn-outline-warning d-flex justify-content-between" type="button" onClick={()=>mostrar(ingre, ingre.precio)} 
                                        disabled={pedido.find(ped=>ped.id == ingre.id ? true : false)}><img className='heigth' src={require(`../../../assets/img/ingredientes/${ingre.imagen}.png`)}></img> 
                                        {ingre.nombre} ${ingre.precio}
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
                <div className='col-sm-12 col-md-6 '>
                    {/* TERNARIO PARA MOSTRAR LOS INGREDIENTES SELECCIONADOS */}
                    {pedido.length == 0 ?
                        <div className='d-flex align-items-center elegi'>
                            <p className=' blanco' style={{fontSize:'20px'}}>Elegi tus ingredientes!🍔🍟</p>
                        </div>
                    :
                    /* IMPRIMO LA HAMBURGUESA FIJA */
                        <div>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <button className="btn btn-outline-warning d-flex justify-content-between" type="button" disabled={true}>
                                    <img className='heigth' src={carne}></img>
                                    hamburguesa $350
                                </button>
                            </div>
                            {/* MAP DEL STATE PEDIDOS CON LO ELEGIDO POR EL CLIENTE */}
                            {pedido.map((ped)=>(
                                <div className="d-grid gap-2 col-6 mx-auto" key={ped.id}>
                                    <button className="btn btn-outline-warning d-flex justify-content-between" type="button">
                                        <img className='heigth' src={require(`../../../assets/img/ingredientes/${ped.imagen}.png`)}></img>
                                            {ped.nombre} ${ped.precio} 
                                        <i className="bi bi-trash-fill basura" onClick={()=> remove(ped.id, ped.precio)}></i>
                                    </button>
                                </div>
                            ))}
                        </div>
                    }
                </div>
                <div className='blanco d-flex justify-content-end'>
                    {pedido.length == 0 ?
                    ''
                    :
                    <h2>TOTAL:{total}</h2>
                    }
                    
                </div>
            </div>
        </div>
     );
}
 
export default Ingredientes;