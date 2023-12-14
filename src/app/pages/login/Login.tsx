import { useMemo, useRef, useState } from "react";
// import { UsuarioLogadoContext } from "../../shared/context";
import { useUsuarioLogado } from "../../shared/hooks";
import { ButtonLogin } from "./components/ButtonLogin";
import { InputLogin } from "./components/InputLogin";

export const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const inputPasswordRef = useRef<HTMLInputElement>(null);
  // const usuarioLogadoContext = useContext(UsuarioLogadoContext);
  const { nomeDoUsuario } = useUsuarioLogado();

  const emailLenght = useMemo(() => {
    console.log("executou");
    return email.length * 1000;
  }, [email.length]);

  const handleEntrar = () => {
    console.log(email);
    console.log(password);
  };

  return (
    <div>
      <form>
        <p>Quantidade de Caracteres no email:{emailLenght} </p>
        <p>Usuario Logado:{nomeDoUsuario} </p>
        <InputLogin
          label="Email"
          value={email}
          onChange={(newValue) => setEmail(newValue)}
          onPressEnter={() => inputPasswordRef.current?.focus()}
        />
        <InputLogin
          type="password"
          label="Senha"
          value={password}
          ref={inputPasswordRef}
          onChange={(newValue) => setPassword(newValue)}
        />
        <ButtonLogin type="button" onClick={handleEntrar}>
          Entrar
        </ButtonLogin>
      </form>
    </div>
  );
};
