import { http } from "@/utils";
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

export function getMenusAPI(){
    return http.get("/menus?_embed=subMenus")
}

export function toItem(menu){

    let subMenus = [];

    if(menu.subMenus?.length > 0){
        subMenus = menu.subMenus.map(item=>toItem(item))
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