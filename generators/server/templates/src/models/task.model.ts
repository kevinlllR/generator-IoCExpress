import * as db from 'mongoose';

let Schema = db.Schema;

let taskSchema = new Schema({
    description: { type: String },
    create_at: { type: Date },
    update_at: { type: Date }
}, {
    versionKey: false
});

export const Task = db.model('task', taskSchema);


