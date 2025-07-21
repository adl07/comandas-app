import { Router } from "express";
import { BackOfficeController } from "../controllers/backOffice";
import type { BOModel } from "../models/supabase/backOffice";


export const createBORouter=({backOfficeModel}: {backOfficeModel : BOModel})=>{

const backOfficeRouter = Router()

const backOfController = new BackOfficeController(backOfficeModel)

    //ruta para obtener comandas
backOfficeRouter.get("/allOrders", backOfController.getAllOrders)


//ruta para obtener todos los roles
backOfficeRouter.get("/allRoles", backOfController.getAllRoles)

//route para obtener todos los users
backOfficeRouter.get("/allUsers", backOfController.getAllUser)

//ruta para obtener todos los estados de las comandas
//backOfficeRouter.get("/ordersState")

//ruta para obtener estado de la comanda 
//backOfficeRouter.get("/orders/:id")

//route para obtener user por id
backOfficeRouter.get("/users/:id",backOfController.getUserById)

//ruta para crear comanda
backOfficeRouter.post("/order", backOfController.createOrder)

//route para crear rol
backOfficeRouter.post("/role", backOfController.createRol)

//ruta para crear users
backOfficeRouter.post("/user", backOfController.createUser)


return backOfficeRouter

}

