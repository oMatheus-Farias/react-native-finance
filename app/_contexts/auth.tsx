import { PropsWithChildren, createContext, useState } from "react";
import { useNavigation } from "expo-router";
import api from "../_services/api";

interface AuthContextData {
  user: UserData | null;
  signed: boolean;
  loading: boolean;
  setUser: (user: UserData) => void;
  signUp: (signUpUser: SignUpUserData) => Promise<void>;
  signIn: (signInUser: SignInUserData) => Promise<void>;
}
interface UserData {
  id: string;
  name: string;
  email: string;
  token: string;
}

interface SignUpUserData {
  signUpUser: { name: string; email: string; password: string };
}

interface SignInUserData {
  signInUser: { email: string; password: string };
}

export const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [signed, setSigned] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigation();

  const signUp = async ({ signUpUser }: SignUpUserData) => {
    if (
      signUpUser.name === "" ||
      signUpUser.email === "" ||
      signUpUser.password === ""
    ) {
      return alert("Preencha todos os campos!");
    }

    setLoading(true);
    try {
      const response = await api.post("/users", signUpUser);

      navigate.navigate("(login)/index" as never);
      console.log("Usuário cadastrado com sucesso!", response.data);
    } catch (error) {
      console.log("Erro ao tentar cadastrar usuário.", error);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async ({ signInUser }: SignInUserData) => {
    if (signInUser.email === "" || signInUser.password === "") {
      return alert("Preencha todos os campos!");
    }

    setLoading(true);
    try {
      const response = await api.post("/login", signInUser);

      api.defaults.headers["Authorization"] = `Bearer ${response.data.token}`;

      const data = { ...response.data, email: signInUser.email };

      setUser({
        id: data.id,
        name: data.name,
        email: signInUser.email,
        token: data.token,
      });

      setSigned(true);
      navigate.navigate("(drawer)" as never);
    } catch (error) {
      console.log("Erro ao tentar logar usuário.", error);
      alert("E-mail ou senha inválidos!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signed,
        loading,
        setUser,
        signUp,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
