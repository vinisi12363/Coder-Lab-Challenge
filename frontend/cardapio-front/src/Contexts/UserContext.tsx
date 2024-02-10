import React, { createContext, useContext, useState, ReactNode } from "react";
type UserInfo = {
    name: string | null | undefined;
    token: string;
}
interface userContextType {
    user: UserInfo | null | undefined;
    setUpUser: (user: UserInfo) => void;
  }
  interface UserProviderProps {
    children: ReactNode;
  }

const userContext =  createContext<userContextType | undefined > (
    undefined
);


const UserProvider: React.FC<UserProviderProps> = ({children}) => {

    const [user , setUser ]= useState<UserInfo|null>(); 

    const setUpUser = (user: UserInfo) => {
        setUser(user);
    }
    return (
        <userContext.Provider value={{ user , setUpUser}}>
            {children}
        </userContext.Provider>
    );

};

const useContextUser  = () =>{
    const context = useContext(userContext);

  if (!context) {
    throw new Error("useOrderContext must be used within an AppProvider");
  }

  return context;
}
 
export {UserProvider , useContextUser}