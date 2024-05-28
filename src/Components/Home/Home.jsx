import { Outlet } from "react-router-dom";
import { Navbars } from "./Navbars";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    return (
        <div className="container mx-auto">
            <Navbars></Navbars>
            <div className=" min-h-[calc(100vh-224px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Home;