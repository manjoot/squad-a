import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import WorkoutCard from '../Workout Page/Cards'
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    Paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  export default function CardGrid() {
    const classes = useStyles();

    return (
      <div className={classes.root}>

             <Grid container spacinng={3}>
            <Grid item xs={12} sm={4}>

            <WorkoutCard 
          nameOfExercise="Minestrone Soup"
          dateOfPublishing="Diet assists in eliminating 'Love Handles'"
          shortDescription="This budget minestrone is the classic Italian soup made with cannellini beans and broken up spaghetti."
          longDescription=
          
          {<ul>
              <li>1 tbsp olive oil</li>
              
              <li>1 onion, chopped</li>
              
              <li>2 carrots, peeled and chopped</li>
              
              <li>3 large celery sticks, chopped</li>
              
              <li>2 garlic cloves, finely chopped</li>
              
              <li>2 tbsp tomato purée</li>
              
              <li>400g tin chopped tomatoes</li>
              
              <li>1.2 litres/2 pints vegetable or chicken stock, made from stock cubes</li>

              <li>400g tin cannellini beans, drained and rinsed</li>
              
              <li>100g or 3½ of dried spaghetti, broken into short lengths</li>
              
              <li>¼ head green cabbage, finely shredded</li>
              
              <li>salt and freshly ground black pepper</li>
         
         
         
          </ul>}>

            </WorkoutCard>
             </Grid>

           <Grid item xs={12} sm={4}>
          <WorkoutCard 
          nameOfExercise="Green goddess smoothie bowl"
          dateOfPublishing="Diet targets Leg/Stomach Fat"
          shortDescription="Add a splash of colour to your morning with this vibrant breakfast bowl of blended avocado, spinach and nut butter, topped with fresh fruit and seeds"
          longDescription=

          {<ul>
              <li>2 Sliced Bananas</li>
              
              <li>1 Ripe Avocado, Stoned, Peeled and Chopped into chunks</li>
              
              <li>1 Small Ripe Mango,Stoned, Peeled and chopped into chunks</li>
              
              <li>100g of Spinach (fresh or frozen)</li>

              <li>250ml of Milk (unsweetened almond or coconut milk works well)</li>
              
              <li>1 Tablespoon of unsweetened Almond or Peanut Butter</li>
              
              <li>1 Tablespoon of clear Honey, Agave or Maple Syrup (optional)</li>
              
              <li>1 Tablespoon of Chia seeds!</li>
          </ul>}>

          </WorkoutCard>
           </Grid>

         <Grid item xs={12} sm={4}>
          <WorkoutCard 
          nameOfExercise="Pan-fried salmon"
          dateOfPublishing="Diet targets Mid-Section"
          shortDescription="Have a perfectly cooked salmon fillet, complete with crisp skin, ready in under 10 minutes."
          longDescription=
          
              {<ul>
                  <li>2x 150g Salmon Fillets (aboout 4cm thick), with skin on!</li>
                  
                  <li>Half a Tablespoon of Olive Oil</li>
                  
                  <li>20g of Unsalted Butter</li>
                  
                  <li>Half of a sliced Lemon, and make some juice out of it!</li>
              </ul>}>

            </WorkoutCard>
           </Grid>

           <Grid item xs={12} sm={4}>
          <WorkoutCard 
          nameOfExercise="Bone Broth"
          dateOfPublishing="Diet targets extra cellulite"
          shortDescription="Bone broth has become very popular recently, especially among health-conscious individuals."
          longDescription=
          
              {<ul>
                  <li>Bones and carcass of 1 chicken (we suggest starting with a whole roasted chicken)</li>
                  
                  <li>12 cups filtered Water</li>
                  
                  <li>2 Tablespoons of Apple Cider Vinegar</li>
                  
                  <li>1 generous pinch each Sea Salt and Black Pepper (plus more to taste)</li>

                  <li>Rosemary/Herbs</li>
                  
                  <li>1 Sliced Lemon</li>
              </ul>}>

            </WorkoutCard>
           </Grid>

           <Grid item xs={12} sm={4}>
          <WorkoutCard 
          nameOfExercise="Ancho Chicken and Avocado Tacos"
          dateOfPublishing="Assists in toning Fatty Arms"
          shortDescription="A devilishly good grilled chicken recipe that is smoky, sweet, hot and aromatic."
          longDescription=
          
              {<ul>
                  <li>2 dried Ancho Chillies, finely chopped</li>
                  
                  <li>4 Tablespoons of Olive Oil</li>
                  
                  <li>1 Chopped up Onion</li>
                  
                  <li>8 Chopped up Garlic Cloves</li>

                  <li>24 heaped Tablespoon of Tomato purée</li>
                  
                  <li>2 oranges, juiced!</li>
                  
                  <li>45ml of Red Wine Vinegar</li>
                  
                  <li>1 Tablespoon of Chipotle Paste</li>
              </ul>}>

            </WorkoutCard>
           </Grid>

           <Grid item xs={12} sm={4}>
          <WorkoutCard 
          nameOfExercise="Broccoli and Sage Pasta"
          dateOfPublishing="Helps to eliminate belly fat!"
          shortDescription="This healthy vegetarian pasta dish just needs to be thrown together and it's ready in a flash."
          longDescription=
          
            {<ul>
              <li>140g of Quick-Cook Spaghetti</li>
              
              <li>140g long-stem broccoli, trimmed and cut into 5cm lengths</li>
              
              <li>3 Tablespoons of Olive Oil</li>
              
              <li>2 shallots, sliced</li>

              <liv>1 Garlic Clove, finely chopped!</liv>

              <li>¼ Teaspoon crushed chillies</li>
            </ul>}>

            </WorkoutCard>
           </Grid>

           {/*--------------------3 EXTRA BELOW --------------------------------- */}

           <Grid item xs={12} sm={4}>
          <WorkoutCard 
          nameOfExercise="Feta and Kale loaded Sweet Potato"
          dateOfPublishing="Helps to eliminate a Fatty Back!"
          shortDescription="Serve up this sweet potato packed with feta, chickpeas and kale for a healthy lunch or dinner. "
          longDescription=
          
            {<ul>
              <li>2 Sweet Potatoes</li>
              
              <li>210g can chickpeas, drained</li>
              
              <li>1 small red onion, thinly sliced</li>
              
              <li>2 tbsp red wine vinegar</li>

              <liv>30g feta, cut into small cubes</liv>

              <li>1 tbsp extra virgin olive oil</li>

              <li>pinch chilli flakes</li>
              
              <li>100g kale</li>

              <liv>1 tbsp pumpkin seeds, toasted</liv>

              <li>80g bag rocket</li>

            </ul>}>

            </WorkoutCard>
           </Grid>

           {/*--------------------2 EXTRA BELOW --------------------------------- */}



           <Grid item xs={12} sm={4}>
          <WorkoutCard 
          nameOfExercise="Shredded Wheat Breakfast Bars"
          dateOfPublishing="Helps to eliminate unwanted side fat!"
          shortDescription="Whip up a batch of our delicious Shredded Wheat breakfast bars and start your day the tasty way."
          longDescription=
          
            {<ul>
              <li>2	Shredded Wheat Original biscuit (45g), crumbled</li>
              
              <li>20 g	jumbo porridge oats</li>
              
              <li>150 g	dried apricots</li>
              
              <li>75 g	raisins</li>

              <liv>4 tbsp	orange or apple juice</liv>

              <li>25 g	blanched hazelnuts and almonds</li>

              <li>3 tbsp	sunflower seeds</li>
              
            </ul>}>

 
            </WorkoutCard>
           </Grid>

            
            {/*--------------------1 EXTRA BELOW --------------------------------- */}

            <Grid item xs={12} sm={4}>
          <WorkoutCard 
          nameOfExercise="Asian prawn and quinoa salad"
          dateOfPublishing="Assists in keeping arms Toned!"
          shortDescription="This fresh salad is 3 of your 5-a-day. With zingy lime and a hit of chilli heat."
          longDescription=
          
            {<ul>
              <li>60g quinoa</li>
              
              <li>150g cooked shelled prawns</li>
              
              <li>1 small avocado, stoned and sliced</li>
              
              <li>¼ cucumber, halved and sliced</li>

              <liv>50g watercress</liv>

              <li>100g cherry tomatoes, halved</li>
              
            </ul>}>

 
            </WorkoutCard>
           </Grid>








          </Grid>
      </div>
  );
}