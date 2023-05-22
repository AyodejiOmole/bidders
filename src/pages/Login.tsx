import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from '../firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export interface User {
    name: string;
    age: number;
    address: string;
    dob: Date;
}

const Login = (): JSX.Element => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);

    const loginUser = () => {
        setIsLoading((prev) => prev = !prev);
        signInWithEmailAndPassword(auth, email, password) 
        .then((userCredential) => {
            // Immediately sets a local storage of the id of the user. This is to enable the dashboard retrieve the details of a particular user using their id that we can now get from local storage.
            window.localStorage.setItem("id", userCredential.user.uid);

            console.log(userCredential.user.uid);            
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        })
        .finally(() => {
            setIsLoading((prev) => prev = !prev)
        });
    }

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
                
                <Button 
                    variant="outlined" 
                    style={{marginTop: "30px", paddingBottom: "15px", paddingTop: "15px"}} 
                    color="primary" 
                    onClick={() => loginUser()}>
                        {isLoading ? "Processing..." : "Login"}
                </Button>
            </Stack>
            <p style={{textAlign: "center"}}>Don't have an account yet? <Link to="/register">Sign Up</Link></p>
        </div>
    );
};

export default Login;