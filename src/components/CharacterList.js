import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Card } from 'semantic-ui-react'

import CharacterCard from "./CharacterCard.js";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState();
console.log(data)
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
        .get(`https://rickandmortyapi.com/api/character/`)
        .then(response => {
          const characters = response.data.results
          setData(characters)

        }) 
        .catch(err=>{
        console.log("error",err)
        })
  }, [])

  return (<section className="grid-view">
  
         { data && data.map((data,key) =>  <CharacterCard key={data.id} data={data}/>)}
    
    </section>
  )}
