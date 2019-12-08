import * as fs from 'fs';
import * as express from 'express';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import * as swaggerUI from 'swagger-ui-express';
const expressValidation: any = require('express-validation');
expressValidation.options({
    allowUnknownBody: false,
    allowUnknownHeaders: false,
    allowUnknownParams: false,
    allowUnknownQuery: false
});
dotenv.config({ path: './config/env/env' })


import { init } from './src/config';
import { options} from './swagger';
import { apiRouter } from './src/routes';
import { initDB } from './init';

const app = express();
const expressSwagger = require('express-swagger-generator')(app);

//Llamar a las rutas

initModules();
initDB(init);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//const authRef = init.cradle.AuthController;
app.use('/api', apiRouter(express.Router(), init));



// catch 404 and forward/ to error handler
app.use(function (req, res, next) {
    var err: any = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    console.log(err.errors);
    // render the error page
    res.status(err.status || 500);
    res.send(err);
});


export default app;



function generateSwaggerDoc() {


    const doc = expressSwagger(options)
    const stream = fs.createWriteStream(__dirname + '/docs/api-task.json')

    stream.on('end', () => {
    })
    stream.on('error', (e) => {
    })
    stream.write(JSON.stringify(doc));
    stream.end();

    return doc;
}
async function initModules() {
    switch (process.env.NODE_ENV) {
        case 'production': {
            app.use(logger('combined'))
            break;
        }
        case 'test': {
            app.use(logger('dev'));
            break;
        }
        default: {

            app.use(logger('dev'))
            app.use(cookieParser());

            try {
                const docs = generateSwaggerDoc()
                //const apiDocs = require('./docs/api-authentication.json');
                app.use('/v1/api-docs', swaggerUI.serve, swaggerUI.setup(docs));
            }
            catch (e) {
                console.error('Error err', e);
            }
            break;
        }
    }
}

