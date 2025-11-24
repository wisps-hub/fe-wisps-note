import { useEffect, useState } from "react"
import { Layout, Menu } from 'antd';
import { getMenusAPI, toItem } from "@/apis/Menu";
import './index.scss'
import { useLocation, useNavigate } from "react-router-dom";

const { Sider } = Layout;

const SideComp = ()=>{

    const [collapsed] = useState(false);
    const path = useLocation();
    const openKey = "/" + path.pathname.split("/")[1]
    const navigate = useNavigate();

    //渲染菜单
    const [menus, setMenus] = useState([])
    useEffect(()=>{
        const getMenus = async ()=>{
            const res = await getMenusAPI();
            if(res?.length > 0){
                setMenus(res.map(item=> toItem(item)))
            }
        }
        getMenus();
    }, [])

    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div style={{display: "flex", height: "100%", flexDirection:"column"}}>
                <div className="logo" >后台管理系统 </div>
                <div style={{flex: 1, overflow:"auto"}}>
                    <Menu theme="dark" 
                    mode="inline" 
                    onClick={(item)=> navigate(item.key)}
                    selectedKeys={[path.pathname]} 
                    defaultOpenKeys={[openKey]}
                    items={menus} />
                </div>
            </div>
            
        </Sider>
    )
}

export default SideComp