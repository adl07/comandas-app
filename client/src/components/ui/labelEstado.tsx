import './labelEstado.css'
import type { Estados } from '../../interfaces/orders';
import type React from 'react';
import { IconDefault, IconDone } from './icons';



interface LabelProps{
    title: string;
    icon: React.ReactNode;
    className?: string;
    variant: string;
}


export const LabelEstado=(props: LabelProps)=>{

    const variantClasses: Record<Estados, string> = {
        "Orden Creada": "stepOne",
        "En Preparacion": "stepTwo",
        "Despachada": "stepThree",
        "Entregada": "stepFour",
        "Recibida": "stepFive"
    }

    const variantIcon: Record<Estados, React.ReactNode> = {
        "Orden Creada": <IconDefault name='deployed_code' size={16}/>,
        "En Preparacion": <IconDefault name='schedule' size={16}/>,
        "Despachada": <IconDefault name='delivery_truck_bolt' size={16} />,
        "Entregada": <IconDefault name='task_alt' size={16}/>,
        "Recibida": <IconDefault name='error' size={16}/>
    }

    console.log("✅ variant recibido:", props.variant);
    console.log("✅ clase resuelta:", variantClasses[props.variant as Estados]);
    console.log("✅ clase resuelta:", variantIcon[props.variant as Estados]);

    return(
        <div className={`container-label ${variantClasses[props.variant as Estados]} ${props.className || ""}`}>
            <div>{variantIcon[props.icon as Estados]}</div>
            <p>{props.title}</p>
        </div>
    )
}