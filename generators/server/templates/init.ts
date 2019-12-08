
export async function initDB(init){
    try{
    await init.cradle.dbMongo
    } catch(e){
        console.error("Error mongodb connection",e);
    }
 
 }