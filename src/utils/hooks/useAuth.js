import { useEffect } from "react";
import { useDispatch } from "react-redux";
import authProvider from "../../app/auth";
import { login } from "../store/slice/userSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const response = await authProvider.authLogin();
        dispatch(login(response));
      } catch (error) {
        console.log(error);
      }
    })();
  });
};

export default useAuth;
