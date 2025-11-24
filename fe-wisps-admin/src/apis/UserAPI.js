import { http } from "@/utils";

export function getUsersAPI(){
    return http.get("/users?_expand=role")
}