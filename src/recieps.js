import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title,calories,image,ingredience}) => {

    return(
        <div className={style.recipe}>
            <h1>Title {title}</h1>
            <ol>
               <li>
                   {ingredience.text}
               </li>
            </ol>
            <p>Calories {calories}</p>
            <img src={image}alt="" />
            
        </div>
    )
}





export default Recipe;
