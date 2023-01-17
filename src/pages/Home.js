import React, { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from '@tanstack/react-query';
import Axios from "axios";

export const Home = () => {
    const { data: catData } = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) =>
            res.data);
    }, []);

    const { username } = useContext(AppContext)

    return (
        <div>
            <h1> This is a home page and the user is {username} </h1>
            <p> {catData.fact} </p>
        </div>
    );
}