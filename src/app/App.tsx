import { Routes } from "./routes";
import { UsuarioLogadoProvider } from "./shared/context";

export const App = () => {
  return (
    <UsuarioLogadoProvider>
      <Routes />
    </UsuarioLogadoProvider>
  );
};
