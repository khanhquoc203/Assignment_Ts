import { IUser, SigninForm, SignupForm } from "../interfaces/user";
import instance from "./instance";

export const signup = (data: SignupForm) => {
    const uri = "/signup"
    return instance.post(uri, data)
}

export const signin = (data: SigninForm) => {
    const uri = "/signin"
    return instance.post(uri, data)
}

export const getAllUsers = () => {
    return instance.get('/users')
}

export const getOneUser = (id: number) => {
    return instance.get('/users/' + id)
}
export const removeUser = (id: number | string) => {
    return instance.delete("/users/" + id)
}

export const addUser = (user: IUser) => {
    return instance.post('/users', user)
}
export const updateUser = (user: IUser) => {
    return instance.patch("/users/" + user.id, user)
}