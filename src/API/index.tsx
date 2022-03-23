import React from 'react';
import axios, {AxiosResponse} from 'axios';
import {AuthResponse, ICoin, IUser, IUserCoin} from "../types";
import {Navigate} from "react-router-dom";


const API_URL = 'https://ccryptocurrency-shop.herokuapp.com';

const instance = axios.create({
  baseURL: API_URL
})

instance.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
  }
})

instance.interceptors.response.use((config) => {
  return config;
}, (error) => {
  if (error.response.status === 401) {
    localStorage.removeItem('token');
    return <Navigate to={'/login'} />
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
               balance: number,
               wallet: []): Promise<AxiosResponse<AuthResponse>> {
    return instance.post<AuthResponse>(`/register`, {email,
                                                              password,
                                                              fullName,
                                                              nickName,
                                                              image,
                                                              balance,
                                                              wallet})
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
    return instance.get<ICoin[]>(`/coins?shortName=${name}`)
  },
  buySellCoins(id: number, balance: number, wallet: IUserCoin[]): Promise<AxiosResponse<IUser>> {
    return instance.patch<IUser>(`/users/${id}`, {balance, wallet})
  }
}