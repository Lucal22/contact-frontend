import React from 'react';
import useAuth from '../../context/AuthProvider/useAuth';

export type ProtectedLayoutProps = {
  children: React.ReactNode;
};

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  const auth = useAuth();
  if (auth?.email) {
    return <>{children}</>;
  } else {
    return <h1>Você precisa estar logado para ver essa página</h1>;
  }
}
