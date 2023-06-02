import React from 'react'
import styles from "./Favoritos.module.css";
import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import videos from "json/db.json";
import Card from "components/Card";

export default function Favoritos() {
    const favoritos = videos[2];
  return (
    <>
        <Banner imagem="favoritos" />
        <Titulo>
            <h1>Meus Favoritos</h1>
        </Titulo>
        <section className={styles.container}>
            <Card {...favoritos}/>
        </section>
    </>
    
    )
}
