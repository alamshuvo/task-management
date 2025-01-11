import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, PayloadAction,nanoid } from "@reduxjs/toolkit";
interface IinitialState {
    task : ITask[];
    filter:string
}

const initialState:IinitialState ={
    task:[
        {
            id:"alam",
            title:"init frontend",
            description:"Create homePage and routing",
            dueDate:"2025-11",
            isCompleted:false,
            priority:"High"
        },
        {
            id:"alama",
            title:"init frontend",
            description:"Create homePage and routing",
            dueDate:"2025-11",
            isCompleted:false,
            priority:"Low"
        }
    ],
    filter:"all"
}

type DraptTask = Pick<ITask,"title"|"description"|"dueDate"|"priority">
const createTask = (taskData:DraptTask):ITask =>{
return {
  id:nanoid(),
  isCompleted:false,
  ...taskData
}
}


const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{
        addTask:(state,action:PayloadAction<DraptTask>)=>{
            const taskData = createTask(action.payload)
            state.task.push(taskData)
        },
        toogleCompleteState:(state,action:PayloadAction<string>)=>{
          
            
        state.task.forEach(task=>task.id === action.payload ? task.isCompleted = !task.isCompleted :task)
        },
        deleteTask:(state,action:PayloadAction<string>)=>{
        state.task= state.task.filter(task=> task.id !== action.payload)
        },
        updateFilter:(state,action:PayloadAction<"All"|"Low"|"Medium"|"High">)=>{
            state.filter = action.payload
        }
    }
})
export const selectTasks = (state:RootState)=>{
    const filter = state.tasks.filter;
    if (filter ==="Low") {
        return state.tasks.task.filter(task=>task.priority === "Low")
    }
    else if (filter ==="Medium") {
        return state.tasks.task.filter(task=>task.priority === "Medium")
    }
    else if (filter ==="High") {
        return state.tasks.task.filter(task=>task.priority === "High")
    }
    else{
        return state.tasks.task
    }
   
}
export const selectFilter = (state:RootState)=>{return state.tasks.filter}
export const {addTask,toogleCompleteState,deleteTask,updateFilter} = taskSlice.actions


export default taskSlice.reducer;