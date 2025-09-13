import {type ReactNode } from "react"
import './card.css'


export interface CardProps{
        title: string,
        icon: ReactNode | null,
        quantity: number,
        description: string
}



export const Card =(props: CardProps)=>{

    return (
        <>
            <div className="container-card">
                <div className="title-card">
                    <h3>{props.title}</h3>
                    <span className="icon-card">{props.icon}</span>
                </div>
                <div className="details-card">
                    <div className="details-quantity">{props.quantity}</div>
                    <div className="details-description">{props.description}</div>
                </div>
            </div>
        </>
    )

}

