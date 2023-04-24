import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { json, useNavigate } from "react-router-dom";
import { SigninForm, signinSchema } from "../../models";
import { signin } from "../../api/auth";
import { useLocalStorage } from "../../hooks";
import { Link } from "react-router-dom";

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninForm>({
    resolver: yupResolver(signinSchema),
  });

  const navigate = useNavigate();

  const [user, setUser] = useLocalStorage("user", null);

  const onSubmit = async (data: SigninForm) => {
    try {
      const {
        data: { accessToken, user },
      } = await signin(data);

      setUser({ accessToken, ...user });
      if (user.role == "admin") {
        localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem("token", JSON.stringify(accessToken));
        alert("Đăng nhập thành công!");
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
        <div className="flex shadow-md">
          <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white w-[25rem] h-[25rem]">
            <div className="w-72">
              <h1 className="text-xl font-semibold">Log In</h1>

              <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
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
                  <button className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="flex flex-wrap content-center justify-center rounded-r-md bg-[#f8f8f8] w-[15rem] h-[25rem]">
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

export default Signin;
