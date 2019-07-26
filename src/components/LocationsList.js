import React, { useEffect, useState } from 'react';
import axios from "axios";

import LocationCard from "./LocationCard.js";


export default function LocationList() {
  // TODO: Add useState to track data from useEffect
  const [locations, setLocations] = useState();

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
        .get(`https://rickandmortyapi.com/api/location/`)
        .then(response => {
         console.log(response)
        const locations = response.data.results
        setLocations(locations)
        console.log(locations)
        }) 
        .catch(err=>{
        console.log("error",err)
        })
  }, [])

  return (
      <section className="grid-view">
      {locations && locations.map((location,key)=> <LocationCard key={location.id} name={location.name} type={location.type} 
        dimension={location.dimension} residents={location.residents.length}/>)}
    </section>
  )
}
