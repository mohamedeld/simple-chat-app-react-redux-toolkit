import * as Yup from "yup";

export const signUpValidation = Yup.object({
    name:Yup.string().required("name is required").matches(/^[a-zA-Z_ ]*$/,"No special characters allowed").min(2,"Name must between 2 and 16 characters").max(16,"Name must between 2 and 16 characters"),
    email:Yup.string().required("Email address is required").email("Invalid email address."),
    status:Yup.string().required("status is required").max(64,"status must be less than 64 characters"),
    password:Yup.string().required("Password is required").min(6,"password should be at least 6 characters").max(56,"password should be not greater than 56 characters")
})

export const loginValidation = Yup.object({
    email:Yup.string().required("Email address is required").email("Invalid email address."),
    password:Yup.string().required("Password is required").min(6,"password should be at least 6 characters").max(56,"password should be not greater than 56 characters")
})