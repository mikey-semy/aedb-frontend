import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthContextType } from './Auth.types';
import { getUserProfile } from '@/components/User/Profile/Profile.api';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<any>(null);
    const [token, setToken] = useState<string>(() => localStorage.getItem('token') || '');
    const [profileCache, setProfileCache] = useState<any>(null);

    useEffect(() => {
        const loadUser = async () => {
            const savedToken = localStorage.getItem('token');
            if (savedToken) {
                try {

                    if (profileCache) {
                        setUser(profileCache);
                        setToken(savedToken);
                        return;
                    }

                    const userData = await getUserProfile(savedToken);
                    setUser(userData);
                    setProfileCache(userData);
                    setToken(savedToken);
                } catch (err) {
                    localStorage.removeItem('token');
                    setToken('');
                    setUser(null);
                   setProfileCache(null);
                }
            }
        };

        loadUser();
    }, [user?.avatar]);

    return (
        <AuthContext.Provider value={{
            user,
            token,
            setUser,
            setToken,
            profileCache,
            setProfileCache
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
