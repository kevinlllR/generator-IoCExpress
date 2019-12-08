import * as fs from 'fs';
import app  from './server';

const expressSwagger = require('express-swagger-generator')(app);

export const options = {
    swaggerDefinition: {
        info: {
            description: 'This is a sample server',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: 'localhost:4301',
        basePath: '/v1',
        produces: [
            "application/json"
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    basedir: __dirname, //app absolute path
    files: ['./src/**/*.ts'] //Path to the API handle folder
};


export function generateSwaggerDoc() {

    return new Promise((resolve,reject)=>{
        const doc = expressSwagger(options)
        const stream = fs.createWriteStream('/docs/api-authentication.json')
        
        stream.on('end', () =>{
            
           resolve()
            

        }
            )
        stream.on('error', () => {
            reject();
        })
    
    
        stream.write(JSON.stringify(doc));
        stream.end();
    

    })

}