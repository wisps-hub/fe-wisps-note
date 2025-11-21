import { Outlet } from "react-router-dom"
import { Layout, theme } from 'antd';
import SideComp from "@/components/SideComp"
import TopComp from "@/components/TopComp"

const NLayout = ()=>{

    const { Content } = Layout;
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <SideComp />
            <Layout>
                <TopComp />
                <Content style={{margin: '24px 16px', padding: 24, minHeight: 280, background: colorBgContainer, borderRadius: borderRadiusLG}} >
                    <main> 
                        <Outlet /> 
                    </main>
                </Content>
            </Layout>
        </Layout>
    )
}

export default NLayout