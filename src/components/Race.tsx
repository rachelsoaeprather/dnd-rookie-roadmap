import { Race } from '../types'

const Race = (page: Race) => {
  return (
    <>
      <p>{page.alignment}</p>
      <p>{page.age}</p>
    </>
  )
}

export default Race;