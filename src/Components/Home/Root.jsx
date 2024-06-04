import { Outlet } from "react-router-dom";
import { Navbars } from "./Navbars";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div className=" bg-blue-100">
            <div className="container mx-auto"> 
            <Navbars></Navbars>
            <div className=" min-h-[calc(100vh-224px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;