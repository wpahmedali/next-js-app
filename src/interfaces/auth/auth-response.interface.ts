export interface IAuthResponse {
  user: IUser;
  token: string;
}

export interface IUser {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  different_username: number;
  username: string;
  role: string;
  current_workspace: string;
  phone: string;
  image: string;
  whatsapp_no: string;
  address: string;
  country_id: number;
  added_by: number;
  created_at: string;
  updated_at: string;
  updated_by: number;
  deleted_at: string;
  email_verified_at: string;
  phone_verified_at: string;
  twoFA: number;
}
