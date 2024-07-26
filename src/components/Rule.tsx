import { Rule } from '../types'

const Rule = ( page: Rule ) => {

  const formatSubheader = (phrase: string, index: number) => {
    const words = phrase.split(' ');
    const fixed = words.filter(word => !word.includes('#')).join(' ')
    return <p key={index} className='main--bold'>{fixed}</p>
  }

  const formatContent = () => {
    return page.desc.split('\n').filter(desc => desc).map((desc, index) => desc.includes('#') ? formatSubheader(desc, index) : <p key={index}>{desc}</p>)
  }

  return (
    <>
      {formatContent()}
    </>
  )
}

export default Rule;
