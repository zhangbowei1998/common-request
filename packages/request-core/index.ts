import { Requestor } from "./index.type";

let req: Requestor;

// 注册请求
export function registerRequest(requestor: Requestor) {
    req = requestor;
}

export function useRequestor() {
    return req;
}

// 可重试的请求
