import { useState } from "react"
import { MenuFoldOutlined, MenuUnfoldOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Layout, theme, Dropdown, Avatar } from 'antd';
import { Link } from "react-router-dom";
const { Header } = Layout;

const items = [
  {
    key: '1',
    label: <Link to='/news'> 个人中心 </Link>,
    disabled: false,
    icon: <UserOutlined />
  },
  {
    key: '2',
    danger: true,
    label: '退出',
    icon: <LogoutOutlined />
  },
];

const TopComp = ()=>{
    const { token: { colorBgContainer } } = theme.useToken();

    const [collapsed, setCollapsed] = useState(false)

    return (
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button type="text" 
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)} 
            style={{ fontSize: '16px', width: 64, height: 64 }} />

          <div style={{float: 'right', marginRight: '20px'}}>
            <Dropdown menu={{ items }}>
                <Avatar icon={<UserOutlined />} />
            </Dropdown>
          </div>
        </Header>
    )
}

export default TopComp