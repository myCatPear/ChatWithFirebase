import React, {useContext} from 'react';
import {Box, Button, Container, Grid} from "@mui/material";
import style from './Login.module.scss'
import {Context} from "../../index";
import firebase from "firebase/compat/app";

export const Login =  () => {
    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }
    return (
        <Container>
            <Grid container className={style.login__wrapper}>
                <Grid container className={style.login__main} justifyContent={'center'}>
                    <Box p={3}>
                        <Button variant={"outlined"} className={style.login__button} onClick={login}>Login with Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};