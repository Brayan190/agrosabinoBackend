import * as documentDal from '../dal/documents'
import {GetAllFilters} from '../dal/types'
import {DocumentInput, DocumentOuput} from '../models/Documents'


export const create = (payload: DocumentInput): Promise<DocumentOuput> => {
    return documentDal.create(payload)
}
export const update = (id: number, payload: Partial<DocumentInput>): Promise<DocumentOuput> => {
    return documentDal.update(id, payload)
}
export const getById = (id: number): Promise<DocumentOuput> => {
    return documentDal.getById(id)
}
export const deleteById = (id: number): Promise<boolean> => {
    return documentDal.deleteById(id)
}
export const getAll = (filters: GetAllFilters): Promise<DocumentOuput[]> => {
    return documentDal.getAll(filters)
}


