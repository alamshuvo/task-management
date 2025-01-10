import Logo from "@/assets/Logo";
import { Link } from "react-router-dom";
import { ModeToggle } from "../mode.toogle";


const Navbar = () => {
    return (
        <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5 ">
            <div className="flex items-center">
            <Logo></Logo><span className="font-bold ml-2">Task</span>
               
            </div>
            <Link to={"/"}>Task</Link>
            <Link to={"/users"}>User</Link>
            <div className="ml-auto">
                <ModeToggle></ModeToggle>
            </div>
        </nav>
    );
};

export default Navbar;