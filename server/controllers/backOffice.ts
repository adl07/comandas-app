import { BOModel } from "../models/supabase/backOffice";


export class BackOfficeController {
  constructor(private backOfficeModel : BOModel){
    console.log("backOfficeModel methods:",
        Object.getOwnPropertyNames(this.backOfficeModel))
  
}



getAllOrders = async (req, res) => {
    try {
      const { genre } = req.query;
      const orders = await this.backOfficeModel.getOrders({ genre });
      return res.json(orders);
    } catch (error:any) {
      console.error("Error en controller getAll:", error);
      return res.status(500).json({
        error: "Error interno",
        message: error.message || "Error al obtener las ordenes",
      });
    }
  };

  getAllUser = async (req, res) => {
    try {
      const { user } = req.query;
      const users = await this.backOfficeModel.getUsers({ users: user });
      if (!users) {
        return res.status(404).json({
          error: "No encontrado",
          message: "Usuario no encontrado",
        });
      }
      return res.json(users)
    } catch (error:any) {
      console.error("Error en controller getAllUser:", error);
      return res.status(500).json({
        error: "Error interno",
        message: error.message || "Error al obtener el usuario",
      });
    }
  }
  
  getAllRoles = async(req, res)=>{
    try {
      const {id} = req.params
      const rolData = await this.backOfficeModel.getRoles({id})
      if(!rolData){
        return res.status(404).json({
          error: "No encontrado",
          message: "Rol no encontrado", 
        })
      }
      return res.json(rolData)
    } catch (error:any) {
      console.error("Error en controller getUser:", error);
      return res.status(500).json({
        error: "Error interno",
        message: error.message || "Error al obtener el usuario",
      })
    }
  }

  getUserById = async(req, res)=>{
    try {
      const {id} = req.params
      const dataId = await  this.backOfficeModel.getUserById({id})
      if(!dataId){
        return res.status(404).json({
          error: "Error interno",
          message: "No existe user con este id"
        })
      }

      return res.json(dataId)
    } catch (error:any) {
      console.error("Error en controller getUser:", error);
      return res.status(501).json({
        error: "Error interno",
        message: error.message || "Error al obtener el usuario",
      })
    }
  }

  createOrder = async (req, res) => {
    //const result = validateMovie(req.body);

    const result = (req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }
    const newOrder = await this.backOfficeModel.createOrder({ input: result.data });

    res.status(201).json(newOrder);
  };

  createUser = async (req, res) => {
    //const result = validateRegistreUser(req.body);
    const result = (req.body);
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }
    const newUser = await this.backOfficeModel.createUser({ input: result.data });

    res.status(201).json(newUser);
  };

  createRol = async (req, res) => {
    //const result = validateRegistreUser(req.body);
    const result = (req.body);
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }
    const newRol = await this.backOfficeModel.createRoles({ input: result.data });

    res.status(201).json(newRol);
  };

}