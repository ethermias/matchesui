'use client'
import { createContext, useContext, useState, ReactNode } from 'react';

const AppContext = createContext<any>(undefined)

export function AppWrapper({ children }: { children: ReactNode }) {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')

  return <AppContext.Provider value={{
    userName,
    setUserName,
    email,
    setEmail
  }}>
    <div className="flex flex-col h-screen">
      {children}
    </div>
  </AppContext.Provider>
}

export function useAppContext() {
  return useContext(AppContext)
}