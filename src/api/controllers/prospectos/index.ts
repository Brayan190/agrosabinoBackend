import * as service from '../../../db/services/prospectoService'
import { addDocuments } from '../../../utils/utils'
import { CreateProspectoDTO, UpdateProspectoDTO, FilterProspectosDTO, } from '../../dto/prospecto.dto'
import { Prospecto } from '../../interfaces'
import * as mapper from './mapper'

export const create = async (payload: CreateProspectoDTO): Promise<any> => {
    payload.statusId = 1
    const result = mapper.toProspecto(await service.create(payload))
    await addDocuments(result.id, payload.documents,)
    return result

}
export const update = async (id: number, payload: UpdateProspectoDTO): Promise<Prospecto> => {
    return mapper.toProspecto(await service.update(id, payload))
}
export const getById = async (id: number): Promise<Prospecto> => {
    return await service.getById(id)
}
export const deleteById = async (id: number): Promise<Boolean> => {
    const isDeleted = await service.deleteById(id)
    return isDeleted
}
export const getAll = async (filters: FilterProspectosDTO): Promise<Prospecto[]> => {
    return (await service.getAll(filters))
}

