import React, { useState } from 'react';
import axios from 'axios';


import { Area } from '../../components/Area';
import { Button } from '../../components/Button';
import { Label } from '../../components/Label';
import { Password } from '../../components/Password';
import { Text } from '../../components/Text';

const Login = (props) => {
    
    const userState = {
        email       : '',
        password    : ''
    }

    const [user, setUser] = useState(userState);

    const submitButton = (e) => {
            axios.post('http://localhost:8000/login', user).then((res) => {
                if(res.data.success) {
                    alert(res.data.token);
                    localStorage.setItem('userToken', res.data.token);
                } else { 
                    alert(res.data.message);
                }
                
            }).catch((err) =>{
                console.log("Back err: " + err);   
            });
    }

    return(
    <Area>
    <Label>Login</Label>
    <Text value={user.email} onChange= { (text) => { 
        setUser({
            ...user, 
            email: text });
    }}></Text>
    <Password value={user.password} onChange= { (text) => { 
        setUser({ 
            ...user,
            password: text });
    }}></Password>
    <Button onClick={ () => {
        submitButton()}}> Giriş Yap </Button>
        <Button onClick={ () => {
            alert (localStorage.getItem('userToken'))}}> Storage </Button>
    </Area>
    );
}

export default Login;