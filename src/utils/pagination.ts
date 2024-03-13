export const getPagination = (page:any, perpage:any) => {
    const limit = perpage ? +perpage : 10;
    const offset = page ? (page-1) * limit : 0;

    return { limit, offset };
  };

 export const getPagingData = (data:any, page:number | undefined, limit:number) => {
    console.log(data)
    const { count: totalItems, rows: tutorials } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
  
    return { totalItems, tutorials, totalPages, currentPage };
  };

//   module.exports = {
//   getPagination,
//   getPagingData
// }
