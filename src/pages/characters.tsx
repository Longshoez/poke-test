import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import '../App.css'
import { SideBar } from "../components/sideBar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../state/store'
import { setPokemonData, setLoading } from "../state/pokemons/pokeSlice";

interface Pokemon {
  name: string;
}

interface PokemonData {
  results: Pokemon[]
}

interface PokeCharacter {
  name: string;
}

export const Characters = () => {

  const endpoint = 'https://pokeapi.co/api/v2/pokemon?limit=150'
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
  const navigate = useNavigate();

  const poke = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoading(true))
    fetch(endpoint).then((res) => {
      return res.json()
    }).then((data: PokemonData) => {
      dispatch(setLoading(false))
      setPokemonList(data.results)
    })
  }, [])


  const getPokemon = (pokeName: string) => {
    const characterEndpoint = 'https://pokeapi.co/api/v2/pokemon'
    fetch(`${characterEndpoint}/${pokeName}`).then(response => {
      if (!response.ok) {
        throw Error('failed to fetch data')
      }
      return response.json()
    }).then(data => {
      dispatch(setPokemonData(data))
    }).catch(error => {
      dispatch(setPokemonData(error.message))
    })
  }

  return (
    <div className="container">
      <SideBar />
      <ul className='listContainer'>
        {
          !poke.loading ? (
            pokemonList.slice(0, 20).map((pokemon: PokeCharacter, id) => (
              <li
                key={id}
                onClick={() => getPokemon(pokemon.name)}
                onDoubleClick={() => navigate(`characters/${pokemon.name}`)}
              >
                {pokemon.name}
              </li>
            ))) : (<>loading</>)
        }
      </ul>
      <Outlet />
    </div>
  )
}

