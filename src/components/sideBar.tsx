import { useSelector } from 'react-redux'
import { RootState } from '../state/store'
import Logo from '../assets/pokemon_logo.png'
import Whodat from '../assets/whodat.png'

export const SideBar = () => {
  const selectedPokemon = useSelector((state: RootState) => state.pokemon.value)

  return (
    <div className='sideBar'>
      <img className='logo' src={Logo} />
      {
        Object.keys(selectedPokemon).length > 0 ?
          <div className='sidebarContainer'>
            <img className='imageContainer' src={selectedPokemon.sprites.front_default} />
            <h3>{selectedPokemon.name.charAt(0).toUpperCase() + selectedPokemon.name.slice(1)}</h3>
          </div>
          :
          <img className='imageContainer noImage' src={Whodat} />
      }
    </div>
  )
}
