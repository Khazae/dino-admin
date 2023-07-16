import axios, { AxiosInstance } from "axios";
import { getApiConfig } from "../config/api.config";
import { HttpError } from "../common/errors/HttpError";

interface ApiConfig {
  apiUrl: string;
}

const apiConfig: ApiConfig = getApiConfig();

const instance: AxiosInstance = axios.create({
  baseURL: apiConfig.apiUrl,
});

instance.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    config.headers["Accept"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;

    const customError = new HttpError({
      status: response?.status || null,
      message: response?.data?.message,
    });

    return Promise.reject(customError);
  }
);

export default instance;
