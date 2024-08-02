import { useEffect, useState } from "react"

export const Characters = () => {

  const endpoint = 'https://pokeapi.co/api/v2/pokemon?limit=150'
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {

    fetch(endpoint).then((res) => {
      return res.json()
    }).then((data) => {
      // console.log(data.results)
      setPokemonList(data.results)
    })
  }, [])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '2rem'
    }}>
      {/* sidebar  */}
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <p>logo</p>
        <p>{'pokemon'}</p>

      </div>
      <div>
        {
          pokemonList.map((item) => (
            <li>{item.name}</li>
          ))
        }
        <li>pokemon  1</li>
        <li>pokemon  1</li>
      </div>
    </div>
  )
}

