import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "@/pages/Login";
import News from "@/pages/News";


const AdminRouter = ()=>{
    return(
        <HashRouter>
            <Routes>
                <Route path="/login" Component={Login} />
                <Route path="/" element={localStorage.getItem('token') ? <News /> : <Navigate to='/login' />} />
            </Routes>
        </HashRouter>
    )
}

export default AdminRouter;