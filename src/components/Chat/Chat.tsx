import React, {ChangeEvent, useContext, useState} from 'react';
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Avatar, Button, Container, Grid, TextField} from "@mui/material";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {AppCircularProgress} from "../AppCircularProgress";
import firebase from "firebase/compat/app";

export const Chat = () => {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [message, setMessage] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    const onMessageChange = (event:ChangeEvent<HTMLInputElement>) => setMessage(event.currentTarget.value)

    const onSendMessageClick =  async () => {
        firestore.collection('messages').add({
            uid:user?.uid,
            displayName:user?.displayName,
            photoURL:user?.photoURL,
            text:message,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMessage('')
    }

    if (loading) {
        return <AppCircularProgress/>
    }

    return (
        <Container>
            <Grid container
                  justifyContent={"center"}
                  style={{height: window.innerHeight - 50, marginTop: 20}}>
                <div style={{width: '80%', height: '60vh', border: '1px solid gray', overflowY: 'auto'}}>
                    {messages?.map(message =>
                        <div style={{
                            margin: 10,
                            border: user?.uid === message.uid ? '2px solid green' : '2px dashed red',
                            marginLeft: user?.uid === message.uid ? 'auto' : '10px',
                            width: 'fit-content',
                            padding: 5,
                        }}>
                            <Grid container>
                                <Avatar src={message.photoURL}/>
                                <div>{message.displayName}</div>
                            </Grid>
                            <div>{message.text}</div>
                        </div>
                    )}
                </div>
                <Grid
                    container
                    direction={"column"}
                    alignItems={"flex-end"}
                    style={{width: '80%'}}
                >
                    <TextField
                        fullWidth
                        variant={"outlined"}
                        value={message}
                        onChange={onMessageChange}
                    />
                    <Button onClick={onSendMessageClick} variant={"outlined"}>Отправить</Button>
                </Grid>
            </Grid>
        </Container>
    );
};