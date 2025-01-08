import { AxiosRequestConfig } from 'axios';
import { APIResponse, AxiosErrorType, MovieResponse } from '../types';
import getInstance from './axios';

const getRequest = async<T>(
  url : string,
  config? : AxiosRequestConfig,
):Promise<APIResponse<T>> => {
  const axiosInstance = getInstance();

  try {
    const response = await axiosInstance.get<T>(url, config);
    return { data: response.data };
  } catch (err) {
    const error = err as AxiosErrorType;
    const status = error.response?.status;
    const details = error.response?.data;
    return {error: {message: `Failed to fetch data from ${url}`, status, details, name: ""}};
  }
}

export const getMovies = async (
  endpoint : string,
):Promise<APIResponse<MovieResponse>> => {
  const config: AxiosRequestConfig = {
    params: {
      api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
      sort_by: "vote_average.desc",
      page: 1,
    }
  }
  return await getRequest<MovieResponse>(endpoint, config);
}