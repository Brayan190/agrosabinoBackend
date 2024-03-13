
import { Router, Request, Response } from 'express'
import * as prospectoController from '../controllers/prospectos'
import { CreateProspectoDTO, FilterProspectosDTO, UpdateProspectoDTO } from '../dto/prospecto.dto'

const prospectosRouter = Router()

prospectosRouter.get('/:id', async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const result = await prospectoController.getById(id)
        return res.status(200).send(result)
    } catch (err: any) {
        return res.status(401).json({ message: err.message });
    }

})

prospectosRouter.put('/:id', async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const payload: UpdateProspectoDTO = req.body


        const result = await prospectoController.update(id, payload)

        return res.status(201).send(result)
    } catch (err: any) {
        return res.status(404).json({ message: err.message });
    }
})

prospectosRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)

        const result = await prospectoController.deleteById(id)
        return res.status(204).send({
            success: result
        })
    } catch (err: any) {
        return res.status(500).json({ message: err.message });
    }
})

prospectosRouter.post('/', async (req: Request, res: Response) => {
    try {
        const payload: CreateProspectoDTO = req.body
        if (!payload.documents || payload.documents.length == 0) throw new Error("debe existir documentos adjuntos")
        const result = await prospectoController.create(payload)

        return res.status(200).send(result)
    } catch (err: any) {
        return res.status(400).json({ message: err.message });
    }
})

prospectosRouter.get('/', async (req: Request, res: Response) => {
    try {
        const filters: FilterProspectosDTO = req.query
        const results = await prospectoController.getAll(filters)
        return res.status(200).send(results)
    } catch (err: any) {
        return res.status(401).json({ message: err.message });
    }
})
export default prospectosRouter 