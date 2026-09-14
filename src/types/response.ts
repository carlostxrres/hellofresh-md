type ResponseError = {
    status: "error";
    data: string;
}

type ResponseSuccess<T> = {
    status: "success";
    data: T;
}

export type Response<T> = ResponseError | ResponseSuccess<T>;