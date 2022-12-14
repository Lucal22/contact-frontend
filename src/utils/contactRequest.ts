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

export async function contactUpdate(
  id: string | undefined,
  name: string | undefined,
  phone: string | undefined,
) {
  if (id && name && phone) {
    try {
      await api.post('/login/contacts/update', {
        id,
        name,
        phone,
      });
    } catch (e) {
      console.log(e);
    }
  }
  return;
}

export async function contactDelete(id: string | undefined) {
  if (id) {
    try {
      await api.post('/login/contacts/delete', {
        id,
      });
    } catch (e) {
      console.log(e);
    }
  }
}
