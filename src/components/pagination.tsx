import { useDispatch, useSelector } from "react-redux"
import { RootState } from '../state/store'
import { setPagination } from "../state/pokemons/pokeSlice"

export const Pagination = () => {

  const page = useSelector((state: RootState) => state.pokemon.paginationState)
  const dispatch = useDispatch();
  const maxItems = 150;
  const pages = Math.floor(maxItems / 20)

  return (
    <div>
      <button
        className="button"
        onClick={() => dispatch(setPagination(page - 1))}
        disabled={page > 1 ? false : true}
      >
        Previous
      </button>
      {page}
      /
      {pages}
      <button
        className="button"
        onClick={() => dispatch(setPagination(page + 1))}
        disabled={page < pages ? false : true}
      >
        Previous
      </button>
    </div>
  )
}

