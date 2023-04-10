// 1. Xây dựng giao diện đăng ký
// 2. Cần import thư viện quản lý form: react-hook-form
// 3. Khai báo các trường dữ liệu trong form, validate form
// 4. Sử dụng resolver để tích hợp yup và react-hook-form

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupForm } from "../../models";
import { signupSchema } from "../../models";
import { signup } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver: yupResolver(signupSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: SignupForm) => {
    try {
      const response = await signup(data);
      console.log(response);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
        <div className="flex shadow-md">

          <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white w-[25rem] h-[40rem]">
            <div className="w-72">
              <h1 className="text-xl font-semibold">Sign Up</h1>

              <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Name
                  </label>
                  <input
                    {...register("name")}
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  />
                  <p className="text-rose-600 text-[13px] h-[15px] w-288px ">
                    {errors.name && errors.name.message}
                  </p>
                </div>

                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  />
                  <p className="text-rose-600 text-[13px] h-[15px] w-288px ">
                    {errors.email && errors.email.message}
                  </p>
                </div>

                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Password
                  </label>
                  <input
                    {...register("password")}
                    type="password"
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  />
                  <p className="text-rose-600 text-[13px] h-[15px] w-288px ">
                    {errors.password && errors.password.message}
                  </p>
                </div>

                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    ConfirmPassword
                  </label>
                  <input
                    {...register("confirmPassword")}
                    type="password"
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  />
                  <p className="text-rose-600 text-[13px] h-[15px] w-288px ">
                    {errors.confirmPassword && errors.confirmPassword.message}
                  </p>
                </div>

                <div className="mb-3">
                  <button className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">
                    Create an account
                  </button>
                </div>
              </form>

              <div className="text-center">
                <span className="text-xs text-gray-400 font-semibold">
                  Already have an account?
                </span>
                <Link to={`/login`} className="text-xs font-semibold text-purple-700">
                  Login
                </Link>
                
              </div>
            </div>
          </div>

          <div className="flex flex-wrap content-center justify-center rounded-r-md bg-[#f8f8f8] w-[15rem] h-[40rem]">
            <img
              className=" bg-center bg-no-repeat bg-cover rounded-r-md"
              src="/logo.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
