import styles from "./Cards.module.css";
import React, { useEffect, useState } from 'react'
import Card from "components/Card";

export default function Cards() {
  const [videos, setVideos] = useState([]);

  useEffect(() =>{
    fetch('https://my-json-server.typicode.com/renanlucena/cinetag-api/videos')
      .then(resposta => resposta.json())
        .then(dados => {
          setVideos(dados)
        })
  }, [])
  return (
   <section className={styles.container} >
    {videos.map((video) => (
      <Card {...video} key={video.id}/>
    ))}
   </section>
  )
}
