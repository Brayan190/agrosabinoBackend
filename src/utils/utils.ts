import * as service from '../db/services/documentService'
import { getBase64Info } from "@eternaljs/base64-info";
const bcrypt = require("bcryptjs")
const slugify = require('slugify');
const fs = require('fs');

const generarSlug = async (name: string): Promise<string> => {
    return slugify(name, { lower: true });
}
const uploadDocument = async (image: string, name: string, dir: string): Promise<any> => {
    try {
        const date = new Date();
        const randomNumber = Math.floor(Math.random() * 1000000);
        let buffer = Buffer.from(image, 'base64');
        let base64Data = await Promise.resolve(buffer);
        const fileExtension = getBase64Info(image);
        const path_name = await generarSlug(name)
        // console.log(path_name,fileExtension)
        const fileName = `${path_name}_${date.getTime()}_${randomNumber}.${fileExtension.extension}`;
        // console.log(`../../../resources/${dir}/${fileName}`)
        fs.writeFileSync(`resources/${dir}/${fileName}`, base64Data, { encoding: 'base64' });
        return `/resources/${dir}/${fileName}`
    } catch (error) {
        console.log("error", error);
        throw error;
    }

}

export const addDocuments = async (prospectoId: number, documents: any): Promise<any> => {
    documents.forEach(async (document: {file:string, name:string}): Promise<any> => {
        const file: string = await uploadDocument(document.file, document.name, 'documents')
        await service.create({ file: file,name: document.name,prospectoId:prospectoId})
    });
    return {}
}