import {  
    UserOutlined, 
    UserAddOutlined,
    TeamOutlined,
    SettingOutlined,
    EyeOutlined,
    EditOutlined,
    PartitionOutlined,
    HomeOutlined,
    CloudUploadOutlined,
    FileAddOutlined,
    FileDoneOutlined,
    SnippetsOutlined,
    CopyOutlined,
    BarsOutlined,
    ProfileOutlined,
    VerticalAlignTopOutlined,
    VerticalAlignBottomOutlined,
    ApartmentOutlined
} from '@ant-design/icons';

const icons = {
    "/home": <HomeOutlined />,
    "/user": <UserOutlined />,
    "/permession": <EyeOutlined />,
    "/news": <ProfileOutlined />,
    "/approve": <FileDoneOutlined />,
    "/publish": <CloudUploadOutlined />,
    "/setting": <SettingOutlined />,
    "/user/list": <TeamOutlined />,
    "/permession/role/list": <UserAddOutlined />,
    "/permession/list": <ApartmentOutlined />,
    "/news/create": <FileAddOutlined />,
    "/news/list": <SnippetsOutlined />,
    "/news/draft": <EditOutlined />,
    "/news/channel": <PartitionOutlined />,
    "/approve/list": <BarsOutlined />,
    "/publish/list": <CopyOutlined />,
    "/publish/pub": <VerticalAlignTopOutlined />,
    "/publish/unPub": <VerticalAlignBottomOutlined />
}

const MenuUtil = {


    toItem(menu){
    
        let subMenus = [];
    
        if(menu.permChilds?.length > 0){
            subMenus = menu.permChilds.map(item=>this.toItem(item))
        }
    
        return subMenus.length > 0? 
        {
            key: menu.key,
            icon: icons[menu.key],
            label: menu.title,
            children: subMenus
        } : {
            key: menu.key,
            icon: icons[menu.key],
            label: menu.title
        }
    }
}

export default MenuUtil;