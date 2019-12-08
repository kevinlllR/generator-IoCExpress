
import {taskRouter} from './task.routes';
import * as express from 'express';


export const apiRouter = (Router, container) => {
	Router.use('/tasks', taskRouter(express.Router(), container));
	return Router;
}


