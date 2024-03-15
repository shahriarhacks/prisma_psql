import { Response } from "express";
import { ISendResponse } from "../interface/ires";

const sndres = <T>(res: Response, data: ISendResponse<T>): void => {
  const resData: ISendResponse<T> = {
    statusCode: data?.statusCode,
    success: data?.success,
    message: data?.message || null,
    data: data?.data || null,
  };
  res.status(data.statusCode).json(resData);
};

export default sndres;
