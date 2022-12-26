import axios from 'axios';
import { api } from '../lib/api';

export default async function loginRequest(email: string, password: string) {
  const user = await axios.post('http://localhost:3333/login', {
    email,
    password,
  });
  return user.data.contacts;
}
