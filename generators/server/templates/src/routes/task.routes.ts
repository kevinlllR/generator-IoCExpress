


export const taskRouter = (Router, container) => {
console.log('Api router',container)

	const ref=container.cradle.TaskController;
	const taskValidations = container.cradle.taskValidations;

    Router.route('/')
    .get(ref.getTasks.bind(ref))
    .post( ref.createTask.bind(ref))
    
    Router.route('/:_task')
    .put(ref.updateTaskById.bind(ref))
    .delete( ref.deleteTaskById.bind(ref))

	return Router;
}


