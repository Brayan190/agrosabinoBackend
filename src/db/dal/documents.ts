import {Op} from 'sequelize'
import {Document} from '../models'
import {GetAllFilters} from './types'
import {DocumentInput, DocumentOuput} from '../models/Documents'

export const create = async (payload: DocumentInput): Promise<DocumentOuput> => {
    const document = await Document.create(payload)
    return document
}

export const update = async (id: number, payload: Partial<DocumentInput>): Promise<DocumentOuput> => {
    const document = await Document.findByPk(id)
    if (!document) {
        // @todo throw custom error
        throw new Error('not found')
    }
    const updatedDocument = await (document as Document).update(payload)
    return updatedDocument
}

export const getById = async (id: number): Promise<DocumentOuput> => {
    const document = await Document.findByPk(id)
    if (!document) {
        // @todo throw custom error
        throw new Error('not found')
    }
    return document
}

export const deleteById = async (id: number): Promise<boolean> => {
    const deletedDocumentCount = await Document.destroy({
        where: {id}
    })
    return !!deletedDocumentCount
}

export const getAll = async (filters?: GetAllFilters): Promise<DocumentOuput[]> => {
    const whereClause = filters?.includeDeleted ? { deletedAt: { [Op.not]: null } } : {};
    
    return Document.findAll({
        where: whereClause,
        paranoid: filters?.includeDeleted || false,
    });
};