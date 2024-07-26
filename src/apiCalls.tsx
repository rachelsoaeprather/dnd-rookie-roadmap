const getData = async (directory: string, file: string) => {
  const response = await fetch(`https://www.dnd5eapi.co/api/${directory}/${file}`)
  if(!response.ok) {
    throw new Error(`There was an error: ${response.status} ${response.statusText}`)
  }
  const data = await response.json();
  return data
}

export default getData