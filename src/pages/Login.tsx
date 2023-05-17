import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useState } from "react";
// import { useState, useEffect } from 'react';

export interface User {
    name: string;
    age: number;
    address: string;
    dob: Date;
}

const Login = (): JSX.Element => {
    // const {name, age} = props;/
    const [email, setEmail] = useState<string | null>();
    const [password, setPassword] = useState<string | null>();

    return (

        <div style={{
                margin: "auto", 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "center", 
                alignContent: "center",
                width: "40%",
                marginTop: "170px",
                
            }}>
            <Stack spacing={2}>

                <Stack>
                    <p>Email</p>
                    <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(event) => setEmail(event.target.value)} />
                </Stack>
                
                <Stack>
                    <p>Password</p>
                    <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(event) => setPassword(event.target.value)} />
                </Stack>
                
                <Button variant="outlined" style={{marginTop: "30px", paddingBottom: "15px", paddingTop: "15px"}} color="primary" onClick={() => window.alert(`${email} & ${password}`)}>Login</Button>
            </Stack>
            <p style={{textAlign: "center"}}>Don't have an account yet? <a>Sign Up</a></p>
        </div>
    );
};

export default Login;