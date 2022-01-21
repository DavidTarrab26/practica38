import { createContext, useState } from "react";

export const Context = createContext(null)

const AppProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (producto) =>{
        setCarrito([producto, ...carrito])
        console.log(carrito)
    }
    return ( 
        <Context.Provider value={{carrito, setCarrito, agregarAlCarrito}}>
            {children}
        </Context.Provider>
     );
}
 
export default AppProvider;