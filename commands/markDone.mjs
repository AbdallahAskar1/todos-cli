import Conf from 'conf';
import chalk from 'chalk';
const data=new Conf({projectName:"todos"});

const markDone = ({tasks})=>{
    let todoList = data.get("todo-list");
    
    if(todoList){
        for(let i=0 ;i<todoList.length;i++){
            console.log(tasks)
            if(tasks){
                if(tasks.includes(i.toString())){
                    todoList[i]['text']+="✅"
                    todoList[i]['done']=true
            }}
            else {
                console.log("y");
                todoList[i]['done']=true
                }  
        
        }
    }
    data.set('todo-list',todoList);
 console.log(chalk.green.bold('tasks have been marked successfully ✅'))
}
export default  markDone;