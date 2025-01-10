import { AddTaskModal } from "@/module/tasks/AddTaskModal";
import TaskCard from "@/module/tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";


const Task = () => {

    const tasks =useAppSelector(selectTasks)
    console.log(tasks);
    
    return (
        <div className="max-w-7xl mx-auto mt-8 gap-5 flex flex-col">
            <div className="flex justify-between items-center">
                <h1>Task</h1>
                <AddTaskModal></AddTaskModal>
            </div>
            {
                tasks.map(task=><TaskCard key={task.id} task={task}></TaskCard>)
            }
           
            
        </div>
    );
};

export default Task;