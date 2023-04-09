import instance from ".";
import { SignupForm } from "../models";

export const signup = (data: SignupForm) => {
    const uri = "/users"
    return instance.post(uri, data)
}
