import {configureStore} from "@reduxjs/toolkit"
import counterReducer from './features/counter/counterSlice'
import taskReducer from '../redux/features/task/taskSlice'
const store = configureStore({
    reducer:{
        counter : counterReducer,
        tasks: taskReducer
    },
    
})
export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch