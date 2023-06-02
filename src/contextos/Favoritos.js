import {createContext, useState, React, useContext} from 'react'

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({children}) {
    const [favorito, setFavorito] = useState([]);

    return (
    <FavoritosContext.Provider value={{favorito, setFavorito}}>
        {children}
    </FavoritosContext.Provider>
  )
}

export function useFavoritoContext(){
  const {favorito, setFavorito} = useContext(FavoritosContext);

  function gerenciarFavorito(novoFavorito){
    const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id);

    if(!favoritoRepetido){
      return setFavorito([...favorito, novoFavorito]);
    }

    return setFavorito(favoritoAnterior => favoritoAnterior.filter(item => item.id !== novoFavorito.id));


  }
  return{
    favorito,
    gerenciarFavorito

  }
}