import Conf from 'conf';
import chalk from 'chalk';

const data = new Conf({projectName:"todos"})
const add = (task)=>{
    
    let todoList = data.get("todo-list");

    if (!todoList) {

        todoList = []
    }
    todoList.push({
        text:task,
        done:false
    })
    data.set('todo-list', todoList)

    console.log(chalk.green.bold('task has been added successfully🎉'));

}
export default add;