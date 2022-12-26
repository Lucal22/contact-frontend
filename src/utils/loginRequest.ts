import { api } from '../lib/api';

export default async function loginRequest(email: string, password: string) {
  const user = await api.post('/login', {
    email,
    password,
  });
  if (user) {
    return user.data;
  } else {
    return null;
  }
}
