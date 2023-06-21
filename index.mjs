#! node
import {program} from 'commander';
import list from './commands/list.mjs';
import add from './commands/add.mjs';
import markDone from './commands/markDone.mjs';
import removeTask from './commands/removeTask.mjs';

program.command('list')
	.description("print list of all TODO tasks")
	.action(list)

program.command('add <task>')
	    .description('add a new todo task')
	    .action(add);

program.command("mark-done")
		.description('mark tasks [task] done')
		.option('-t,--tasks <tasks...>','The tasks to mark done. If not specified, all tasks will be marked done.')
		.action(markDone)

program.command("delete")
	.description('delete [task]s')
	.option('-t,--taskIds <taskIds...>','delete task . If not specified, all tasks will be deleted.')
	.action(removeTask)
program.parse();

