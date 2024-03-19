import * as Yup from 'yup'

export const signInSchema= Yup.object({
    email:Yup.string().email().required("Please Enter your email"),
    password:Yup.string().min(6).required("Please Enter your password"),
})

export const createUserSchema= Yup.object({
    name:Yup.string().min(3).max(25).required("Enter your name"),
    email:Yup.string().email().required("Please Enter your email"),
    password:Yup.string().min(6).required("Please Enter your password"),
    confirm_password:Yup.string().required().oneOf([Yup.ref('password'),null], "Password must match"),
})