import instance from ".";
import { SignupForm } from "../models";
import { SigninForm } from "../models";

export const signup = (data: SignupForm) => {
    const uri = "/auth/signup"
    return instance.post(uri, data)
}

export const signin = (data: SigninForm) => {
    const uri = "/auth/login"
    return instance.post(uri, data)
}
