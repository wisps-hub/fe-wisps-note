import { http } from "@/utils";
import type { PageResult, Result } from "./common";

export type ArticleReq = {
    id : number,
    title: string,
    channelId : number,
    content : string,
    cover : AttachReq
}

export type AttachReq = {
    type : number,
    images : []
}

//发布文章
export function createArticleAPI(data : ArticleReq){
    return http.request<Result<boolean>>({
        url: "/api/article/api/v1/article/save",
        method: "POST",
        data
    })
}

export type PageQueryReq = {
    status : number,
    channelId : number,
    beginPubDate : string,
    endPubDate : string,
    uid : number
}

export type ArticleVo = {
    id : number,
    title : string,
    content : string,
    channelId : number,
    coverType : number,
    images : string,
    status : number,
    pubTime : string,
    readCount : number,
    commentCount : number,
    likeCount : number
}

//获取文章列表
export function getArticleListAPI(data : PageQueryReq){
    return http.request<PageResult<ArticleVo[]>>({
        url: "/api/article/api/v1/article/pageQuery",
        method: "POST",
        data
    })
}

//删除文章
export function deleteArticleAPI(id : number){
    return http.request<Result<boolean>>({
        url: `/api/article/api/v1/article/delete/${id}`,
        method: "DELETE"
    })
}

//获取文章
export function getArticleAPI(id : number){
    return http.request<Result<ArticleVo>>({
        url: `/api/article/api/v1/article/${id}`,
        method: "GET"
    })
}