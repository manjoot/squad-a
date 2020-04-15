import React from "react"
import RecipeReviewCard from "./RecipeReviewCard"
import RecipesAPI from "./RecipesAPI"

function Recipes(){
    return(
        <div>
            <RecipeReviewCard></RecipeReviewCard>
            <RecipesAPI></RecipesAPI>
        </div>
    )
}

export default Recipes