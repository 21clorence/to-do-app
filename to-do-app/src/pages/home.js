import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
    let navigate = useNavigate();
    const routeChange = () => {
        navigate(`otherPage`);
    }

    return (
        <div>
            <h1>Home</h1>
            <p>This is the home page.</p>
            <Button onClick={routeChange()}>
                navigate to other page
            </Button>
        </div>
    );

}

export default Home;