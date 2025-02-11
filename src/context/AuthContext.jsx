'use client';
import { getUserApi, signinApi, signupApi } from '@/services/authService';
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import toast from 'react-hot-toast';

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
    case 'success-signup':
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
        error: null,
      };
    case 'success-signin':
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
        error: null,
      };
    case 'success-getUser':
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
      const { user, message } = await signupApi({
        email: signupData.email,
        name: signupData.name,
        password: signupData.password,
      });
      console.log(user, message);
      toast.success(message);

      dispatch({ type: 'success-signup', payload: user });
      router.push('/profile');
    } catch (error) {
      console.log(error);
      const errMsg = error?.response?.data?.message;
      toast.error(errMsg);
      dispatch({ type: 'error', payload: errMsg });
    }
  }
  async function signin(signinData) {
    dispatch({ type: 'loading' });
    try {
      const { user, message } = await signinApi({
        email: signinData.email,
        password: signinData.password,
      });
      console.log(user, message);
      toast.success(message);

      dispatch({ type: 'success-signin', payload: user });
      router.push('/profile');
    } catch (err) {
      console.log(err);
      const errMsg = err?.response?.data?.message;
      toast.error(errMsg);
      dispatch({ type: 'error', payload: errMsg });
    }
  }
  async function getUserData() {
    dispatch({ type: 'loading' });
    try {
      const { user, message } = await getUserApi();
      dispatch({ type: 'success-getUser', payload: user });
      console.log(user);
      
    } catch (err) {
      console.log(err);
      const errMsg = err?.response?.data?.message;
      toast.error(errMsg);
      dispatch({ type: 'error', payload: errMsg });
    }
  }

  useEffect(() => {
    async function fetchData() {
      await getUserData();
    }
    fetchData();
  }, []);
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
