import axios, {AxiosResponse} from 'axios';
import {AuthResponse, ICoin, IUser} from "../types";


const API_URL = 'http://localhost:3004';

const instance = axios.create({
  baseURL: API_URL
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
  registration(email: string,
               password: string,
               fullName:string,
               nickName: string,
               image: string | undefined,
               balance: number): Promise<AxiosResponse<AuthResponse>> {
    return instance.post<AuthResponse>(`/register`, {email, password, fullName, nickName, image, balance})
  },
  getUser(userID: string): Promise<AxiosResponse<IUser>> {
    return instance.get<IUser>(`/users/${userID}`)
  }
}

export const CoinsAPI = {
  getCoins(): Promise<AxiosResponse<ICoin[]>> {
    return instance.get<ICoin[]>(`/coins`)
  },
  searchCoin(name: string): Promise<AxiosResponse<ICoin[]>> {
    return instance.get<ICoin[]>(`/coins?name=${name}`)
  }
}