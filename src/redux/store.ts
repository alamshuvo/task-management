import {configureStore} from "@reduxjs/toolkit"
import counterReducer from './features/counter/counterSlice'
import taskReducer from '../redux/features/task/taskSlice'
import userReducer from '../redux/features/users/userSlice'

const store = configureStore({
    reducer:{
        counter : counterReducer,
        tasks: taskReducer,
        user: userReducer
       
      
    },
    
})
export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch