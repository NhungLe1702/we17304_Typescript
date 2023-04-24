import * as Yup from "yup";
export interface IProduct {
  _id: string;
  name: string;
  price: number;
  percent_discount: number;
  description: string;
  image: string;
}

export interface ICate {
  _id: string;
  name: string;
}

export const signupSchema = Yup.object({
  name: Yup.string().trim().required("Trường dữ liệu bắt buộc"),
  email: Yup.string()
    .email("Email sai định dạng")
    .trim()
    .required("Trường dữ liệu bắt buộc"),
  password: Yup.string().trim().min(6).required("Trường dữ liệu bắt buộc"),
  confirmPassword: Yup.string().trim()
    .required("Trường dữ liệu bắt buộc")
    .oneOf([Yup.ref("password")], "Mật khẩu không khớp"),
});

export type SignupForm = Yup.InferType<typeof signupSchema>;

export const signinSchema = Yup.object({
  email: Yup.string()
    .email("Email sai định dạng")
    .required("Trường dữ liệu bắt buộc")
    .trim(),
  password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
  role: Yup.number(),
});

export type SigninForm = Yup.InferType<typeof signinSchema>;

export const updateSchema = Yup.object({
  name: Yup.string().trim().required("Trường dữ liệu bắt buộc"),
  price: Yup.number().required("Trường dữ liệu bắt buộc"),
  image: Yup.string().trim().required("Trường dữ liệu bắt buộc"),
  percent_discount: Yup.number(),
  description: Yup.string().trim()
    .min(10, "Tối thiếu 50 ký tự")
    .required("Trường dữ liệu bắt buộc"),
});

export type updateForm = Yup.InferType<typeof updateSchema>;



export const CateSchema = Yup.object({
  name: Yup.string().required("Trường dữ liệu bắt buộc"),
})


export type CateForm = Yup.InferType<typeof CateSchema>;

