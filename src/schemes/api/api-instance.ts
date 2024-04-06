import axios, { AxiosError, AxiosRequestConfig } from "axios";

export const instance = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true
});

export const create = async <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  const { data } = await instance({
    ...config,
    ...options,
  });
  return data;
};

export type BodyType<Data> = Data;
export type ErrorType<Error> = AxiosError<Error>;
