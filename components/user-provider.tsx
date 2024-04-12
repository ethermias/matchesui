// 'use client'
// import { createContext, useContext, useState, ReactNode } from 'react';

// type User = {
//   userName: string;
//   email: string;
//   submittedAt: string;
// };

// type UserContextType = {
//   user: User | null;
//   login: (user: User) => void;
//   logout: () => void;
// };

// const UserContext = createContext<UserContextType | undefined>(undefined);

// export const useUser = (): UserContextType => {
//   const context = useContext(UserContext);
//   if (!context) {
//     throw new Error('useUser must be used within a UserProvider');
//   }
//   return context;
// };

// type UserProviderProps = {
//   children: ReactNode;
//   initialUser?: User | null; // Optional initial user for SSR
// };

// export const UserProvider: React.FC<UserProviderProps> = ({ children, initialUser = null }) => {
//   const [user, setUser] = useState<User | null>(initialUser); // Initialize user with initialUser during SSR

//   const login = (user: User) => {
//     setUser(user);
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <UserContext.Provider value={{ user, login, logout }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
export function useUser(){

}