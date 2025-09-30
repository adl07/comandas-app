import { z } from "zod";

export const schemaLoginUserValidator = z.object({
  username: z
    .string({
      invalid_type_error: "Por favor ingresa el username",
      required_error: "El username debe ser texto",
    })
    .min(3, {
      message: "El username debe contener un mínimo de 3 caracteres",
    })
    .max(10, {
      message: "El username debe contener un máximo de 50 caracteres",
    }),
});

export type LoginUserValidator = z.infer<typeof schemaLoginUserValidator>;

export function validateUser(object: unknown) {
  return schemaLoginUserValidator.safeParse(object);
}
