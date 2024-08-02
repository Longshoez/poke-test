import { useParams } from "react-router-dom"

export const Character = () => {

  const params = useParams()

  return (
    <div>Characters: {params.characterId}</div>
  )
}
