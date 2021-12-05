import logo from './logo.svg';
import './App.css';
import energydrinks from './energydrinks';
import { useEffect, useState } from 'react';
import { db } from "./firebase";
import { collection, addDoc, doc, getDoc, onSnapshot } from "@firebase/firestore";
import { Paper, Stack } from '@mui/material';

function App() {

  const [drinkOne, setDrinkOne] = useState({});
  const [drinkTwo, setDrinkTwo] = useState({});
  const [highscoreList, setHighscoreList] = useState([]);
  const [winnerFinal, setWinnerFinal] = useState({});
  const [drinksLeft, setDrinksLeft] = useState(96)

  useEffect(() => {
    setDrinkOne(energydrinks[0][98])
    setDrinkTwo(energydrinks[0][97])
  }, [highscoreList]);

  const getDrinks = (winner, position) => {

    if (position === 1) {
      setDrinkOne(winner);
      setDrinkTwo(energydrinks[0][drinksLeft])
      setWinnerFinal(winner)
    } else if (position === 2) {
      setDrinkTwo(winner)
      setDrinkOne(energydrinks[0][drinksLeft])
      setWinnerFinal(winner)
    }
    setDrinksLeft(drinksLeft - 1)
    console.log(drinksLeft)



  }




  return (
    <div className='App'>
      <h1>Drinks left: {drinksLeft}</h1>
      {
        drinksLeft === 0
          ? <div>
              <h1>{`your favorite drink is ${winnerFinal.name}`}</h1>
            </div>
          : <div>
            <Stack direction="row">
                <Stack direction="column">
                  <Paper onClick={() => getDrinks(drinkOne, 1)}  style={{width: 200, height: 250}}>
                    <img style={{height:'100%'}}  src={drinkOne.pic} alt='' />
                    </Paper>
                    <h1 style={{maxWidth: 180}}>{drinkOne.name}</h1>
                  
                </Stack>
                <Stack direction="column">
                  <Paper  onClick={() => getDrinks(drinkTwo, 2)} style={{width: 200, height: 250}}>
                    <img style={{height:'100%'}} src={drinkTwo.pic} alt='' />
                    </Paper>
                    <h1 style={{maxWidth: 180}}>{drinkTwo.name}</h1>
                  
                </Stack>
              </Stack>
            </div>
      }
    </div>
  );
}


export default App;
