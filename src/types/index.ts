export interface AuthResponse {
  accessToken: string;
  user: IUser;
}

export interface IUser {
  id: number;
  email: string;
  name: string;
  photo: string;
}

export interface ICoin {
  id: number;
  name: string;
  shortName: string;
  price: number;
  image: string;
}