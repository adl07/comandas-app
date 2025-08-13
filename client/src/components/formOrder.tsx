/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react"
import {useFormik } from "formik"
import { schemaOrdenValidator ,type SchemaOrdenValidator } from "../schemas/orders"
import { toFormikValidationSchema } from "zod-formik-adapter"
import './formOrder.css'
import { CreateOrder } from "../services/allOrders"


const FormOrder=()=>{

    const [descripcion, setDescription] = useState<string>('')
    const [comensal, setComensal] = useState<string>('')
    const [tiempo, setTiempo] = useState<string>('')
    const [nombre, setNombre] = useState<string>('')
    const [isDisable, setDisable] = useState<boolean>(true)



    const SendNewOrder = useCallback(async (values: any)=>{
        const data = await CreateOrder(values)
        console.log(data)
        return data
    },[])


    const formik = useFormik<SchemaOrdenValidator>({
        initialValues:{
            descripcion: "",
            comensales:  0,
            tiempo_estimado_preparacion: 0,
            jefe_cocina: "",
        },
        validationSchema: toFormikValidationSchema(schemaOrdenValidator),
        onSubmit:(values, {resetForm})=>{
            try {
                console.log(values)
                console.log(schemaOrdenValidator)
                SendNewOrder(values)
                resetForm()
            } catch (error) {
                console.log('Hubo un fallo al realizar ingresar los datos', error)
                throw new Error("Hubo un fallo al realizar ingresar los datos");
                
            }
        }
    })

    

    useEffect(()=>{
        if (Object.keys(formik.errors).length === 0 && Object.values(formik.values).every(value => value !== ""))
        {
            setDisable(false)
        } else{
            setDisable(true)
        }
    },[formik.errors, formik.values])
    return(
        <>
            <form className="container-form-orders" onSubmit={formik.handleSubmit}>
                <label>Descripcion</label>
                <input 
                placeholder="Ingrese el pedido"
                id="descripcion"
                name="descripcion"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.descripcion}
                onBlur={formik.handleBlur}
                autoComplete="off"
                />
                <p className="">
                    {formik.touched.descripcion && formik.errors.descripcion}
                </p>
                <label>Comensales</label>
                <input placeholder="Cantidad de comensales"
                id="comensales"
                name="comensales"
                type="text"
                onChange={formik.handleChange}
                value={Number(formik.values.comensales)}
                onBlur={formik.handleBlur}
                autoComplete="off"/>
                <p className="">
                    {formik.touched.comensales && formik.errors.comensales}
                </p>
                <label>Tiempo estimado</label>
                <input placeholder="Tiempo"
                id="tiempo_estimado_preparacion"
                name="tiempo_estimado_preparacion"
                type="text"
                onChange={formik.handleChange}
                value={Number(formik.values.tiempo_estimado_preparacion)}
                onBlur={formik.handleBlur}
                autoComplete="off"
                />
                <p className="">
                    {formik.touched.tiempo_estimado_preparacion && formik.errors.tiempo_estimado_preparacion}
                </p>
                <label>Jefe de cocina</label>
                <input placeholder="Nombre"
                id="jefe_cocina"
                name="jefe_cocina"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.jefe_cocina}
                onBlur={formik.handleBlur}
                autoComplete="off"/>
                <p className="">
                    {formik.touched.jefe_cocina && formik.errors.jefe_cocina}
                </p>

                <button type='submit' disabled={isDisable}>Cargar Pedido</button>
            </form>
        </>
    )
}


export default FormOrder