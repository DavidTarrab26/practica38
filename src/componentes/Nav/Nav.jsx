import logo from '../../assets/img/logo.png'
import ig from '../../assets/img/instagramNavbar.png'
import fb from '../../assets/img/facebookNavbar.png'
import './Nav.css'
import { useContext } from 'react'
import { Context } from '../../store/appContext'
import { Link } from 'react-router-dom'

const Nav = () => {
    const {carrito} = useContext(Context)

    return ( 
        <div>
            <nav className="navbar navbar-light bg-black">
            <div className="container-fluid">
                <Link to={'ejercicio-restaurant/'}><img src={logo} width="50" height="54"/></Link>
                <h2 className='titulo'>Bulldog</h2>
                {!carrito.length > 0 ?
                <div className='d-flex justify-content-en'>
                    <div className='mx-2'>
                        <img src={ig} width="50" height="54"/>
                    </div>
                    <img src={fb} width="50" height="54" />
                </div>
                :
                <div className='d-flex justify-content-en'>
                    <div className='mx-2'>
                        <img src={ig} width="50" height="54"/>
                    </div>
                    <img src={fb} width="50" height="54" />
                    <div className='d-flex carrito mx-4 mt-2'>
                        <Link to={'ejercicio-restaurant/pedido'}><i className="bi bi-cart-fill"></i></Link>
                        <p>{carrito.length}</p>
                    </div>
                </div>
                }
            </div>
            </nav>
        </div>
     );
}
 
export default Nav;