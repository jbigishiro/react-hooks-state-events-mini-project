import React, {useState} from "react";
import Task from "./Task"
import { TASKS } from "../data";

function TaskList() {
  const [tasks, setTasks]=useState(TASKS)

function handleDeleteClick(taskId){
  setTasks(tasks.filter(t=>t.text!==taskId )
  )
}

return (
    <div className="tasks">
   <ul>
    {tasks.map(task=>(
      < Task category={task.category} text={task.text}
      onDelete={handleDeleteClick} />
    ))
    }
   </ul>
    </div>
  );
}

export default TaskList;
