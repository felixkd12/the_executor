import React, { useContext } from "react";
import {ChangeProfile} from "../components/ChangeProfile";
import { AppContext } from "../App"

export const Profile = () => {
    const {username} = useContext(AppContext);
    return (
        <div> Profile is {username} 
            <ChangeProfile/>
        
        </div>
    );
}