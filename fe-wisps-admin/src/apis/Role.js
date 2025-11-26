import { http } from "@/utils";

export function getRolesAPI(){
    return http.get("/roles")
}

export function getRoleAPI(id){
    return http.get(`/roles/${id}`)
}