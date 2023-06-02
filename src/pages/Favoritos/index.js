import React from 'react'
import styles from "./Favoritos.module.css";
import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import { useFavoritoContext } from 'contextos/Favoritos';
import Card from 'components/Card';

export default function Favoritos() {
    const {favorito} = useFavoritoContext(); 
  return (
    <>
        <Banner imagem="favoritos" />
        <Titulo>
            <h1>Meus Favoritos</h1>
        </Titulo>
        <section className={styles.container}>
            {
                favorito.map(favorito => (
                    <Card {...favorito} key={favorito.id}/>
                ))
            }
        </section>
    </>
    
    )
}
