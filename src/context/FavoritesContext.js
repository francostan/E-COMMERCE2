import { createContext, useState, useContext } from "react";

export const FavoritesContext = createContext();

export function FavoritesContextProvider({ children }) {
  const [favoritesUser, setFavoritesUser] = useState(null);

  return (
    <FavoritesContext.Provider value={{ favoritesUser, setFavoritesUser }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("No hay contexto para Favoritos");
  return context;
};
