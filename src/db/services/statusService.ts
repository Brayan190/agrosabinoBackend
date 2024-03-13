import * as statusDal from '../dal/statuses'
import {GetAllFilters} from '../dal/types'
import {StatusInput, StatusOuput} from '../models/Statuses'


export const create = (payload: StatusInput): Promise<StatusOuput> => {
    return statusDal.create(payload)
}
export const update = (id: number, payload: Partial<StatusInput>): Promise<StatusOuput> => {
    return statusDal.update(id, payload)
}
export const getById = (id: number): Promise<StatusOuput> => {
    return statusDal.getById(id)
}
export const deleteById = (id: number): Promise<boolean> => {
    return statusDal.deleteById(id)
}
export const getAll = (filters: GetAllFilters): Promise<StatusOuput[]> => {
    return statusDal.getAll(filters)
}


