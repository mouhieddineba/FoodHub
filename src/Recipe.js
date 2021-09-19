import React from 'react'
import style from './Recipe.module.css'


const Recipe = ({title,calories,image,ingredients,type1,type2,type3,time}) =>{
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <div className={style.info}>
            <h3> Cusisine Type : {type1}</h3>
            <h3> Dish Type : {type2}</h3>
            <h3> Meal Type : {type3}</h3>
            <h3> Preparation Time : {time} min</h3>
            </div>
            <img className={style.image} src={image} alt="" />
            <div className={style.comp}>
            <h3>Ingredients :</h3>
            <ol className={style.list}>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <h3> Calories : {calories}</h3>
            </div>
            
        </div>
    )
}

export default Recipe