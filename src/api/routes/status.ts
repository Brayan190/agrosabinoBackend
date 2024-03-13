import { Router, Request, Response} from 'express'
import * as statusController from '../controllers/statuses'
import {CreateStatusDTO, FilterStatussDTO, UpdateStatusDTO} from '../dto/status.dto'

const statusesRouter = Router()

statusesRouter.get('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    const result = await statusController.getById(id)
    return res.status(200).send(result)
})

statusesRouter.put('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const payload:UpdateStatusDTO = req.body
    
    const result = await statusController.update(id, payload)
    return res.status(201).send(result)
})

statusesRouter.delete('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    
    const result = await statusController.deleteById(id)
    return res.status(204).send({
        success: result
    })
})

statusesRouter.post('/', async (req: Request, res: Response) => {
    const payload:CreateStatusDTO = req.body

    const result = await statusController.create(payload)
    return res.status(200).send(result)
})

statusesRouter.get('/', async (req: Request, res: Response) => {
    const filters:FilterStatussDTO = req.query

    const results = await statusController.getAll(filters)
    return res.status(200).send(results)
})

export default statusesRouter