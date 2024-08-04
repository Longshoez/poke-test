import { useSelector } from "react-redux"
import { RootState } from '../state/store'

import { NavLink } from "react-router-dom"
import { SideBar } from "../components/sideBar"
import { ProgressBar } from "../components/progressBar"

interface pokeType {
  type: {
    name: string,
    url: string,
  },
  base_stat: number
}

const statHead = ['HP', 'Attack', 'Defense', 'Special-Attack', 'Special-Deffense', 'Speed']

export const Character = () => {

  // const params = useParams()
  const storedPokemon = useSelector((state: RootState) => state.pokemon.value)

  return (
    <div className="container">
      <SideBar />
      <div className="column">
        <NavLink className='button buttonMobile' to='/'>Go back</NavLink>

        <table className="table">
          <thead>
            <tr>
              <th colSpan={2}>Types:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {
                storedPokemon.types.map((typeArr: pokeType, key: number) => <td key={key}>
                  {(typeArr.type.name).charAt(0).toUpperCase() + (typeArr.type.name).slice(1)}
                </td>)
              }
            </tr>
          </tbody>
        </table>
        <table className="table">
          <thead >
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Height</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{storedPokemon.id}</td>
              <td>{storedPokemon.name.charAt(0).toUpperCase() + storedPokemon.name.slice(1)}</td>
              <td>{storedPokemon.height}</td>
              <td>{storedPokemon.weight}</td>
            </tr>
          </tbody>
        </table>

        <table className="table">
          <thead>
            <tr>
              <th
                colSpan={2}>
                Stats
              </th>
            </tr>
          </thead>
          <tbody className='table-left'>
            {
              storedPokemon.stats.map((typeArr: pokeType, key: number) => <tr key={key}>
                <th>{statHead[key]}</th>
                <td><ProgressBar percentage={typeArr.base_stat} /></td>
              </tr>
              )
            }
          </tbody>
        </table>

      </div>
    </div>

  )
}

/*

type data.types = [{...},{...}]

//row 
data.number, name, height, weight 

//two columns 
 data.stas = [hp, attack, defense, special atttack, special defense, speed]

data.abilities = [...]

 */
