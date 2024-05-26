import { Outlet } from "react-router-dom";
import { Navbars } from "./Navbars";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Navbars></Navbars>
            <div className=" min-h-[calc(100vh-224px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;