import axios, { AxiosInstance } from "axios";

const getInstance = ():AxiosInstance => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  })
}

export default getInstance