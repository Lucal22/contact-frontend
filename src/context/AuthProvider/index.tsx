import { createContext, useEffect, useState } from 'react';
import { IContext, IUser } from './interface';
import loginRequest, {
  getUserLocalStorage,
  setUserLocalStorage,
} from '../../utils/loginRequest';
import validateToken from '../../utils/validateToken';

export type AuthProviderProps = {
  children: JSX.Element;
};

export const AuthContext = createContext<IContext | null>({} as IContext);

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    async function validation() {
      const user = getUserLocalStorage();
      if (user) {
        const validate = await validateToken(user.token);
        if (!validate) {
          logout();
        }
        console.log(validate);
        setUser(user);
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
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
