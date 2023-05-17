import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = (): JSX.Element => {
    // const {name, age} = props;/
    const [email, setEmail] = useState<string | null>();
    const [password, setPassword] = useState<string | null>();
    const [fullName, setFullName] = useState<string | null>();
    const [phone, setPhone] = useState<number | null>();

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
                
                <Button variant="outlined" style={{marginTop: "30px", paddingBottom: "15px", paddingTop: "15px"}} color="primary" onClick={() => window.alert(`${email} & ${password}`)}>Register</Button>
            </Stack>
            <p style={{textAlign: "center"}}>Already have an account? <Link to="/"><a>Login</a></Link></p>
        </div>
    );
};

export default Register;