import { Checkbox } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImg from '../Images/login.svg'


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const validate = (values) => {
        const errors = {};


        if (!values.username) {
            errors.username = "Username is required!";

        } else if (values.username.length <= 2 || values.username.length > 20) {
            errors.username = "Username length should be from 3 to 19";
        }

        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 8) {
            errors.password = "Password must be more than 8 characters";
        }



        return errors;
    };

    const validateCheck = () => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            navigate(`/dashboard/Profile/${username}`);
        }
    }

    const login = () => {
        const user = {
            username: username,
            password: password


        }
        setFormErrors(validate(user));
        setIsSubmit(true);

        validateCheck();



    }
    const register = () => {
        navigate("/registration-choice");
    }


    return (



        <div className=" bg-slate-200" style={{ position: "position", top: "6vw", padding: "6vw 0", justifyContent: "center", alignItem: "center" }}>
            <div className="mt-20 lg:flex justify-evenly sm:block">
                <div className="w-1/2">
                    <img src={loginImg} className="h-full" />
                </div>
                <div className="w-2/3 my-auto p-1 max-w-sm h-full bg-white rounded-lg border border-gray-200 shadow-md transition hover:shadow-xl sm:m-auto sm:p-6 lg:p-8">
                    <div className="space-y-9">
                        <h5 className="text-xl font-medium text-gray-900 ">
                            Log in
                        </h5>
                        <div>
                            <label
                                for="username"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Username
                            </label>
                            <input
                                type="username"
                                name="username"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className={formErrors.username ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-400 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"}
                                placeholder="abc@x"
                                required=""
                            />
                            <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formErrors.username}</p>
                        </div>
                        <div>
                            <label
                                for="password"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className={formErrors.password ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-400 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"}
                                required=""
                            />
                            <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formErrors.password}</p>
                        </div>

                        <div className="flex text-sm font-medium text-gray-500 ">
                            <div>
                                Not registered?{" "}
                                <a
                                    onClick={register}
                                    className="text-blue-700 hover:cursor-pointer "
                                >
                                    Create account
                                </a>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                                onClick={login}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default Login;