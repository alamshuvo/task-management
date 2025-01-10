import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
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
            id:"alam",
            title:"init frontend",
            description:"Create homePage and routing",
            dueDate:"2025-11",
            isCompleted:false,
            priority:"Low"
        }
    ]
}


const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{
        addTask:(state,action:PayloadAction<ITask>)=>{
            const id = uuidv4()
            const taskData = {
                ...action.payload,
                id,
                isCompleted:false 
            }
            state.task.push(taskData)
        }
    }
})
export const selectTasks = (state:RootState)=>{
    return state.tasks.task
}
export const {addTask} = taskSlice.actions

export default taskSlice.reducer;