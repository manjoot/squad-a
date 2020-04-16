import React from "react"
import axios from "axios"
import Cards from "./Cards"

function ExerciseAPI(props){

    const exerciseID = props.exID
    const [exerciseName, setExerciseName] = React.useState()
    const [exerciseCategory, setExerciseCategory] = React.useState()
    const [exerciseDescription, setExerciseDescription] = React.useState()
    const [exerciseImage, setExerciseImage] = React.useState()

    React.useEffect(() => {
        axios.get(`https://wger.de/api/v2/exerciseinfo/${exerciseID}/`).then(response => {
            console.log(response.data.name)
            setExerciseName(response.data.name)
        })
    }, [])

    React.useEffect(() => {
        axios.get(`https://wger.de/api/v2/exerciseinfo/${exerciseID}/`).then(response => {
            console.log(response.data.category.name)
            setExerciseCategory(response.data.category.name)
        })
    }, [])

    React.useEffect(() => {
        axios.get(`https://wger.de/api/v2/exerciseinfo/${exerciseID}/`).then(response =>{
            console.log(response.data.description)
            setExerciseDescription(response.data.description)
        })
    }, [])

    React.useEffect(() => {
        axios.get(`https://wger.de/api/v2/exerciseimage/?exercise=${exerciseID}`).then(response => {
            console.log(response.data.image)
            setExerciseImage(response.data.results[0].image)
        })
    }, [])


    return(
        <Cards 
        nameOfExercise={exerciseName}
        exerciseCat={exerciseCategory}
        exerciseThum={exerciseImage}
        titleOfExercise=""
        shortDescription=""
        longDescription={exerciseDescription}
        >

        </Cards>
    )
}

export default ExerciseAPI