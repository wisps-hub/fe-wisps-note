import { useState } from "react"
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, theme } from 'antd';
const { token: { colorBgContainer } } = theme.useToken();
const { Header } = Layout;

const TopComp = ()=>{

    const [collapsed, setCollapsed] = useState(false)
    
    return (
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
    )
}

export default TopComp