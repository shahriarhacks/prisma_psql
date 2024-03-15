export type ISendResponse<T> = {
  statusCode: number;
  success: boolean;
  message: string | "";
  meta: {
    page: number;
    limit: number;
    skip: number;
    data: number;
    total: number;
  } | null;
  data: T | null;
};
