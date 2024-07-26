import { Class } from '../types'

const Class = (page: Class) => {
  const savingThrows = page.saving_throws.map(savingThrow => savingThrow.name)

  const proficiencies = page.proficiencies.map(proficiency => proficiency.name).filter(proficiency => !proficiency.includes('Saving'))

  return (
    <>
      <p>Skill Choices: {page.proficiency_choices[0].desc}</p>
      <p>Saving Throws: {savingThrows.join(', ')}</p>
      <p>Proficiencies: {proficiencies.join(', ')}</p>
    </>
  )
}

export default Class;