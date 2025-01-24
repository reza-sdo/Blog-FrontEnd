import React, { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();
const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

const authReducer = (state, action) => {};

const AuthProvider = ({ children }) => {
  const [{ user, isAuthenticated, isLoading, error }, dispatch] = useReducer(
    authReducer,
    initialState
  );
  //signin FN
  //signup FN
  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isLoading, error, signin, signup }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuthProvider = () => {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error('not fount auth context');
  return context;
};

// this is for all auth operation include signin , signup
