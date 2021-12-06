import { Button, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { db } from '../firebase';
import { onSnapshot, collection, doc, getDoc } from "@firebase/firestore";
import logo from '../assets/logo.png'

export default function Home() {

    const [likes, setLikes] = useState([]);
    const [filtered, setFiltered] = useState({})

    const getLikes = async () => {
        const docRef = doc(db, "likes", "favorites");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document likes data:", docSnap.data());
            const likes = docSnap.data();
            console.log(likes.liked[0])
            setLikes(likes.liked);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }




useEffect(() => {
    getLikes();

}, []);

return (
    <div>
        <img alt='' src={logo} style={{ height: '20%' }} />
        <Typography style={{ marginTop: 40, marginBottom: 50, color: 'white' }} variant='h3'>Energiajuoma vertailu</Typography>
        <Button component={Link} to="/game" variant='contained'>Kokeile peliä!</Button>
        <Typography style={{ marginTop: 50, color: 'white' }} variant='h5'>Muiden suosituimpia energiajuomia:</Typography>
        <div>
            {likes.map((like) => (
                <div style={{ marginTop: 10 }}>
                    <Typography style={{ color: 'white' }} variant='h5'>{like}</Typography>
                </div>
            ))
            }
        </div>
    </div>
);
}