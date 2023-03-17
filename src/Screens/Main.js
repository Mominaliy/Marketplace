import NavBar from "../Components/NavBar";
import Explore from "./Explore";

function Main(){
    return(
        <div className="bg-gradient-to-t from-blue-100 via-blue-300 to-blue-500">
            <NavBar></NavBar>
            <div className="flex min-h-screen">
                <Explore></Explore>
            </div>
        </div>
    )
}

export default Main;