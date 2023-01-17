import React from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

export const Form = () => {

    const schema = yup.object().shape({
        fullName: yup.string().required("Your fullname is required"),
        email: yup.string().email().required(),
        age: yup.number().required(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required()

    });

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema), 
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full Name" {...register("fullname")} />
            <h1> {errors.fullName} </h1>
            <input type="text" placeholder="example@gmail.com" {...register("email")} />
            <input type="number" placeholder="Age"{...register("age")} />
            <input type="password" placeholder="Password" {...register("password")} />
            <input type="password" placeholder="Confirm Password" {...register("confirmPassword")} />
            <input type="submit" />
        </form>

    );
};