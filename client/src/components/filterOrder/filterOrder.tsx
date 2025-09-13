import { useCallback, useEffect, useMemo, useState } from 'react'
import './fillterOrder.css'
import { GetAllOrders } from '../../services/allOrders';
import type { OrdersInterface } from '../../interfaces/orders';
import { GridOrder } from '../gridOrder.tsx/gridOrder';


export const FilterOrder =() =>{
    const [descriptionValue, setDesciptionValue] = useState<string>('')
    const [estadoValue, setEstadoValue] = useState<string>('todos');
    const [data, setData] = useState<OrdersInterface[]>([]);

    console.log('Valor del input:', descriptionValue)
    

    useEffect(()=>{
        console.log('Valor del input2:', estadoValue)
    },[estadoValue])

    const getDataOrders = useCallback( async ()=>{
        const data = await GetAllOrders();
        console.log(data)
        setData(data)
        return data
    },[])

    useEffect(()=>{
        getDataOrders()
        console.log('useEffect',data)
        
    },[])


    const filterd = useMemo(()=>{  
        return estadoValue === "todos" ? data : data.filter((data)=> data.estado === estadoValue)
    },[estadoValue, data]);
    

    console.log('Resultado de filterd',filterd)
    return(
        <>
            <div className="container-card-filter">
                <div className="card-filter-title">
                    <h2>Filtros y Búsqueda</h2>
                </div>
                <div className="card-inputs-filter">
                    <input 
                    placeholder="Buscar por jefe de cocina..."
                    className="input-description"
                    value={descriptionValue}
                    onChange={(e) => setDesciptionValue(e.target.value)}
                    />
                    <select className="select-estados" value={estadoValue} onChange={(e)=> setEstadoValue(e.target.value)} >
                        <option value="todos">Todos los estados</option>
                        <option value="Orden Creada">Cargado</option>
                        <option value="Recibido">Recibido</option>
                        <option value="En Preparacion">En Preparacion</option>
                        <option value="Despachada">Despachado</option>
                        <option value="Entregada">Entregado</option>
                    </select>
                </div>
            </div>
            {   
                data && filterd.length < 1 ? 
                ( <div className="message-estados">
                    <p>No hay datos con este estado</p>
                </div>
                ) : 
                (<GridOrder dataProps={filterd}/>)
                
            }
        </>
    )
}
