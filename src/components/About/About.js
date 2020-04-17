import React from 'react';
import ReactMarkdown from 'react-markdown'

export default function About() {
    const input = `# h1 About Us
    ## h2 Nourish and Lift
    ### h3 Our Goal
    Our goal is to make health and fitness attainable, affordable and approachable for the everyday person. You’ll find super exciting workouts, superstar stretches and recipeis that will keep your palette fragant yet healthy. But no matter where you join or what you do, the our workouts and recipies are built around the essentials of healthy living.
    Stop letting food and exercise run your life and start living it with energy and vitality. By making time and bringing back regular cooking, you can have the power to change our relationship with overly processed foods.
    You can be in the best shape of your life, AND lose extra pounds and inches.
    Good luck!
    Any questions, please contact us on -
    Email - info@nourishandlift.com
    Instagram - Nourishandlift
    Twitter - Nourishandlift`
    return (

        <ReactMarkdown source={input} />  
        
    );
}