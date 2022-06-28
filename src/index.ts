import express from 'express'
import { config } from 'dotenv'
import mongoose from "mongoose";
import cors from 'cors'
import router from './routes/routes'
config()
const port = process.env.PORT || 3030;
//const URL: string = mongoURL || ""

const URL: string = process.env.URL || ""

const options: any = {
    //useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
//TO DELETE ON PROD!!!!!!
const testurl: string = "mongodb://localhost:27017/widget"

const app = express()
app.use(express.json())
app.use(express.urlencoded()) // extended = true is the default

app.use(cors())

app.use((err: any, req: any, res: any, next: any) => {
    if (err) {
        res.status(400).send('error parsing data')
    } else {
        next()
    }
})

app.use("/", router)

export default app.listen(port, () => {
    console.log(`Server runs on port ${port}`)
})

mongoose.connect(URL, options);
const connection = mongoose.connection;
connection.on('error', err => console.error('connection error: ', err));
connection.once('open', () => console.log('connected to: ', connection.name))


