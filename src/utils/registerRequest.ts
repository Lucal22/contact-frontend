import { api } from '../lib/api';

export async function verifyEmail(ValidateEmail: string) {
  const emails = await api.get('/getEmails');
  console.log(emails.data[0]);

  if (emails.data.find((e: string) => e.split)) {
    return true;
  }
  return false;
}

export async function registerRequest(email: string, password: string) {
  try {
    await api.post('/register', {
      email,
      password,
    });
  } catch (e) {
    console.log(e);
  }
}
