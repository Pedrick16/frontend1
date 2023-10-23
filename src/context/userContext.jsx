import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
      if (!userInfo) {
          axios.get('/profile').then(({data}) => {
            setUserInfo(data);

          });
         
      
      }
    

 // Call the function inside useEffect
  }, []); 

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo}}>
      {children}
    </UserContext.Provider>
  );
}
