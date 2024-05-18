export interface User {
  fullName: string;
  emailOrPhonenumber: string;
  password: string;
  passwordConfirm: string;
  accessToken?: string;
}
