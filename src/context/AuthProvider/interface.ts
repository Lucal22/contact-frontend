export type IUser = {
  email?: string;
  token?: string;
};

export type IContext = IUser &
  IContacts & {
    authenticate: (email: string, password: string) => Promise<void>;
    logout: () => void;
  };

export type IContacts = {
  id?: string;
  name?: string;
  phone?: string;
};
