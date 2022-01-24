import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../../store/appContext';
import './Premium.css'

const Premium = () => {
    const {agregarAlCarrito, carrito} = useContext(Context)
    const [premium, setPremium] = useState('')
    useEffect(()=>{
        axios
    .get('https://apipdtc.herokuapp.com/bulldog/premium')
    .then((response)=>{
        setPremium(response.data)
    })    
    },[])

    return ( 
        <div className='container'>
            <h2 className='text-center py-5'>Las Premium</h2>
            {premium == '' ?
            <p>cargando</p>
            :
            <div className='row d-flex justify-content-center'>
            {premium.map((prem)=>(
                
                    <div className='col-6' key={prem.id}>
                        <div className="card mb-3 shadow">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={require(`../../../assets/img/premium/${prem.nombre}.png`)} className="img-fluid premiumImg mt-2 mx-2"/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title titlePremium">{prem.nombre}</h5>
                                        <p className="card-text">{prem.ingredientes[0]}, {prem.ingredientes[1]}, {prem.ingredientes[2]}, {prem.ingredientes[3]}</p>
                                        <div className='d-flex justify-content-between'>
                                            <h6 className='precioPremium'>${prem.precio}</h6>
                                            <button className='btn btn1' onClick={()=>agregarAlCarrito({...prem})} disabled={carrito.find(carro=>carro.id == prem.id ? true : false)}>Comprar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            ))}
            </div>
            }
        </div>
     );
}
 
export default Premium;