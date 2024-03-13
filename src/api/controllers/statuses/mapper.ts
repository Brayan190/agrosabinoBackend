import {Status} from '../../interfaces'
import {StatusOuput} from '../../../db/models/Statuses'

export const toStatus = (status: StatusOuput): Status => {
    return {
        id: status.id,
        name: status.name,
        createdAt: status.createdAt,
        updatedAt: status.updatedAt,
        deletedAt: status.deletedAt,
    }
}