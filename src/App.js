import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Recipe from './recieps'

const App = () => {


  const [recipe, setRecipe] = useState([]);

  const [searchvalue, setValue] = useState('')

  const [query, setQuery] = useState('');

  const APP_ID = '3cb4b91f';
  const APP_KEY = "82171a3ec40fe8050b5dc68f731026b0";

  

  //const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;


  const getReciepie = async () => {
    console.log("fetch loaded")
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`)
    const data = await response.json()
    //console.log(data.hits);
    setRecipe(data.hits)
    console.log(data.hits)
  }
  console.log("Reciepies is", recipe.map(rec => rec.recipe.ingredients[0].text))

  useEffect(() => {
   getReciepie()
  }, [query]);


const searchConent = e => {
  setValue(e.target.value)
  console.log(e.target.value)
}


const getSearch = e => {
  e.preventDefault();
  setQuery(searchvalue)
  setValue('')
}

  return(
    <div className="App">
      <h1>Hello React.. This is updated APP</h1>
      <form onSubmit={getSearch} className="search-form">
        <input  className="search-bar" type="text" value={searchvalue}  onChange={searchConent}/>
        <button className="search-button" type="submit">
          Search
          </button>
      </form>
      <div className="recipies">
      {recipe.map(recip => (
        <Recipe title={recip.recipe.label} 
        calories={recip.recipe.calories} 
        image={recip.recipe.image}  
        ingredience={recip.recipe.ingredients[0]}/>
      ))}
      </div>
    </div>
  );

}

export default App;
