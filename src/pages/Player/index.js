import React from 'react'
import styles from './Player.module.css';
import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import videos from "json/db.json";

export default function Player() {
    const parametros = useParams();
    const video = videos.find((video) =>{
        return video.id === Number(parametros.id);
    })
    console.log(video);

  return (
    <>
    <Banner imagem="player" />
    <Titulo>
        <h1>Player</h1>
    </Titulo>
    <section className={styles.container}>
        <iframe 
        width="100%" 
        height="100%" 
        src={video.link} 
        title={video.titulo}
        allowFullScreen></iframe>
    </section>
    </>
  )
}
