export type Result<T> = {
    code: number,
    success: boolean,
    msg: string,
    data: T
} 

export type PageResult<T> = {
    code: number,
    success: boolean,
    msg: string,
    data: T,
    total: number,
    page: number,
    size: number
}