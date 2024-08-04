import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import '../App.css'
import { SideBar } from "../components/sideBar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../state/store'
import { setPokemonData, setLoading, setPokemonList } from "../state/pokemons/pokeSlice";
import { Pagination } from "../components/pagination";
import Pokeball from '../assets/pokeball.png'

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
  const navigate = useNavigate();

  const poke = useSelector((state: RootState) => state.pokemon)
  const pokemonList = useSelector((state: RootState) => state.pokemon.pokemonList)
  const paginationState = useSelector((state: RootState) => state.pokemon.paginationState)

  const dispatch = useDispatch()

  //NOTE: move this to their own files in the utils folder, not quite sure if its good practice, check it out before

  useEffect(() => {
    dispatch(setLoading(true))
    fetch(endpoint).then((res) => {
      return res.json()
    }).then((data: PokemonData) => {
      console.log(data)
      dispatch(setPokemonList(data.results))
      dispatch(setLoading(false))
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
      <div className="column">
        <ul className='listContainer'>
          {
            !poke.value.loading ? (
              pokemonList.slice(paginationState, (paginationState + 20))
                .map((pokemon: PokeCharacter, key: number) => (
                  <li
                    key={key}
                    onClick={() => getPokemon(pokemon.name)}
                    onDoubleClick={() => navigate(`characters/${pokemon.name}`)}
                  >
                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                    <img className="pokeIcon" src={Pokeball} />
                  </li>
                ))) : (<>loading</>)
          }
        </ul>
        <Pagination />
      </div>
      <Outlet />
    </div>
  )
}

