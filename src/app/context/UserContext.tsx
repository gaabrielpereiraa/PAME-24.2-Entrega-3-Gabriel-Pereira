"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { Lolipop } from '../models/lolipop'

interface User {
    email: string;
    password: string;
    username: string;
    lolipops: Lolipop[];
}

interface UserContextType {
    user: User | null;
    login: (email: string, password: string) => void;
    logout: () => void;
    register: (email: string, password: string, username: string, lolipops: Lolipop[]) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    const login = (email: string, password: string) => {
        // Verifica se o usuário existe e a senha está correta
        const storedUser = localStorage.getItem(email);
        if (storedUser) {
            const parsedUser: User = JSON.parse(storedUser);
            if (parsedUser.password === password) {
                localStorage.setItem('email', parsedUser.email);
                localStorage.setItem('token', parsedUser.password);
                setUser(parsedUser);
            } else {
                alert('Credenciais inválidas');
            }
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.setItem('token', null);
        localStorage.setItem('email', null);
        
    };

    const register = (email: string, password: string, username: string, lolipops: Lolipop[]) => {
        // Armazena o usuário no localStorage
        const storedUser = localStorage.getItem(email)
        if (storedUser) alert('Email já registrado!');
        else {
            const newUser: User = {
                email,
                password,
                username,
                lolipops: []
            };
            localStorage.setItem(email, JSON.stringify(newUser));
            setUser(newUser);
            alert('Usuário registrado com sucesso!');
        }
    };

    return (
        <UserContext.Provider value={{ user, login, logout, register }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
