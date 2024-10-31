import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class HttpService {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
    });
  }

  async create<T>(
    url: string,
    data: T,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    const source = axios.CancelToken.source();
    const newConfig: AxiosRequestConfig = {
      ...config,
      cancelToken: source.token,
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await this.axiosInstance.post<T>(url, data, newConfig);
      return response;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled', error.message); // eslint-disable-line no-console
      }
      throw error;
    }
  }

  async read<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    const source = axios.CancelToken.source();
    const newConfig: AxiosRequestConfig = {
      ...config,
      cancelToken: source.token,
    };

    try {
      const response = await this.axiosInstance.get<T>(url, newConfig);

      return response;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled', error.message); // eslint-disable-line no-console
      }
      throw error;
    }
  }
}

export default HttpService;
