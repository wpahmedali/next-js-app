import axios from 'axios';
const https = require('https');
import { getCookie } from 'cookies-next';
import { access_token } from 'src/common/constants';
import { IAuthResponse } from 'src/interfaces/auth/auth-response.interface';

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

const currentUserCookie = getCookie('currentUser');
const user: IAuthResponse = currentUserCookie
  ? JSON.parse(currentUserCookie)
  : null;
const authorization_token = `Bearer ${user?.token}`;

const fetcher = axios.create({
  baseURL: 'https://jjbackups.com/api',
  httpsAgent,
  responseType: 'json',
  headers: {
    'Content-Type': 'multipart/form-data',
    token: access_token,
    Authorization: authorization_token,
  },
});

export default fetcher;
