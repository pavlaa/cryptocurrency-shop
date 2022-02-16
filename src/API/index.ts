import axios, {AxiosResponse} from 'axios';
import {AuthResponse, ICoin} from "../types";


const API_URL = 'http://localhost:7000/';

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true
})

instance.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
  }
})

export const AuthAPI = {
  login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return instance.post<AuthResponse>(`/login`, {email, password})
  },
  registration(email: string, password: string, name:string, photo: string): Promise<AxiosResponse<AuthResponse>> {
    return instance.post<AuthResponse>(`/register`, {email, password, name, photo})
  },
  logout(): Promise<void> {
    return instance.post(`/login`)
  }
}

export const CoinsAPI = {
  getCoins(): Promise<AxiosResponse<ICoin[]>> {
    return instance.get<ICoin[]>(`/coins`)
  }
}