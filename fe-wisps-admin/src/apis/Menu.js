import { http } from "@/utils";

export function getMenusAPI(){
    return http.get("/menus?_embed=subMenus")
}