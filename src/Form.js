import React from "react";
import {useForm} from "react-hook-form";
import * as yup from 'yup';

export const Form = () => {

    const {register, handleSubmit} = useForm ()

    const schema = yup.object().shape({
        fullName: yup.string().required(),
        email: yup.string().email().required(),
        age: yup.number().positive().integer.min(18).required(),
        
    })
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <form onSubmit = {handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full Name" {...register("fullname")} />
            <input type="text" placeholder="Last Name" {...register("email")}/>
            <input type="number" placeholder="Age"{...register("age")}/>
            <input type="password" placeholder= "Password" {...register("password")}/>
            <input type="password" placeholder= "Confirm Password" {...register("confirmPassword")}/>
            <input type="submit" />
        </form>

    );
};