import videos from "json/db.json";
import styles from "./Cards.module.css";
import React from 'react'
import Card from "components/Card";

export default function Cards() {
  return (
   <section className={styles.container} >
    {videos.map((video) => (
      <Card {...video} key={video.id}/>
    ))}
   </section>
  )
}
