import { createContext, useState } from 'react';

export const AuthContext = createContext();

const initialState = {
  isAuthenticated: null,
  loading: true,
  userId: null,
};

const AuthContextProvider = ({ children }) => {
  const [authContext, dispatchAuthContext] = useState(initialState);

  return (
    <AuthContext.Provider value={{ authContext, dispatchAuthContext }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
