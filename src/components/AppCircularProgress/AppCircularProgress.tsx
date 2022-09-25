import React from 'react';
import {CircularProgress} from "@mui/material";
import style from './AppCircularProgress.module.scss'

export const AppCircularProgress = () => {
    return (
        <div className={style.circularProgress}>
            <CircularProgress/>
        </div>
    );
};