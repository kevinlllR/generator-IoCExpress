
import * as awilix from 'awilix';
//Se importan todos los servicios ,modelos , clases, etc Ioc Pattern
export function initDI({settings,db,models,controllers,validations}){
const container=awilix.createContainer({
    injectionMode:awilix.InjectionMode.PROXY
})

//values
container.register(
    Object.assign({},transformAwilix(settings),transformAwilix(models,1),transformAwilix(validations))
)
//functions
container.register(
    Object.assign({},transformAwilix(db))
)
//class
container.register(
    Object.assign({},transformAwilix(controllers,3))
)

return container;
}

function transformAwilix(items,number=0){

            Object.keys(items).forEach((key)=>{
                

                switch(typeof items[key]){

                    case 'object':{
                        items[key]=awilix.asValue(items[key])

                        break;
                    };
                    case 'function':{
                        if(number==3){
                      //      console.log('Is object',items[key],'class')
                            items[key]=awilix.asClass(items[key])
                        }
                        else if(number===1){
                            items[key]=awilix.asValue(items[key])
                        }
                        else{
                            items[key]=awilix.asFunction(items[key])
                        }

                        break;
                    };
                    default:{
                            items[key]=awilix.asValue(items[key])
                        
                        break;
                    }
                }
                
                
            })

    return items;
}