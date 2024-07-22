import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const SignInButton = () => {
    return <Link to='/login'><Button color="inherit">Login</Button></Link>
};