import React, { useState } from 'react';
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography} from '@mui/material';
import { CameraAlt as CameraAltIcon } from '@mui/icons-material';
import {VisuallyHiddenInput} from '../components/style/stylescomponent';

const Login = () => {
    const [isLogin, Setlogin] = useState(true);
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    const togglelogin = () => Setlogin((prev => !prev));

    const usernamehandler = (e) => {
        setusername(e.target.value);
    };

    const passwordhandler = (e) => {
        setpassword(e.target.value);
    };

    const handlerchange = (e) => {
        e.preventDefault();
        console.log('UserName:-', setusername);
        console.log('Password:-', setpassword);

        setusername('');
        setpassword('');
    };

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
                    <form onSubmit={handlerchange}>
                        <form style={{
                            width: "100%",
                            marginTop: "1rem",
                        }}>
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
                    }}>
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
                            />

                            <IconButton
                                sx={{
                                    position: "absolute",
                                    bottom: "0",
                                    right: "0",
                                    color: "white",
                                    bgcolor: "rgba(0, 0, 0, 0.5)",
                                    ":hover":{
                                        bgcolor: "rgba(0, 0, 0, 0.7)",
                                    },
                                }}
                                component="label"
                            >
                               <>
                                    <CameraAltIcon />
                                    <VisuallyHiddenInput type='file'/>
                               </>
                            </IconButton>
                        </Stack>

                         <TextField 
                            required
                            fullWidth
                            label="Name"
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField 
                            required
                            fullWidth
                            label="Bio"
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField 
                            required
                            fullWidth
                            label="Username"
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField 
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            margin="normal"
                            variant="outlined"
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
                                Lognin Instead
                        </Button>
                    </form>
                </>

            )}
        </Paper>
    </Container>
  )
}

export default Login;