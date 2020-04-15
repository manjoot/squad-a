import React from "react"
import axios from "axios"
import RecipeReviewCard from "./RecipeReviewCard"

function RecipesAPI(props){

    const [mealName, setMealName] = React.useState("")
    const [instructions, setInstructions] = React.useState("")
    const [mealThumb, setMealThumb] = React.useState("")
    const [mealID, setMealID] = React.useState()

    React.useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`).then(response => {
            console.log(response.data.meals[0].idMeal)
            console.log(response.data.meals[0].strMeal)
            setMealName(response.data.meals[0].strMeal)
            setMealID(response.data.meals[0].idMeal)
        })
    }, [])

    React.useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`).then(response => {
            console.log(response.data.meals[0].strInstructions)
            console.log(response.data.meals[0].idMeal)
            setInstructions(response.data.meals[0].strInstructions)

        })
    }, [mealID])

    React.useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`).then(response => {
            console.log(response.data.meals[0].strMealThumb)
            console.log(response.data.meals[0].idMeal)    
            setMealThumb(response.data.meals[0].strMealThumb)
        })
    }, [mealID])

    return(
        <div>
            <RecipeReviewCard 
                mealsName={mealName}
                mealImage={mealThumb}
                method={instructions}
            />
        </div>
    )
} 
export default RecipesAPI