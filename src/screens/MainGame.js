import '../App.css';
import energydrinks from '../energydrinks';
import { useEffect, useState } from 'react';
import { Button, Paper, Stack, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import logo from '../assets/logo.png'
import { db } from '../firebase';
import {docRef, setDoc, doc, getDoc} from '@firebase/firestore';

function MainGame() {

    const [drinkOne, setDrinkOne] = useState({});
    const [drinkTwo, setDrinkTwo] = useState({});
    const [highscoreList, setHighscoreList] = useState([]);
    const [winnerFinal, setWinnerFinal] = useState({});
    const [drinksLeft, setDrinksLeft] = useState(96)
    const [fallback, setFallback] = useState()

    useEffect(() => {
        setDrinkOne(energydrinks[0][98])
        setDrinkTwo(energydrinks[0][97])
    }, [highscoreList]);

    const getDrinks = (winner, position) => {

        if (position === 1) {
            setDrinkOne(winner);
            setFallback(drinkTwo);
            setDrinkTwo(energydrinks[0][drinksLeft])
            setWinnerFinal(winner)
        } else if (position === 2) {
            setDrinkTwo(winner);
            setFallback(drinkOne);
            setDrinkOne(energydrinks[0][drinksLeft])
            setWinnerFinal(winner)
        }
        setDrinksLeft(drinksLeft - 1)
        console.log(drinksLeft)
    }

    const goBack = () => {
        setDrinkOne(fallback);
    }

    const handleSubmitData = async () => {
        const docRef = doc(db, "likes", "favorites");
        const docSnap = await getDoc(docRef);
      
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            handleSubmit(docSnap.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            alert('EI KÄYTTÄJÄÄ');
        }
      
      }

    const handleSubmit = async (data) =>{
        console.log(data);
        const docRef = doc(db, "likes", "favorites");
              const payload = {
                  liked: [
                    ...data.liked, winnerFinal.name
                  ]
              };
              console.log(payload, docRef)
              await setDoc(docRef, payload);
      }




    return (
        <div className='App'>
            
            {
                drinksLeft === 0
                    ? <div>
                        <img alt='' src={logo}  style={{height: '10%'}}/>
                        <Typography variant='h4'style={{color:'white'}}>Drinks left: {drinksLeft}</Typography>
                        <Typography style={{color:'white'}}>{`Your favorite drink is ${winnerFinal.name}`}</Typography>
                        <Button onClick={handleSubmitData}>Submit your favorite</Button>
                    </div>
                    : <div >
                        <img alt='' src={logo} style={{height: '10%'}}/>
                        <h1 style={{color:'white'}}>Drinks left: {drinksLeft}</h1>
                        <Stack direction="row">
                            <Stack direction="column" style={{marginRight: 5}}>
                                <Paper onClick={() => getDrinks(drinkOne, 1)} style={{ width: 200, height: 250 }}>
                                    <img style={{ height: '100%' }} src={drinkOne.pic} alt='' />
                                </Paper>
                                <Typography variant='h5' style={{color:'white', maxWidth: 180, height: 150 }}>{drinkOne.name}</Typography>

                            </Stack>
                            <Stack direction="column" style={{marginLeft: 5}}>
                                <Paper onClick={() => getDrinks(drinkTwo, 2)} style={{ width: 200, height: 250 }}>
                                    <img style={{ height: '100%' }} src={drinkTwo.pic} alt='' />
                                </Paper>
                                <Typography variant='h5' style={{ color:'white', maxWidth: 180, height: 80 }}>{drinkTwo.name}</Typography>

                            </Stack>
                        </Stack>
                        <Button startIcon={<ArrowBackIcon />} variant='contained' onClick={goBack}>Peru valinta</Button>
                    </div>
            }
        </div>
    );
}


export default MainGame;
