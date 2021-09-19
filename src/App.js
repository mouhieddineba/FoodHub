import React, { useEffect, useState } from 'react'
import './App.css'
import Recipe from './Recipe'

const App = () => {
  const APP_ID = '87d099bd'
  const APP_KEY = '60717f2ca9908ec97fc4016c5008ae52'

  const [recipes, setRecipes] = useState([])
  const [search,setSearch]= useState('')
  const [query,setQuery] = useState('chicken')

  useEffect(() => {
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    .then(response =>response.json())
    .then(data =>{
      setRecipes(data.hits)
    })
}, [query])


  const updateSearch = e=>{
    setSearch(e.target.value)
  }

  const getSearch = e=>{
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }

  return (
    <div className='App'>
      <form onSubmit={getSearch} className='search-form'>
        <input type='text' className='search-bar' value={search} onChange ={updateSearch} />
        <button className='search-button'>Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          type1={recipe.recipe.cuisineType}
          type2={recipe.recipe.dishType}
          type3={recipe.recipe.mealType}
          time={recipe.recipe.totalTime}
        />
      ))}
      </div>
    </div>
  )
}

export default App
