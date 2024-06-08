import { PropsWithChildren, createContext, useState } from "react";
import { useNavigation } from "expo-router";
import api from "../_services/api";

interface SignUpUserData {
  signUpUser: { name: string; email: string; password: string };
}

interface UserData {
  id: string;
  name: string;
  email: string;
  balance: number;
  created_at: string;
  updated_at: string;
}

interface AuthContextData {
  user: UserData | null;
  loading: boolean;
  setUser: (user: UserData) => void;
  signUp: (signUpUser: SignUpUserData) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserData | null>(null);
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

      setUser(response.data);
      navigate.navigate("(login)/index" as never);
      console.log("Usuário cadastrado com sucesso!", response.data);
    } catch (error) {
      console.log("Erro ao tentar cadastrar usuário.", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, setUser, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
