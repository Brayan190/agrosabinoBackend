import * as prospectoDal from '../dal/prospectos'
import {GetAllFilters} from '../dal/types'
import {ProspectoInput, ProspectoOuput} from '../models/Prospectos'


export const create = (payload: ProspectoInput): Promise<ProspectoOuput> => {
    return prospectoDal.create(payload)
}
export const update = (id: number, payload: Partial<ProspectoInput>): Promise<ProspectoOuput> => {
    return prospectoDal.update(id, payload)
}
export const getById = (id: number): Promise<ProspectoOuput> => {
    return prospectoDal.getById(id)
}
export const deleteById = (id: number): Promise<boolean> => {
    return prospectoDal.deleteById(id)
}
export const getAll = (filters: GetAllFilters): Promise<ProspectoOuput[]> => {
    return prospectoDal.getAll(filters)
}


