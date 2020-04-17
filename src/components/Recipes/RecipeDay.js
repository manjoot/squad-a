import React from "react"
import axios from "axios"
import RecipeReviewCard from "./RecipeReviewCard"

function RecipesDay(props){

    const mealID = props.foodID
    const [mealName, setMealName] = React.useState("")
    const [instructions, setInstructions] = React.useState("")
    const [mealThumb, setMealThumb] = React.useState("")

    React.useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`).then(response => {
            setMealName(response.data.meals[0].strMeal)
        })
    }, [])

    React.useEffect(() => {
        if(mealID){
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`).then(response => {
            setInstructions(response.data.meals[0].strInstructions)

        })}
    }, [mealID])

    React.useEffect(() => { 
        if (mealID){
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`).then(response => {  
            setMealThumb(response.data.meals[0].strMealThumb)
        })}
    }, [mealID])

    if (mealID) {
        return (
          <div>
           <RecipeReviewCard 
                mealsName={mealName}
                mealImage={mealThumb}
                method={instructions}
            />
          </div>
        );
      }
      return <p>Plese wait for Recipes</p>;
} 

export default RecipesDay