/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, type CardProps } from "../components/card/card"
import { Head } from "../components/head/head"
import '../App.css'
import { FilterOrder } from "../components/filterOrder/filterOrder"
import { getOrdersStates } from "../services/allOrdesStates"
import { useEffect, useState } from "react"
import { IconDefault } from "../components/ui/icons"
import type { Estados } from "../interfaces/orders"

function Dashboard(){ 

    const [cards, setCards] = useState<[]>([])

    const getData =async ()=>{
        const data = await getOrdersStates();
        console.log(data)
        setCards(data)
    }

    useEffect(()=>{
        getData()
    },[])


    const IconsVariant : Record<Estados, React.ReactNode> ={
        "Orden Creada": <IconDefault name="deployed_code"/>, 
        "En Preparacion": <IconDefault name="schedule"/>,
        "Despachada": <IconDefault name="delivery_truck_bolt"/>,
        "Entregada": <IconDefault name="task_alt"/>,
        "Recibida": <IconDefault name="error"/>    
    }

    return(
        <> 
            <div className="container-dashboard">
            <Head/>
                <div className="container-group-cards">
                    {cards.length > 0 && cards.map((card:any)=>
                        <Card 
                            key={card.id}
                            title={card.nombre}
                            icon={<IconDefault  name={IconsVariant[card.nombre as Estados]}/>} 
                            quantity={card.quantity}
                            description={card.description}
                        />
                    )}
                </div>
            <FilterOrder/>
            </div>  
        </>
        
    )
}




export default Dashboard