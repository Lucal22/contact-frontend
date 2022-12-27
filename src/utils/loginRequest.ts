import { IUser } from './../context/AuthProvider/interface';
import { api } from '../lib/api';

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem('user', JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem('user');
  if (!json) {
    return null;
  }
  const user = JSON.parse(json);
  return user ?? null;
}

export default async function loginRequest(email: string, password: string) {
  try {
    const user = await api.post('/login', {
      email,
      password,
    });
    return user.data;
  } catch (e) {
    return null;
  }
}
