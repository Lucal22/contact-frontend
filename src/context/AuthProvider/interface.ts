export type IUser = {
  email?: string;
  id?: string;
};

export type IContext = IUser & {
  authenticate: (email: string, password: string) => Promise<void>;
  logout: () => void;
};
