import {Op} from 'sequelize'
import {Status} from '../models'
import {GetAllFilters} from './types'
import {StatusInput, StatusOuput} from '../models/Statuses'

export const create = async (payload: StatusInput): Promise<StatusOuput> => {
    const status = await Status.create(payload)
    return status
}

export const update = async (id: number, payload: Partial<StatusInput>): Promise<StatusOuput> => {
    const status = await Status.findByPk(id)
    if (!status) {
        // @todo throw custom error
        throw new Error('not found')
    }
    const updatedStatus = await (status as Status).update(payload)
    return updatedStatus
}

export const getById = async (id: number): Promise<StatusOuput> => {
    const status = await Status.findByPk(id)
    if (!status) {
        // @todo throw custom error
        throw new Error('not found')
    }
    return status
}

export const deleteById = async (id: number): Promise<boolean> => {
    const deletedStatusCount = await Status.destroy({
        where: {id}
    })
    return !!deletedStatusCount
}

export const getAll = async (filters?: GetAllFilters): Promise<StatusOuput[]> => {
    const whereClause = filters?.includeDeleted ? { deletedAt: { [Op.not]: null } } : {};
    
    return Status.findAll({
        where: whereClause,
        paranoid: filters?.includeDeleted || false,
    });
};