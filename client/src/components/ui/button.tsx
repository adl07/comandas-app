import './button.css'

interface PropsButton{
    title: string;
}

export const Button=(props: PropsButton)=>{
    return (
        <button type="button" className="button">
            {props.title}
        </button>
    )
}