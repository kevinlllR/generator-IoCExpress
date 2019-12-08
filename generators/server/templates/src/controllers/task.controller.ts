import * as moment from 'moment';

export class TaskController {
    Task: any;

    constructor(opts) {
        this.Task = opts.Task;
    }

    async createTask(req, res) {
        let data = Object.assign(req.body);
        data.create_at = moment.utc();
        try {
            let tasks = await this.Task.findOne({ typename: data.typename })
            if (tasks) {
                res.status(409).send()
            } else {
                let tasks = await this.Task.create(data);
                res.status(200).send({ data: tasks })
            }
        } catch (e) {
            res.status(400).send({ error: e.toString() })
        }
    }

    async getTasks(req, res) {
        try {
            let abilities = await this.Task.find({})
            res.status(200).send({ data: abilities });
        } catch (e) {
            res.status(400).send({ error: e.toString() })
        }
    }

    async deleteTaskById(req, res, next) {

        let _task = req.params._task;
        try {
            await this.Task.deleteOne({ _id: _task });
            res.status(204).send({})
        } catch (e) {
            res.status(400).send({ error: e.toString() });
        }
    }

    async updateTaskById(req, res, next) {
        let _task = req.params._task;
        let data: any = Object.assign(req.body);
        data.update_at = moment.utc();
        try {
            let task = await this.Task.findById(_task);
            if (task) {

                const task = await this.Task.findByIdAndUpdate(_task, { "$set": data }, { new: true })
                res.status(200).send({ data: task });

            } else {
                res.status(404).send({});
            }
        } catch (e) {

            res.status(400).send({ error: e.toString() });
        }
    }
}
