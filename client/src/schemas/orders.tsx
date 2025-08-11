import {z} from 'zod'

export const schemaOrdenValidator = z.object({
    descripcion: z.string({
        invalid_type_error: "Por favor ingresa la descripcion",
        required_error: "La descripción debe ser texto",
    })
    .min(10, { message: "La descripción debe contener un mínimo de 10 caracteres" })
    .max(50, { message: "La descripción debe contener un máximo de 50 caracteres" }),
    comensales: z.string({
        invalid_type_error: "Por favor ingresa la cantidad de comensales",
        required_error: "La cantidad de comensales debe ser texto",
    })
    .min(1, { message: "Comensales debe tener al menos 1 carácter" })
    .max(50, { message: "Comensales debe tener como máximo 50 caracteres" }),
    tiempo_preparacion: z.string({
        invalid_type_error: "Por favor ingresa el tiempo de preaparacion",
        required_error: "El tiempo de preparación debe ser texto",
    })
    .min(3, { message: "Tiempo de preparación es demasiado corto" })
    .max(5, { message: "Tiempo de preparación es demasiado largo" }),
    jefe_cocina: z.string({
        invalid_type_error: "Por favor ingresa el jefe de cocina",
        required_error: "El jefe de cocina debe ser texto",
    })
    .min(5, { message: "El jefe de cocina debe tener al menos 5 caracteres" })
    .max(10, { message: "El jefe de cocina debe tener como máximo 10 caracteres" })
})

export type SchemaOrdenValidator = z.infer<typeof schemaOrdenValidator>

export function validateOrder(object: unknown){
    return schemaOrdenValidator.safeParse(object)
}