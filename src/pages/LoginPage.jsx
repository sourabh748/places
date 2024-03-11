import { useEffect } from "react";
import authProvider from "../app/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const navigate = useNavigate();
  const loggedInStatus = useSelector((store) => store.auth.loggedInStatus);

  const handelLoginButton = async () => {
    const loggedInData = await authProvider.authLogin();
    if (loggedInData != null) {
      navigate("/browse");
    }
  };

  useEffect(() => {
    if (loggedInStatus === true) {
      navigate("/browse");
    }
  }, []);

  return (
    <div className="relative">
      <img
        className="w-screen h-[100vh]"
        src="https://images.pexels.com/photos/6740748/pexels-photo-6740748.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="NoImage"
      />
      <div className="grid place-content-center w-7/12 h-2/6 sm:w-5/12 sm:h-3/6 bg-black opacity-80 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <button
          type="button"
          className="bg-slate-50 text-sm sm:px-5 rounded-lg sm:py-3 py-3 px-1 sm:font-bold"
          onClick={handelLoginButton}
        >
          ⬇️ Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
