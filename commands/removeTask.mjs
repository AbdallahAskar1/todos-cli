import Conf from 'conf';
import chalk from 'chalk';
const data=new Conf({projectName:"todos"});

const removeTask = ({taskIds}) => {
    let todoList = data.get("todo-list");
    if (todoList) {
        for(let i=0;i<todoList.length;i++){
            if(taskIds.includes(i.toString())){
                todoList.splice(i,1);
        }

        if(!taskIds){
            data.set("todo-list",[]);
        }
    }   
        data.set("todo-list",todoList)
        console.log(chalk.bold.green("task deleted <>"))
            
    }else{
        console.log(chalk.bold.red("you don't have any task yet!"))
    }

};


export default removeTask;