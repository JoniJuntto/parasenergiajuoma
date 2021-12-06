import '../App.css';
import energydrinks from '../energydrinks';
import { useEffect, useState } from 'react';
import { Button, Paper, Stack, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import logo from '../assets/logo.png'

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




    return (
        <div className='App'>
            
            {
                drinksLeft === 0
                    ? <div>
                        <img alt='' src={logo}  style={{height: '10%'}}/>
                        <h1 style={{color:'white'}}>Drinks left: {drinksLeft}</h1>
                        <h1 style={{color:'white'}}>{`Your favorite drink is ${winnerFinal.name}`}</h1>
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
