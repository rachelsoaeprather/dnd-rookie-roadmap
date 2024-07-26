export type Page = {
  index: string,
  name: string
}

export type Ability = Page & {
  desc: string[]
}

export type Skill = Page & {
  desc: string[],
}

export type Rule = Page & {
  desc: string
}

export type Race = Page & {
  age: string,
  alignment: string
}

export type Class = Page & {
  proficiency_choices: {
    desc: string
  }[],
  saving_throws: {
    name: string
  }[],
  proficiencies: {
    name: string
  }[],

}

export type Response = {
  [key: string]: string | Response
}

export type setError = {
  setError: (value: React.SetStateAction<{}>) => void
}