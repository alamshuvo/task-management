import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddTaskModal } from "@/module/tasks/AddTaskModal";
import TaskCard from "@/module/tasks/TaskCard";
import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";


const Task = () => {
  const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();
  console.log(tasks);

  return (
    <div className="max-w-7xl mx-auto mt-8 gap-5 flex flex-col">
      <div className="flex justify-end items-center gap-6">
        <h1 className="mr-auto">Task</h1>
        <Tabs defaultValue="All">
        <TabsList className="grid w-full grid-cols-4 gap-2 bg-orange-300 text-white">
        <TabsTrigger onClick={()=>dispatch(updateFilter("All"))} value="All">All</TabsTrigger> 
         <TabsTrigger onClick={()=>dispatch(updateFilter("Low"))}  value="Low">Low</TabsTrigger>
          <TabsTrigger onClick={()=>dispatch(updateFilter("Medium"))}  value="Medium">Medium</TabsTrigger>
          <TabsTrigger onClick={()=>dispatch(updateFilter("High"))}  value="High">High</TabsTrigger>
        </TabsList>
        </Tabs>
        <div><AddTaskModal></AddTaskModal></div>
      </div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}></TaskCard>
      ))}
    </div>
  );
};

export default Task;
