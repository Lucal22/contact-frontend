export type IUser = {
  email?: string;
  token?: string;
};

export type IContext = IUser & {
  authenticate: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

export type IContacts = {
  email?: string;
  id?: string;
  name?: string;
  phone?: string;
};
