import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth, database } from '../firebase.config';
import { ref, set } from 'firebase/database';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = (): JSX.Element => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [fullName, setFullName] = useState<string>("");
    const [phone, setPhone] = useState<number>();
    const [isLoading, setIsLoading] = useState(false);

    const formSubmit = () => {
        setIsLoading((prev) => prev = !prev);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                set(ref(database, 'users/' + userCredential.user.uid), {
                    name: fullName,
                    email: email,
                    phone_number: phone,
                }).then(() => {
                    // Immediately sets a local storage of the id of the user. This is to enables the dashboard retrieve the details of a particular user using their id that we can now get from local storage.
                    window.localStorage.setItem("id", userCredential.user.uid);
    
                    // The user is navigated to the dashboard once the collection in the database has been created.  
                    alert("User created successfully!");
                    
                }).catch((error) => {
                    console.log(error.message);
                })            
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                alert(errorMessage);
            })
            .finally(() => {
                setIsLoading((prev) => prev = !prev)
            });
    }

    return (

        <div 
            style={{
                margin: "auto", 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "center", 
                alignContent: "center",
                width: "40%",
                marginTop: "50px",
            }}>
            <Stack >

                <Stack>
                    <p>Full name</p>
                    <TextField id="outlined-basic" label="Full name" variant="outlined" value={fullName} onChange={(event) => setFullName(event.target.value)} />
                </Stack>

                <Stack>
                    <p>Email</p>
                    <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(event) => setEmail(event.target.value)} />
                </Stack>

                <Stack>
                    <p>Phone Number</p>
                    <TextField id="outlined-basic" label="Phone number" variant="outlined" type='phone' value={phone} onChange={(event) => setPhone(Number(event.target.value))} />
                </Stack>
                
                <Stack>
                    <p>Password</p>
                    <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(event) => setPassword(event.target.value)} />
                </Stack>
                
                <Button variant="outlined"  style={{marginTop: "30px", paddingBottom: "15px", paddingTop: "15px"}} color="primary" onClick={() => formSubmit()}>{isLoading ? "Creating..." : "Register"}</Button>
            </Stack>
            <p style={{textAlign: "center"}}>Already have an account? <Link to="/">Login</Link></p>
        </div>
    );
};

export default Register;