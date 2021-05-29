import { createContext, useState } from 'react';
import userMock from '../../mock/userMock';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState(userMock);
  const [currentUser, setCurrentUser] = useState(users[0]);
  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser, users, setUsers }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
