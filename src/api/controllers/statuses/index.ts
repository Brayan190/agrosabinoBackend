import * as service from '../../../db/services/statusService'
import {CreateStatusDTO, UpdateStatusDTO, FilterStatussDTO,} from '../../dto/status.dto'
import {Status} from '../../interfaces'
import * as mapper from './mapper'

export const create = async(payload: CreateStatusDTO): Promise<Status> => {
    return mapper.toStatus(await service.create(payload))
}
export const update = async (id: number, payload: UpdateStatusDTO): Promise<Status> => {
    return mapper.toStatus(await service.update(id, payload))
}
export const getById = async (id: number): Promise<Status> => {
    return mapper.toStatus(await service.getById(id))
}
export const deleteById = async(id: number): Promise<Boolean> => {
    const isDeleted = await service.deleteById(id)
    return isDeleted
}
export const getAll = async(filters: FilterStatussDTO): Promise<Status[]> => {
    return (await service.getAll(filters)).map(mapper.toStatus)
}

