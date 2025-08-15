import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv"

dotenv.config()



// Inicializa el cliente de Supabase con mejor manejo de errores
const supabaseUrl =
  process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Las variables de entorno de Supabase no están configuradas correctamente"
  );
}

let supabase = createClient(supabaseUrl, supabaseKey);

// Función para reiniciar el cliente de Supabase
const resetSupabaseClient = () => {
  supabase = createClient(supabaseUrl, supabaseKey);
};


export class BOModel{
    async getOrders (){
        try {
            let query = supabase.from("orders").select("*");
            
            const {data, error} = await query
            if(error) throw error

            return data
        } catch (error) {
            console.log("Error al ejecutar getOrders", error)
            throw new Error ("No se pudieron obtener las ordenes")
        }
    }

    async getRoles(){
        try {
            let query = supabase.from("roles").select("*")
            const {data, error} = await query
            if(error) throw error

            return data

        } catch (error) {
            console.log("Error al ejecutar getRoles", error)
            throw new Error("No se puedieron obtener los roles")
        }
    }

    async getUsers(){
        try {
            let query = supabase.from("users").select("*")
            const {data, error} = await query
            if(error) throw error
            return data
        } catch (error) {
            console.log("Error al ejecutar getUsers", error)
            throw new Error ("No se ha podido encontrar los users")
        }
    }

    async getOrdersState(){
        try {
            let query = supabase.from("orders_states").select("*")
            
            const {data, error} = await query
            if(error) throw error

            return data
        } catch (error) {
            console.log("Error al ejecutar getUser", error)
            throw new Error ("No se ha podido encontrar los users")
        }
    }

    async getUserById({id}){
      try {
          const {data, error} = await supabase
          .from("users")
          .select("*")
          .eq("id", id)
          if(error) throw error

          return data
      } catch (error) {
          console.log("No se pudo ejecutar getUser ", error)
          throw new Error ("Erro al buscar el user")
      }
  }

    async getOrdersById({id}){
        try {
            const {data, error} = await supabase
            .from("orders")
            .select("*")
            .eq("id", id)
            if(error) throw error

            return data
        } catch (error) {
            console.log("No se pudo ejecutar getOrdersById ", error)
            throw new Error ("Erro al buscar la comanda")
        }
    }

    static async getOrdersStatesById({id}){
        try {
            const {data, error} = await supabase
            .from("order_states")
            .select("*")
            .eq("id", id)
            if(error) throw error

            return data
        } catch (error) {
            console.log("No se pudo ejecutar getOrdersStatesById ", error)
            throw new Error ("Erro al buscar el estado de la comanda")
        }
    }


    //Crear una orden
    async createOrder(input) {
        const { descripcion, comensales, tiempo_estimado_preparacion, jefe_cocina_id } = input;
        try {
          const { data, error } = await supabase
            .from("orders")
            .insert([{ descripcion, comensales, tiempo_estimado_preparacion, jefe_cocina_id }])
            .select();
          if (error) throw error;
          return data[0];
        } catch (error) {
          console.error("Error en createOrder:", error);
          throw new Error("No se pudo crear la orden");
        }
      }
    
      //Crear user 
      static async createUser({ input }) {
        const {orderState} = input;
        try {
            const {data, error} = await supabase
            .from("users")
            .insert([{nombre: orderState}])
            .select();
            if(error) throw error;
            return data[0];
        } catch (error) {
            console.error("Error en createUser:", error);
            throw new Error("No se pudo crear el user");
        }
      }

      //Crear roles
      static async createRoles({input}){
        const {nombre} = input;

        try {
            const {data, error} = await supabase
            .from("roles")
            .insert([{nombre: nombre}])
            .select()
            if(error) throw new Error
            return data[0]
        } catch (error) {
            console.error("Error en createRoles:", error);
            throw new Error("No se pudo crear el rol");
        }

    }


    // Método para verificar la conexión
  static async checkConnection() {
    try {
      const { data, error } = await supabase
        .from("orders")
        .select("id")
        .limit(1);
      if (error) {
        console.error("Error de conexión:", error);
        resetSupabaseClient();
        return false;
      }
      return true;
    } catch (error) {
      console.error("Error al verificar conexión:", error);
      resetSupabaseClient();
      return false;
    }
  }


}