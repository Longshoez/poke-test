import { useSelector } from 'react-redux'
import { RootState } from '../state/store'
import Logo from '../assets/pokemon_logo.png'
import Whodat from '../assets/whodat.png'

export const SideBar = () => {
  const selectedPokemon = useSelector((state: RootState) => state.counter.value)

  return (
    <div className='sideBar'>
      <img src={Logo} />
      {

        Object.keys(selectedPokemon).length > 0 ?
          <>
            <img className='imageContainer' src={selectedPokemon.sprites.front_default} />
            <p>{selectedPokemon.name.charAt(0).toUpperCase() + selectedPokemon.name.slice(1)}</p>
          </>
          :
          <img className='imageContainer noImage' src={Whodat} />
      }
    </div>
  )
}
