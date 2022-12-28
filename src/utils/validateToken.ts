import { api } from './../lib/api';

export default async function validateToken(token: string) {
  try {
    const validate = await api.post('/token', { token });
    return validate;
  } catch (e) {
    console.log(e);
  }
}
