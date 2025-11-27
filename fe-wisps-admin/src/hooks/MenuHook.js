import { getMenuListAPI } from "@/api/MenuAPI"
import { useEffect, useState } from "react"

export function MenuHook() {
     const [menus, setMenus] = useState([])
     
    useEffect( () => {
        const getMenuList =async () =>{
            const res = await getMenuListAPI();
            setMenus(res.data)
        } 
        getMenuList();
    }, [])

    return {menus};
}

