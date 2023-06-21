import Conf from 'conf';
import chalk from 'chalk';
const data=new Conf({projectName:"todos"});

function list() {
	const todoList = data.get('todo-list')

	if(todoList && todoList.length){
		todoList.forEach((task,index)=>{
			task.done?
			console.log(chalk.greenBright(`[${index}] ${task.text}`)):
			console.log(chalk.yellowBright(`[${index}] ${task.text}`));

		});
	}else {
		console.log(chalk.red.bold("you don't have any tasks yet"));
	}
}
export default list;

