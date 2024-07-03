import { setCookie } from 'cookies-next';
import { IAuthResponse } from 'src/interfaces/auth/auth-response.interface';

export async function authenticate(data: IAuthResponse) {
  try {
    if (data) {
      const expirationTime = new Date();
      expirationTime.setTime(expirationTime.getTime() + 2 * 60 * 60 * 1000);

      setCookie('currentUser', JSON.stringify(data), {
        expires: expirationTime,
      });
    }
    return data;
  } catch (error) {
    return error;
  }
}

export async function verification(userId: string) {
  const expirationTime = new Date();
  expirationTime.setTime(expirationTime.getTime() + 1 * 60 * 1000);

  setCookie(
    'verification',
    JSON.stringify({ userId: userId, isVerification: 1 }),
    {
      expires: expirationTime,
    }
  );
}

export async function forgotPassword(data: { username: string; otp?: string }) {
  const expirationTime = new Date();
  expirationTime.setTime(expirationTime.getTime() + 1 * 60 * 1000);

  setCookie('forgotPassword', JSON.stringify(data), {
    expires: expirationTime,
  });
}
