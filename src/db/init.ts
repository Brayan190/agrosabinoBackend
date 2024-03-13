require('dotenv').config()
import {  Prospecto,Document,Status} from './models'
const isDev = process.env.NODE_ENV === 'development'
const wait = (ms:any) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
 
const dbInit = async() => {
  try {
    await Document.sync({ alter: isDev });
    await Status.sync({ alter: isDev });
    await Prospecto.sync({ alter: isDev });
  } catch (error:any) {
    if (error.code === 'ER_LOCK_DEADLOCK') {
      console.log('Se encontró un deadlock. Reintentando la sincronización de tablas...');
      await wait(1000); // Esperar 1 segundo (ajusta este valor según sea necesario)
      await dbInit(); // Volver a intentar la sincronización de las tablas
    } else {
      console.error('Error durante la sincronización de tablas:', error);
    }
  }
 

  
}
export default dbInit 