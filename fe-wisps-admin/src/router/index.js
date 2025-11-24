import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "@/pages/Login";
import NLayout from "@/pages/Layout";
import Home from "@/pages/Home";
import User from "@/pages/User";
import Role from "@/pages/Permession/Role";
import Permession from "@/pages/Permession/Permession";
import News from "@/pages/News";
import Approve from "@/pages/Approve";
import Publish from "@/pages/Publish";
import NoPermession from "@/pages/403";
import Setting from "@/pages/Setting";


const AdminRouter = ()=>{
    return(
        <HashRouter>
            <Routes>
                <Route path="/login" Component={Login} />
                <Route path="/" element={localStorage.getItem('token') ? <NLayout /> : <Navigate to='/login' />}>
                    {/* 默认重定向到 /home */}
                    <Route index element={<Navigate to="/home" replace />} />
                    <Route path="/home" Component={Home} />
                    {/* 用户管理 */}
                    <Route path="/user/list" Component={User} />
                    {/* 权限管理 */}
                    <Route path="/permession/role/list" Component={Role} />
                    <Route path="/permession/list" Component={Permession} />
                    {/* 新闻管理 */}
                    <Route path="/news" Component={News} />
                    {/* 审核管理 */}
                    <Route path="/approve" Component={Approve} />
                    {/* 发布管理 */}
                    <Route path="/publish" Component={Publish} />
                    {/* 发布管理 */}
                    <Route path="/settine" Component={Setting} />
                    {/* 403 */}
                    {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
                    <Route path="*" Component={NoPermession} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default AdminRouter;