export interface RequestOptions {
    headers?: Record<string, string>
    body?: string

}

// 接口定义
export interface Requestor {
    get(url: string, options:RequestOptions): Promise<Response>;
    post(url: string, options:RequestOptions): Promise<Response>;
    put(url: string, options:RequestOptions): Promise<Response>;
    delete(url: string, options:RequestOptions): Promise<Response>;
    head(url: string, options:RequestOptions): Promise<Response>;
    options(url: string, options:RequestOptions): Promise<Response>;
    patch(url: string, options:RequestOptions): Promise<Response>;
}