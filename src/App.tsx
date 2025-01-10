import { decrement, increment, reset } from "./redux/features/counter/counterSlice";
import { RootState } from "./redux/store";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { Button } from "./components/ui/button";
import './index.css';
import Navbar from "./components/layout/Navbar";
import { Outlet } from "react-router-dom";


function App() {
//   const dispatch = useAppDispatch();
//  const {count }= useAppSelector((state:RootState)=>state.counter)

 
//   const handleIncrement = (amount:number)=>{
//     dispatch(increment(amount))
//   }
// const handleDecrement =(amount:number)=>{
//   dispatch(decrement(amount))
// }
// const hadleReset = ()=>{
//   dispatch(reset())
// }
  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet></Outlet>
     
    </div>
  )
}

export default App
