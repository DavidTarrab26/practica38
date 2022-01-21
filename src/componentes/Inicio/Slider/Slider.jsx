import './Slider.css'

const Slider = () => {
    return ( 
        <div className='container-fluid'>
            <div className='portada row'>
                <div className='col-6'>
                    <img src={require(`../../../assets/img/hamburguesaPortada.png`)} style={{width: '100%'}} />
                </div>
                <div className='col-5 texto'>
                    <h2 className='bulldog blanco d-flex justify-content-end texto'>Bulldog</h2>
                    <h2 className='restaurant blanco d-flex justify-content-end texto'>Restaurant</h2>
                    <h2 className='veni d-flex justify-content-end texto'>Veni a probar las mejores burgers</h2>
                </div>
            </div>
        </div>
     );
}
 
export default Slider;