import LoginUser from "../components/login/loginUser";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@reduxjs/toolkit/query";
import { useEffect } from "react";
import { GetAllUsers } from "../services/allUsers";

function Login() {

  const dispatch = useDispatch();


  const result = useSelector((state: RootState) => state.users) 
  console.log(result)

  
  useEffect(() => {
    GetAllUsers(dispatch);
  }, [dispatch]);

  

  
  return (
    <div className="container-page-login">
      <LoginUser />
    </div>
  );
}

export default Login;
