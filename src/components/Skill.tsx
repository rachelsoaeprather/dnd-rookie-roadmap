import { Skill } from '../types'

const Skill = ( page : Skill  ) => {
  const descriptions = page.desc.map((desc, index) => <p key={index}>{desc}</p>);
  
  return (
    <>
      {descriptions}
    </>
  )
}

export default Skill;
