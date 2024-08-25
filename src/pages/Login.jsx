import React, { useState } from 'react';
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography} from '@mui/material';
import { CameraAlt as CameraAltIcon } from '@mui/icons-material';
import {VisuallyHiddenInput} from '../components/style/stylescomponent';
import {usernameValidator} from '../utils/validator';
import {useFileHandler} from '../components/usefilehandler';


const Login = () => {
    const [isLogin, Setlogin] = useState(true);
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [name, Setname] = useState('');
    const [bio, Setbio] = useState('');
    const [usernameError, setusernameError] = useState(null);

    const togglelogin = () => Setlogin((prev => !prev));

    const usernamehandler = (e) => {
        const newusername = e.target.value;
        setusername(newusername);
        const error = usernameValidator(newusername);
        setusernameError(error);
    };

    const passwordhandler = (e) => {
        setpassword(e.target.value);
    };

    const namehandler = (e) => {
        e.preventDefault();
        Setname(e.target.value);
    };

    const biohandler = (e) => {
        e.preventDefault();
        Setbio(e.target.value);
    };

    const handlerchange = (e) => {
        e.preventDefault();
        console.log('UserName:-', setusername);
        console.log('Password:-', setpassword);

        setusername('');
        setpassword('');
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        console.log('Name', Setname);
        console.log('Bio', Setbio);
        console.log('UserName', setusername);
        console.log('Password', setpassword);

        Setname('');
        Setbio('');
        setusername('');
        setpassword('');
    };

    const avatar = useFileHandler("single");

  return (
    <Container 
        component={"main"} 
        maxWidth="xs" 
        sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}
    >
        <Paper
            elevation={3}
            sx={{
                padding: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {isLogin ? (
                <>
                    <Typography variant='h5'>Login</Typography>
                    <form>
                        <form style={{
                            width: "100%",
                            marginTop: "1rem",
                        }}
                        onSubmit={handlerchange}
                        >
                            <TextField 
                                required
                                fullWidth
                                label="Username"
                                margin="normal"
                                variant="outlined"
                                value={username}
                                onChange={usernamehandler}
                            />

                            <TextField 
                                required
                                fullWidth
                                label="Password"
                                type="password"
                                margin="normal"
                                variant="outlined"
                                value={password}
                                onChange={passwordhandler}
                            />
                            <Button
                                sx={{
                                    marginTop: "1rem",
                                }}
                                variant='contained'
                                color='primary'
                                type='submit'
                                fullWidth
                                >
                                Login
                            </Button>

                            <Typography textAlign={"center"}>Or</Typography>

                            <Button
                                sx={{
                                    marginTop: "1rem",
                                }}
                                fullWidth
                                variant='text'
                                onClick={togglelogin}
                                >
                                    Sign Up Instead
                            </Button>
                        </form>
                    </form>
                </>
            ) : (
                <>
                    <Typography variant='h5'>Sign Up</Typography>
                    <form style={{
                        width: "100%",
                        marginTop: "1rem",
                    }}
                    onSubmit={handleSignUp}
                    >
                        <Stack 
                            position={"relative"}
                            width={"10rem"}
                            margin={"auto"}
                        >
                            <Avatar
                                sx={{
                                    width: "10rem",
                                    height: "10rem",
                                    objectFit: "contain",
                                }}
                                src={avatar.preview}
                            />
                            <IconButton
                                sx={{
                                   position: "absolute",
                                   bottom: "0",
                                   right: "0",
                                   color: "white",
                                   bgcolor: "rgba(0, 0, 0, 0.5)",
                                   ":hover": {
                                    bgcolor: "rgba(0, 0, 0, 0.7)",
                                   },
                                }}
                                component="label"
                            >
                                <>
                                    <CameraAltIcon/>
                                    <VisuallyHiddenInput type='file' onChange={avatar.changeHandler}/>
                                </>
                            </IconButton>
                        </Stack>

                         <TextField 
                            required
                            fullWidth
                            label="Name"
                            margin="normal"
                            variant="outlined"
                            value={name}
                            onChange={namehandler}
                        />

                        <TextField 
                            required
                            fullWidth
                            label="Bio"
                            margin="normal"
                            variant="outlined"
                            value={bio}
                            onChange={biohandler}
                        />

                        <TextField 
                            required
                            fullWidth
                            label="Username"
                            margin="normal"
                            variant="outlined"
                            value={username}
                            onChange={usernamehandler}
                            error={!!usernameError}
                            helperText={usernameError}
                        />

                        <TextField 
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            margin="normal"
                            variant="outlined"
                            value={password}
                            onChange={passwordhandler}
                        />
                        <Button
                            sx={{
                                marginTop: "1rem",
                            }}
                            variant='contained'
                            color='primary'
                            type='submit'
                            fullWidth
                            >
                            Sign Up
                        </Button>

                        <Typography textAlign={"center"}>Or</Typography>

                        <Button
                            sx={{
                                marginTop: "1rem",
                            }}
                            fullWidth
                            variant='text'
                            onClick={togglelogin}
                            >
                                Login Instead
                        </Button>
                    </form>
                </>
            )}
        </Paper>
    </Container>
  )
}

export default Login;