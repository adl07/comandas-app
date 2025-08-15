import {z} from 'zod'

export const schemaOrdenValidator = z.object({
    descripcion: z.string({
        invalid_type_error: "Por favor ingresa la descripcion",
        required_error: "La descripción debe ser texto",
    })
    .min(10, { message: "La descripción debe contener un mínimo de 10 caracteres" })
    .max(50, { message: "La descripción debe contener un máximo de 50 caracteres" }),
    comensales: z.coerce.number({
        invalid_type_error: "Por favor ingresa la cantidad de comensales",
        required_error: "La cantidad de comensales debe ser un número",
    })
    .int({message: "Debe ser un número entero"})
    .min(1, { message: "Debe ser al menos 1 comensal" })
    .max(50, { message: "Máximo 50 comensales" }),
    tiempo_estimado_preparacion: z.coerce.number({
        invalid_type_error: "Por favor ingresa el tiempo de preparacion",
        required_error: "El tiempo de preparación debe ser un número",
    })
    .int({message:"Debe ser un número entero"})
    .min(1, { message: "Mínimo 1 minuto" })
    .max(300, { message: "Máximo 300 minutos" }),
    jefe_cocina_id: z.string({
        invalid_type_error: "Por favor ingresa el jefe de cocina",
        required_error: "El jefe de cocina debe ser texto",
    })
    .min(5, { message: "El jefe de cocina debe tener al menos 5 caracteres" })
    .max(50, { message: "El jefe de cocina debe tener como máximo 10 caracteres" })
})

export type SchemaOrdenValidator = z.infer<typeof schemaOrdenValidator>

export function validateOrder(object: unknown){
    return schemaOrdenValidator.safeParse(object)
}