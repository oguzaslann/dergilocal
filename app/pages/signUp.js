import React, { useState } from 'react';
import axios from 'axios';

import { Area } from '../../components/Area';
import { Button } from '../../components/Button';
import { Label } from '../../components/Label';
import { Password } from '../../components/Password';
import { Text } from '../../components/Text';


const SignUp = (props) => {
    
    const userState = {
        username    : '',
        password    : '',
        email       : '',
        nameSurname : ''
    }

    const [user, setUser] = useState(userState);

    const submitButton = (e) => {
            axios.post('http://localhost:8000/signUp', user).then((res) => {
                res.data.success ? alert("Oldu") : alert(res.data.message);
                
            }).catch((err) =>{
                console.log("Back err: " + err);   
            });
    }

    return(
    <Area>
    <Label>Sign Up</Label>
    <Text value={user.username} onChange= { (text) => { 
        setUser({
            ...user, 
            username: text });
    }}></Text>
    <Password value={user.password} onChange= { (text) => { 
        setUser({ 
            ...user,
            password: text });
    }}></Password>
    <Text value={user.email} onChange= { (text) => { 
        setUser({ 
            ...user,
            email: text });
    }}></Text>
    <Text value={user.nameSurname} onChange= { (text) => { 
        setUser({ 
            ...user,
            nameSurname: text });
    }}></Text>
    <Button onClick={ () => {
        submitButton()}}> Kaydol </Button>
    </Area>
    );
}

export default SignUp;