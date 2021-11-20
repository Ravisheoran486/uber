import React , {useEffect} from 'react'
import mapboxgl from '!mapbox-gl'
import tw from "tailwind-styled-components"

mapboxgl.accessToken = 'pk.eyJ1IjoicnNoZW9yYW4xMiIsImEiOiJja3c2M3o5ZDcyM2Z4Mm5yb2VzM2kwYjQyIn0.TQx8LsbP7x_TitEZSIfR4A';

const Map = () => {
    useEffect(() => {
    
        map.current = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [80, 22],
          zoom: 3
        });
      });
    

    return (
        <Wrapper id = "map"></Wrapper>
    )
}

const Wrapper  = tw.div `
flex-1

`


export default Map
