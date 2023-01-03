import React from 'react';
import useAuth from '../../context/AuthProvider/useAuth';

export type ProtectedLayoutProps = {
  children: React.ReactNode;
  childrenlogin: React.ReactNode;
};

export default function ProtectedLayout({
  children,
  childrenlogin,
}: ProtectedLayoutProps) {
  const auth = useAuth();
  if (auth?.email) {
    return <>{children}</>;
  } else {
    return <>{childrenlogin}</>;
  }
}
