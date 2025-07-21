import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { BOModel } from './models/supabase/backOffice'
import { createBORouter } from './routes/ordersRoutes'

const boModel = new BOModel();

export function createApp({ backOfficeModel }: { backOfficeModel: BOModel }){

    

    const app = express()

    app.use(cors({origin:"*"}))
    app.use(express.json())
    app.disable("x-powered-by");

    app.use("/", createBORouter({ backOfficeModel }))

    const PORT = process.env.PORT || 3500

    //app.listen(PORT, ()=> console.log(`Llamando desde el puerto ${PORT}`))

    return app
}

const app = createApp({ backOfficeModel: boModel })
export default app
