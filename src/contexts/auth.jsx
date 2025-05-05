import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [isLogged, setLogged] = useState(false);

  useEffect(() => {
    setLogged(JSON.stringify(user).includes("identification_token"));
  }, [user]);

  const data = { isLogged, user, setUser };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
