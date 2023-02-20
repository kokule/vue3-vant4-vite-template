import request from "@/utils/http/request";

type ListResult = {
  code: number;
  message: string;
  list: Array<any>;
};

export function getListApi(params?: object): Promise<ListResult> {
  return request({
    url: "/list/get",
    method: "get",
    params
  });
}

export function getListApiError(data?: object): Promise<ListResult> {
  return request({
    url: "/list/error",
    method: "post",
    data
  });
}
