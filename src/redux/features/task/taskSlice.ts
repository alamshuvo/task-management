import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, PayloadAction,nanoid } from "@reduxjs/toolkit";
interface IinitialState {
    task : ITask[];
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
    ]
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
        }
    }
})
export const selectTasks = (state:RootState)=>{
    return state.tasks.task
}
export const {addTask} = taskSlice.actions

export default taskSlice.reducer;