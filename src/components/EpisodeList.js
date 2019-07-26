import React, { useEffect, useState } from 'react';
import axios from "axios";

import EpisodeCard from "./EpisodeCard"


export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisodes] = useState();

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
        .get(`https://rickandmortyapi.com/api/episode/`)
        .then(response => {
         const episodes = response.data.results
         console.log(episodes)
         setEpisodes(episodes)
        }) 
        .catch(err=>{
        console.log("error",err)
        })
  }, [])

  return (
      <section className="grid-view">
          {episodes && episodes.map((episode,key)=> <EpisodeCard key={episode.id} episode={episode}/>)}
    </section>
  )
}