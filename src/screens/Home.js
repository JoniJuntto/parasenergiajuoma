import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom'

export default function Home(){
    return(
        <div>
            <Typography style={{marginTop: 40, marginBottom: 50}} variant='h3'>Energiajuoma vertailu</Typography>
            <Button component={Link} to="/game" variant='contained'>Kokeile peliä!</Button>
            <Typography style={{marginTop: 50}} variant='h5'>Muiden suosituimpia energiajuomia:</Typography>
            <div>
                {
                    //Tähän mappaus suosituimmista juomista
                }
            </div>
        </div>
    );
}