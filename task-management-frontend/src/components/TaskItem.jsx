import React from "react";

const TaskItem=({task,onDelete})=>(
    <div className="flex justify-between items-center p-4 bg-white shadow mb-2">
        <span>{task.description}</span>
            <button className="text-red-500" onClick={()=>onDelete(task.id)} >
                Delete
            </button>
    </div>
);
export default TaskItem;