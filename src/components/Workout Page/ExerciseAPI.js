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
            setExerciseName(response.data.name)
        })
    }, [])

    React.useEffect(() => {
        axios.get(`https://wger.de/api/v2/exerciseinfo/${exerciseID}/`).then(response => {
            setExerciseCategory(response.data.category.name)
        })
    }, [])

    React.useEffect(() => {
        axios.get(`https://wger.de/api/v2/exerciseinfo/${exerciseID}/`).then(response =>{
            var exDescription = response.data.description
            const regex = /<p>|<\/p>/gi;
            exDescription = exDescription.replace(regex, '')
            setExerciseDescription(exDescription)
        })
    }, [])

    React.useEffect(() => {
        axios.get(`https://wger.de/api/v2/exerciseimage/?exercise=${exerciseID}`).then(response => {
            setExerciseImage(response.data.results[0].image)
        })
    }, [])


    return(
        <Cards 
        nameOfExercise={exerciseName}
        exerciseCat={exerciseCategory}
        exerciseThum={exerciseImage}
        longDescription={exerciseDescription}
        >

        </Cards>
    )
}

export default ExerciseAPI