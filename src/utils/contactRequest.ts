import { api } from '../lib/api';

export default async function contactRequest(email: string) {
  try {
    const contacts = await api.post('/login/contacts', {
      email,
    });
    return contacts.data;
  } catch (e) {
    console.log(e);
  }
}
