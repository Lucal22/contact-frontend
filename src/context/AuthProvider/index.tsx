import { createContext, useEffect, useState } from 'react';
import { IContacts, IContext, IUser } from './interface';
import loginRequest, {
  getUserLocalStorage,
  setUserLocalStorage,
} from '../../utils/loginRequest';
import validateToken from '../../utils/validateToken';
import contactRequest from '../../utils/contactRequest';

export type AuthProviderProps = {
  children: JSX.Element;
};

export const AuthContext = createContext<IContext | null>({} as IContext);

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser | null>();
  const [contacts, setContacts] = useState<IContacts | null>();

  useEffect(() => {
    async function validation() {
      const user = getUserLocalStorage();
      if (user) {
        const validate = await validateToken(user.token);
        if (!validate) {
          logout();
        }
        setUser(user);
        const contacts = await contactRequest(user.email);
        if (!contacts) {
          return;
        }
        setContacts(contacts);
      }
    }
    validation();
  }, []);

  async function authenticate(email: string, password: string) {
    const response = await loginRequest(email, password);
    const payload = { token: response.token, email: response.email };
    setUser(payload);
    setUserLocalStorage(payload);
  }

  function logout() {
    setUser(null);
    setUserLocalStorage(null);
  }

  return (
    <AuthContext.Provider
      value={{ ...user, ...contacts, authenticate, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
