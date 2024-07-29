import { createContext } from "react";


export const AuthContext = createContext<{
    isAuth: boolean, 
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>} | null>(null);