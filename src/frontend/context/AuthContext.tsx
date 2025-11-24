
import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';

import authService, { LoginCredentials } from '../services/auth.service';
import { User } from '../types/user.types';
import api from '../services/api';




interface AuthContextType {
  user: User | null;                        
  login: (credentials: LoginCredentials) => Promise<void>; 
  logout: () => void;                        
  isLoading: boolean;                        
}


export const AuthContext = createContext<AuthContextType | undefined>(undefined);



export const AuthProvider = ({ children }: { children: ReactNode }) => {
  
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'));
  const [isLoading, setIsLoading] = useState(true);

 
  useEffect(() => {
   
    if (token) {
    
      localStorage.setItem('token', token);
     
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } 
 
    else {
      
      localStorage.removeItem('token');
    
      delete api.defaults.headers.common['Authorization'];
    }
 
    setIsLoading(false);
  }, [token]); 

  const login = async (credentials: LoginCredentials) => {
   
    const response = await authService.login(credentials);
   
    if (response.success && response.data) {
        
        const { accessToken, user: loggedInUser } = response.data;
        
       
        setUser(loggedInUser);
        setToken(accessToken);
      } else {
        throw new Error(response.message || 'Đăng nhập thất bại, không nhận được dữ liệu.')
      }
  }

  
  const logout = () => {
  
    setUser(null);
    setToken(null);
  };

  const value = { user, token, login, logout, isLoading };

  
  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};