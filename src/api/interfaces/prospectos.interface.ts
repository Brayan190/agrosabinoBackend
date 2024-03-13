export interface Prospecto {
  id: number;
  nombre: string;
  primerApellido: string;
  segundoApellido: string;
  calle: string;
  numero: number;
  colonia: string;
  codigoPostal: string;
  telefono: string;
  rfc: string;
  statusId: number;
  observaciones:string;
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}