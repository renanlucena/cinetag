import React from 'react'
import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";
import iconeDesfavoritar from "./desfavoritar.png";
import { useFavoritoContext } from 'contextos/Favoritos';

export default function Card({id, titulo, capa}) {  
  const {favorito, gerenciarFavorito} = useFavoritoContext();
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;

  return (
    <div className={styles.container}>
        <img src={capa} atl={titulo} className={styles.capa}/>
        <h2>{titulo}</h2>
        <img src={icone}
            alt="Favoritar filme"
            className={styles.favoritar}
            onClick={() => {
              gerenciarFavorito({id, titulo, capa})
            }} />

    </div>
  )
}
