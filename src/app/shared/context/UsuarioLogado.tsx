import { createContext, useCallback, useEffect, useState } from "react";

interface IUsuarioLogadoContextData {
  nomeDoUsuario: string;
  logout: () => void;
}
export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>(
  {} as IUsuarioLogadoContextData
);

interface IUusarioLogadoProviderProps {
  children: React.ReactNode;
}
export const UsuarioLogadoProvider: React.FC<IUusarioLogadoProviderProps> = ({
  children,
}) => {
  const [nome, setNome] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setNome("Luigi");
    }, 600);
  });

  const handleLogout = useCallback(() => {
    console.log("logout executado");
  }, []);

  return (
    <UsuarioLogadoContext.Provider
      value={{ nomeDoUsuario: nome, logout: handleLogout }}
    >
      {children}
    </UsuarioLogadoContext.Provider>
  );
};
