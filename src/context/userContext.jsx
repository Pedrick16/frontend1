import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!user) {
        try {
          const response = await axios.get('/profile');
          setUser(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData(); // Call the function inside useEffect
  }, ); 

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
