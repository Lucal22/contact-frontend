import { api } from '../lib/api';

type registerRequestType = {
  email: string;
};

export async function verifyEmail(ValidateEmail: string) {
  const emails = await api.get('/getEmails');

  const filterEmails = emails.data.filter((e: registerRequestType) =>
    e.email.includes(ValidateEmail),
  );

  if (filterEmails.length > 0) {
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
