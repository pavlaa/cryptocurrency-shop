export interface AuthResponse {
  accessToken: string;
  user: IUser;
}

export interface IUser {
  id: number;
  email: string;
  name: string;
  shortName: string;
  image: string;
}

export interface ICoin {
  id: number;
  name: string;
  shortName: string;
  price: number;
  image: string;
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