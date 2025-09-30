import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { schemaLoginUserValidator } from "../../schemas/loginUser";
import './loginUser.css'

interface UserLoginInterface {
    username: string;
}

const LoginUser =()=>{

    const [isDisable, setDisable] = useState<boolean>(true);


    const SendLoginUser = () =>{
        console.log("El user name es")
    }

    const formik = useFormik({
        initialValues:{
            username: ""
        },
        validationSchema: toFormikValidationSchema(schemaLoginUserValidator),
        onSubmit:(values,{
            resetForm
        }) =>{
            try {
                console.log(values)
                SendLoginUser()
                resetForm()
            } catch (error) {
                console.log("Hubo un fallo al realizar ingresar los datos", error)
                throw new Error("Hubo un fallo al realizar ingresar los datos");
            }
        }
    })

    useEffect(() => {
        if (
          Object.keys(formik.errors).length === 0 &&
          Object.values(formik.values).every((value) => value !== "")
        ) {
            console.log(isDisable)
          setDisable(false);
        } else {
            console.log(isDisable)
          setDisable(true);
        }
      }, [formik.errors, formik.values]);
    
      
    return(
        <>
        <form className="container-form-login" onSubmit={formik.handleSubmit}>
            <input 
                className="username-login"
                placeholder="usuario"
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.username}
                onBlur={formik.handleBlur}
                autoComplete="off"
            />
            <span className="message-login">
                {formik.touched.username && formik.errors.username}
            </span>
            <button className="button-login-user" type="submit" disabled={isDisable}>Ingresar</button>
        </form>
        </>
    )
}

export default LoginUser