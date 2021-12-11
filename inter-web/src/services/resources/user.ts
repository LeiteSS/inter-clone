import api from '../api';

export interface SignInData {
  email: string;
  password: string;
}

export interface SignUpData {
  firstName: string,
  lastName: string;
  wallet: number;
  email: string;
  password: string;
}

interface UserDto {
  id: string;
  firstName: string;
  lastName: string;
  accountNumber: number;
  accountDigit: number;
  wallet: number;
  email: string;
}

export const signIn = async (data: SignInData) => {
  return api.post('/user/signin', data)
}

export const signUp = async (data: SignUpData) => {
  return api.post('/user/signup', data)
}

export const me = async () => {
  return api.get<UserDto>('/user/me')
}