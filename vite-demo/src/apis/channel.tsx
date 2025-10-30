import { http } from "../utils";
import type { Result } from "./common";

export type ChannelVo = {
    id : number,
    channelName: string,
    levelCode: number
}

export function fetchChannelsAPI(){
    return http.request<Result<ChannelVo[]>>({
        url: '/api/article/api/v1/channel/channels',
        method: 'GET'
    })
}