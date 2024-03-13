import { Optional } from "sequelize/types"

export type CreateProspectoDTO = {
    id: number;
    nombre: string;
    primerApellido: string;
    segundoApellido: string;
    calle: string;
    numero:number;
    colonia: string;
    codigoPostal:string;
    telefono:string;
    rfc:string;
    statusId:number;
    observaciones:string;
    documents:any
}

export type UpdateProspectoDTO = Optional<CreateProspectoDTO, 'nombre'>

export type FilterProspectosDTO = {
    isDeleted?: boolean
    includeDeleted?: boolean
}