import instance from ".";
import { SignupForm } from "../models";
import { SigninForm } from "../models";

export const signup = (data: SignupForm) => {
    const uri = "/users"
    return instance.post(uri, data)
}

export const signin = (data: SigninForm) => {
    const uri = "/signin"
    return instance.post(uri, data)
}
