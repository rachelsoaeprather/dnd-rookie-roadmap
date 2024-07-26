import { Ability } from '../types'

const Ability = (page: Ability) => {
  const descriptions = page.desc.map((desc, index) => <p key={index} >{desc}</p>);

  return (
    <>
      {descriptions}
    </>
  )  
}

export default Ability;