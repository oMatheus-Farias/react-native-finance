import { PropsWithChildren, createContext, useState } from "react";

interface AuthContextData {
  user: { name: string; email: string };
  setUser: (user: { name: string; email: string }) => void;
}

export const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@doe.com",
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
