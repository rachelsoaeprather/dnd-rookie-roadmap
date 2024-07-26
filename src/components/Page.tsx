import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import getData from '../apiCalls';
import Rule from './Rule';
import Ability from './Ability';
import Skill from './Skill';
import Class from './Class';
import Race from './Race';
import { Page } from '../types'

const Page = () => {
  const location = useLocation();
  const URL1 = location.pathname.split('/')[1];
  const URL2 = location.pathname.split('/')[2];
  const [page, setPage] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const PATHS: {[key: string]: string} = {
    'gameplay-basics': 'rule-sections',
    'abilities': 'ability-scores',
    'skills': 'skills',
    'races': 'races',
    'classes': 'classes'
  } as const

  useEffect(() => {
    const secondUrl = PATHS[URL1] === 'ability-scores' ? URL2.slice(0, 3) : URL2;
    async () => {
      try {
        const data = await getData(PATHS[URL1], secondUrl)
        setPage(data)
        setLoading(false)
      } catch(error) {
        setError(true)
      }
    }
  }, [])

  const renderPage = (path: string) => {
    switch(path) {
      case 'gameplay-basics':
        return <Rule page={page} />
      case 'abilities':
        return <Ability page={page} />
      case 'skills':
        return <Skill page={page} />
      case 'races':
        return <Race page={page} />
      case 'classes':
        return <Class page={page} />
    }
  }

  return (
    <>
      {
        loading ? 
        <main>
          <h2 className='main__heading main__loading'>Loading...</h2>
        </main>
        
        :
        <main>
          <h2 className='main__heading'>{page.name}</h2>
          <div className='main__divider'></div>
          {renderPage(URL1)}
        </main>
      }
    </>
  )
}

export default Page;

