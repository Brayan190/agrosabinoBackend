import { Router } from 'express'
import prospectosRouter from './prospectos'
import statusesRouter from './status'

const router = Router()

router.use('/prospectos',prospectosRouter)
router.use('/statuses',statusesRouter)








export default router