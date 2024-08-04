import { useDispatch, useSelector } from "react-redux"
import { RootState } from '../state/store'
import { setPagination } from "../state/pokemons/pokeSlice"

export const Pagination = () => {

  const page = useSelector((state: RootState) => state.pokemon.paginationState)
  const dispatch = useDispatch();
  const maxItems = 150;
  const pages = Math.floor(maxItems / 20)

  return (
    <div className="pagination">
      <button
        className="button"
        onClick={() => dispatch(setPagination(page - 20))}
        disabled={page > 0 ? false : true}
      >
        Previous
      </button>
      <button
        className="button"
        onClick={() => dispatch(setPagination(page + 20))}
        disabled={page / 20 < pages ? false : true}
      >
        Next
      </button>
    </div>
  )
}

