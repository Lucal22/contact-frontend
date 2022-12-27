import { createContext, useEffect, useState } from 'react';
import { IContext, IUser } from './interface';
import loginRequest, {
  getUserLocalStorage,
  setUserLocalStorage,
} from '../../utils/loginRequest';

export type AuthProviderProps = {
  children: JSX.Element;
};

export const AuthContext = createContext<IContext | null>({} as IContext);

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const user = getUserLocalStorage();
    if (user) {
      setUser(user);
    }
  }, []);

  async function authenticate(email: string, password: string) {
    const response = await loginRequest(email, password);
    const payload = { id: response.id, email: response.email };
    setUser(payload);
    setUserLocalStorage(payload);
  }

  function logout() {
    setUser(null);
    setUserLocalStorage(null);
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
