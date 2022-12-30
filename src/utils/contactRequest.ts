import { api } from '../lib/api';

export async function contactRequest(email: string | undefined) {
  if (email) {
    try {
      const contacts = await api.post('/login/contacts', {
        email,
      });
      return contacts.data;
    } catch (e) {
      console.log(e);
    }
  }
}

export async function contactCreate(
  email: string | undefined,
  name: string,
  phone: string,
) {
  if (email) {
    try {
      await api.post('/login/contacts/create', {
        email,
        name,
        phone,
      });
    } catch (e) {
      console.log(e);
    }
  }
  return;
}
