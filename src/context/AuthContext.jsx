'use client';
import { signupApi } from '@/services/authService';
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();
const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'loading':
      return { ...state, loading: true };
    case 'error':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      };
    case 'success':
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
        error: null,
      };
  }
};

const AuthProvider = ({ children }) => {
  const [{ user, isAuthenticated, isLoading, error }, dispatch] = useReducer(
    authReducer,
    initialState
  );
  const router = useRouter();

  async function signup(signupData) {
    dispatch({ type: 'loading' });
    try {
      console.log(signupData);
      const { user, message } = await signupApi({
        email: signupData.email,
        name: signupData.name,
        password: signupData.password,
      });
      console.log(user, message);
      toast.success(message);

      dispatch({ type: 'success', payload: user });
      router.push('/profile');
    } catch (error) {
      console.log(error);
      const errMsg = error?.response?.data?.message;
      toast.error(errMsg);
      dispatch({ type: 'error', payload: errMsg });
    }
  }
  async function signin(signinData) {}
  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isLoading, error, signin, signup }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error('not fount auth context');
  return context;
};

// this is for all auth operation include signin , signup
