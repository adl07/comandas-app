import FormOrder from "../formOrder/formOrder"
import './createOrder.css'

export const CreateOrder=()=>{
    return(
        <>
            <div className="container-form-create">
                <h1>Ingresar perdido</h1>
                <FormOrder/>
            </div>
        </>
    )
}


export default CreateOrder