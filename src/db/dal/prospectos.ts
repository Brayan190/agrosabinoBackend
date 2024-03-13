import {Op} from 'sequelize'
import {Document, Prospecto, Status} from '../models'
import {GetAllFilters} from './types'
import {ProspectoInput, ProspectoOuput} from '../models/Prospectos'

export const create = async (payload: ProspectoInput): Promise<ProspectoOuput> => {
    const prospecto = await Prospecto.create(payload)
    return prospecto
}

export const update = async (id: number, payload: Partial<ProspectoInput>): Promise<ProspectoOuput> => {
    const prospecto = await Prospecto.findByPk(id)
    if (!prospecto) {
        // @todo throw custom error
        throw new Error('not found')
    }
    const updatedProspecto = await (prospecto as Prospecto).update({statusId:payload.statusId,observaciones:payload.observaciones})
    return updatedProspecto
}

export const getById = async (id: number): Promise<ProspectoOuput> => {
    const prospecto = await Prospecto.findByPk(id,{
        attributes:["id","nombre","primerApellido","segundoApellido","calle","numero",
        "colonia","codigoPostal", "telefono","rfc","statusId","observaciones",],
        include:[
            {
                model: Document,
                as: 'documents',
                attributes: ["id","name","file"],
                required: true
            },
            {
                model: Status,
                as: 'status',
                attributes: ["id","name"]
            }
        ]
    })
    if (!prospecto) {
        // @todo throw custom error
        throw new Error('not found')
    }
    return prospecto
}

export const deleteById = async (id: number): Promise<boolean> => {
    const deletedProspectoCount = await Prospecto.destroy({
        where: {id}
    })
    return !!deletedProspectoCount
}

export const getAll = async (filters?: GetAllFilters): Promise<ProspectoOuput[]> => {
    const whereClause = filters?.includeDeleted ? { deletedAt: { [Op.not]: null } } : {};
    
    return Prospecto.findAll({attributes:["id","nombre","primerApellido","segundoApellido"],
        where: whereClause,
        include:[
            {
                model: Status,
                as: 'status',
                attributes: ["name"]
            }
        ],
        paranoid: filters?.includeDeleted || false,
    });
};

