import React from "react"
import axios from "axios"

function RecipesAPI(props){

    const [mealName, setMealName] = React.useState("")
    const [instructions, setInstructions] = React.useState("")
    const [mealThumb, setMealThumb] = React.useState("")

    React.useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`).then(response => {
            setMealName(response.data.meals[0].strMeal)
            console.log(response.data.meals[0].strMeal)
        })
    }, [])

    React.useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`).then(response => {
            setInstructions(response.data.meals[0].strInstructions)
            console.log(response.data.meals[0].strInstructions)
        })
    }, [])

    React.useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`).then(response => {
            setMealThumb(response.data.meals[0].strMealThumb)
            console.log(response.data.meals[0].strMealThumb)
        })
    }, [])

    return(
        <div></div>
    )
} 
export default RecipesAPI