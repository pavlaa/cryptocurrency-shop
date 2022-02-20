export interface AuthResponse {
  accessToken: string;
  user: IUser;
}

export interface IUser {
  id: number;
  email: string;
  fullName: string;
  nickName: string;
  image: string;
  balance?: number;
  wallet: ICoin[];
}

export interface ICoin {
  id: number;
  name: string;
  shortName: string;
  price: number;
  image: string;
  count?: number;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegistration {
  newEmail: string;
  newPassword: string;
  fullName: string;
  nickName: string;
  image?: string;
}