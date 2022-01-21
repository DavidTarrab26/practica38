import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../../store/appContext';
import './Buscadas.css'

const Buscadas = () => {
    const {agregarAlCarrito} = useContext(Context)
    const [buscados, setBuscados] = useState('')

    useEffect(()=>{
        axios
    .get('https://apipdtc.herokuapp.com/bulldog/buscadas')
    .then((response)=>{
        setBuscados(response.data)
    })    
    },[])

    return ( 
        <div className='buscadas'>
            <div>
                <h2 className='text-center'>Las mas buscadas</h2>
            </div>
            {buscados == ''?
            <p>cargando...</p>
            :
            <div className='d-flex justify-content-between container'>
            {buscados.map((buscado)=>(
                <div className="card card1 shadow" style={{width: '18rem'}} key={buscado.id}>
                    <img src={require(`../../../assets/img/buscadas/${buscado.imagen}.png`)} className='radius'/>
                    <div className="card-body">
                        <h5 className="card-title card-title1">{buscado.nombre}</h5>
                        {buscado.ingredientes.map((ingre, index)=>(
                            <div className='ingre' key={index}>
                                <p>- {ingre}</p>
                            </div>
                        ))}
                        <div className='d-flex justify-content-between'>
                            <p className="card-text precio mt-3">${buscado.precio}</p>
                            <button className='btn btn1 mt-3' onClick={()=>agregarAlCarrito({...buscado})}>comprar</button>
                        </div>
                    </div>
                </div>
            ))}
            </div>
            }
        </div>
     );
}
 
export default Buscadas;