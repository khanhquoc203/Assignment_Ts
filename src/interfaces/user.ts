import * as Yup from 'yup'


export interface IUser {
    id: number,
    email: string,
    accessToken?: string;
    firstName: string,
    lastName: string,
    password: string,
    role: string
}

export const signupSchema = Yup.object({
    firstName: Yup.string().trim().required(" khong duoc de trong"),
    lastName: Yup.string().trim().required(' khong duoc de trong'),
    email: Yup.string().trim().email().required('email khong duoc de trong'),
    password: Yup.string().min(4).required('password khong duoc de trong'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Mat khau khong khop'),
    role: Yup.string().default('member'),
})
export type SignupForm = Yup.InferType<typeof signupSchema>

//----------------------------------------------------------------

export const signinSchema = Yup.object({
    email: Yup.string().email().required('email khong duoc de trong'),
    password: Yup.string().min(4).required('password khong duoc de trong'),
})

export type SigninForm = Yup.InferType<typeof signinSchema>

//-----------------------

export const userSchema = Yup.object({
    name: Yup.string().required("Không được để trống!"),
    email: Yup.string().required("Không được để trống!"),
    role: Yup.string().oneOf(["admin", "member"], "Hãy chọn 1 trường!"),
});
export type UserForm = Yup.InferType<typeof userSchema>;
