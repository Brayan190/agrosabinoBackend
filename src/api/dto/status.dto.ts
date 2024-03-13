import { Optional } from "sequelize/types"

export type CreateStatusDTO = {
    id: number;
    name: string;
}

export type UpdateStatusDTO = Optional<CreateStatusDTO, 'name'>

export type FilterStatussDTO = {
    isDeleted?: boolean
    includeDeleted?: boolean
}