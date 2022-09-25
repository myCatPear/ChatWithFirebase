import React, {useContext} from 'react';
import {Box, Button, Toolbar, AppBar, Grid} from "@mui/material";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from 'utils/consts';
import style from './Project.module.scss'
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";

export const ProjectAppBar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    const onButtonLogoutClick = () => {
        auth.signOut()
    }
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Grid container justifyContent={"flex-end"}>
                        {user ?
                            <Button color="inherit" variant="outlined" onClick={onButtonLogoutClick}>Logout</Button>
                            :
                            <Button color="inherit" variant="outlined">
                                <NavLink to={LOGIN_ROUTE} className={style.projectAppBar__link}>Login</NavLink>
                            </Button>
                        }
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
