import { useState, useEffect } from "react"

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

