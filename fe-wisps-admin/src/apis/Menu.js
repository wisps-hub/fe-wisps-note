import { http } from "@/utils";

export function getMenusAPI(){
    return http.get("/perms?_embed=permChilds")
}