import { useState, useEffect } from "react"

//NOTE: store this in react state, so that i get the data and only show the image, but as soon as the 
//user double clicks i print all the data on the character page. throw 
//since i already have to fetch the data to get the pokemon image

export const useGetPokemonData = (pokemonName: string) => {

  const [data, setData] = useState({})
  const characterEndpoint = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {

    fetch(characterEndpoint).then(response => {
      if (!response.ok) {
        throw Error('failed to fetch data')
      }
      return response.json()
    }).then(data => {
      setData({ data: data })
    }).catch(error => {
      setData({ error: error })
    })
  }, [pokemonName])


  return data

}

