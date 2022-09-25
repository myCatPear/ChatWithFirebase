import React, {useContext, useEffect} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {AppCircularProgress, AppRouter, Navbar} from "components";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

function App() {
    const {auth} = useContext(Context)
    const [user, loading] = useAuthState(auth)

    if (loading) {
        return <AppCircularProgress/>
    }

    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
