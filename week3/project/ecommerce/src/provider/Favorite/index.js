import React, { createContext } from "react";

export const FavoriteContext = createContext(null);

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = React.useState([]);
  return (
    <FavoriteContext.Provider value={[favorites, setFavorites]}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
