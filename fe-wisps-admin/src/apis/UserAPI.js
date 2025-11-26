import { http } from "@/utils";

export function getUsersAPI(){
    return http.get("/users?_expand=role")
}

export function deleteUserAPI(id){
    return http.delete(`/users/${id}`)
}

export function createUserAPI(param){
    return http.post("/users", param)
}

export function getUserAPI(id){
    return http.get(`/users?id=${id}`)
}