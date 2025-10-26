import { Layout, Menu, Popconfirm } from "antd";
import './index.scss'
import {
    HomeOutlined,
    FunctionOutlined,
    LogoutOutlined,
    ProjectOutlined
} from '@ant-design/icons'
import { useNavigate, Outlet, useLocation } from "react-router-dom";

const {Header, Sider} = Layout

const items = [
    {
        label: '首页',
        key:'/',
        icon: <HomeOutlined />
    },
    {
        label: '函数学习',
        key:'/func',
        icon: <FunctionOutlined />
    },
    {
        label: 'Zustand',
        key:'/zustand',
        icon: <ProjectOutlined />
    }
]

const GeekLayout = () => {
    const navigate = useNavigate()

    // 点击菜单事件
    const onMenuClick = (route)=>{
        const path = route.key
        navigate(path)
    }

    // 获取当前路径路由
    const location = useLocation()
    const selectedKey = location.pathname

    //获取用户信息
    const nickName = 'admin'

    //执行退出
    const doLogout = () => {
        
    }

    return (
        <Layout>
            <Header className="header">
                <div className="logo"/>
                <div className="user-info">
                    <span className="user-name">{nickName}</span>
                    <span className="user-logout">
                        <Popconfirm title="是否确认退出?" okText="退出" cancelText="取消" onConfirm={doLogout}>
                            <LogoutOutlined /> {/* 退出 */}
                        </Popconfirm>
                    </span>
                </div>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        theme="dark"
                        selectedKeys={selectedKey}
                        onClick={onMenuClick}
                        items={items}
                        style={{height: '100%', borderRight: 0}}></Menu>
                </Sider>
                <Layout className="layout-content" style={{padding: 20}}>
                    {/* 二级路由出口 */}
                    <Outlet />
                </Layout>
            </Layout>
        </Layout>
    )
}

export default GeekLayout