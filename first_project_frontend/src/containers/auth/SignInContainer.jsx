import React, { useState } from "react";
import SignInComponent from "../../components/auth/SignInComponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import client from "../../lib/Styles/api/client";

function SignInContainer({ setUser, setIsLoggined }) {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const onClickSubmit = async () => {
    const { email, password } = userInfo;

    const data = {
      email,
      password,
    };
    try {
      const response = await client.post("/auth/signin", data);
      if (userInfo.email === email) {
        const { accessToken } = response.data;
        localStorage.setItem("accessToken", accessToken);
        client.defaults.headers.common["Authorization"] = `${accessToken}`;

        const result = await client.get("/users");
        const targetUser = result.data.data;
        setUser(targetUser);
        console.log(targetUser);
        setIsLoggined(true);

        alert("로그인 성공");
        navigate("/");
        return;
      }
    } catch (error) {
      console.log(error);
      alert("로그인 실패");
    }
  };

  return (
    <SignInComponent
      onClickSubmit={onClickSubmit}
      onChangeInput={onChangeInput}
      userInfo={userInfo}
    />
  );
}

export default SignInContainer;
