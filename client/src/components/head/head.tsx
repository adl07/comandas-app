import { Button } from "../ui/button"
import './head.css'


export const Head =()=>{

    return(
        <>  
        <div className="container-head">
            <div className="head-title">
                <h1>Panel de Gestión de Órdenes</h1>
                <h3>Gestiona y supervisa todas las órdenes del restaurante en tiempo real</h3>
            </div>
            <div className="head-button">
                <Button title="Nueva Orden"/>
            </div>
        </div>
            
        </>
    )
}

