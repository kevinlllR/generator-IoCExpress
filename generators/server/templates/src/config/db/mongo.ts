import * as mongoose from 'mongoose';

export function dbMongo(opt) {
    const op = opt.dbMongoSettings;
    
    return mongoose.connect(op.url);
}
