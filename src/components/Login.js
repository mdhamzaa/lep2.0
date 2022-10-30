import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImg from '../Images/login.svg'


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();


    const login = () => {

        navigate(`/dashboard/Profile/${username}`);
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
                    <form className="space-y-9 " action="#">
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
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="abc@x"
                                required=""
                            />
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
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                required=""
                            />
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
                    </form>
                </div>
            </div>
        </div>
    );

}


export default Login;