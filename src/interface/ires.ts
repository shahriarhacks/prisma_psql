export type ISendResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string | null;
  data?: T | null;
};
