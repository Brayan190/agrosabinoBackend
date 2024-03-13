import {Prospecto} from '../../interfaces'
import {ProspectoOuput} from '../../../db/models/Prospectos'

export const toProspecto = (prospecto: ProspectoOuput): Prospecto => {
    return {
        id: prospecto.id,
        nombre: prospecto.nombre,
        primerApellido: prospecto.primerApellido,
        segundoApellido: prospecto.segundoApellido,
        calle: prospecto.calle,
        numero: prospecto.numero,
        colonia: prospecto.colonia,
        codigoPostal: prospecto.codigoPostal,
        telefono: prospecto.telefono,
        rfc: prospecto.rfc,
        statusId: prospecto.statusId,
        observaciones:prospecto.observaciones,
        createdAt: prospecto.createdAt,
        updatedAt: prospecto.updatedAt,
        deletedAt: prospecto.deletedAt,
    }
}