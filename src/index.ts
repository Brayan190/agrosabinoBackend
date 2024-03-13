import express, { Application, Request, Response } from 'express'
import routes from './api/routes'
import dbInit from './db/init'
const cors = require('cors');
dbInit()

const app: Application = express()
const port = 4000

// Body parsing Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({limit: '50mb', extended: true }));
app.get('/', async(req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({ message: `Welcome to the agrosabino API! \n Endpoints available at http://localhost:${port}/api/v1` })
})
app.use('/api/v1', routes)
app.use('/resources', express.static('./resources'));

try {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`)
    })
} catch (error:any) {
    console.log(`Error occurred: ${error.message}`)
}