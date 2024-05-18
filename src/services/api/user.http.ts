import axios, { AxiosResponse } from 'axios';
import { User } from '../../types/user.type';

interface OTP extends User {
  otp: number;
}

export const getOTP = (
  data: User,
): Promise<AxiosResponse<{ accessToken: string }>> => {
  return axios.post(`${import.meta.env.VITE_API_URL!}/auth/get-otp`, data);
};

export const signup = (
  data: OTP,
): Promise<AxiosResponse<{ accessToken: string }>> => {
  return axios.post(`${import.meta.env.VITE_API_URL!}/auth/sign-up`, data);
};

export const signin = (data: {
  emailOrPhonenumber: string;
  password: string;
}): Promise<AxiosResponse<{ accessToken: string }>> => {
  return axios.post(`${import.meta.env.VITE_API_URL!}/auth/sign-in`, data);
};
