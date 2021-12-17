import React, { useState } from "react";
import SignUpComponent from "../../components/auth/SignUpComponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import client from "../../lib/Styles/api/client";

function SignUpContainer() {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
    password: "",
    passwordConfirm: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const onClickSubmit = async () => {
    const { email, name, password, passwordConfirm } = userInfo;

    if (password !== passwordConfirm) {
      alert("비밀번호가 다릅니다.");
      return;
    }

    const data = {
      email,
      name,
      password,
    };
    try {
      const response = await client.post("/auth/signup", data);
      if (response.status === 200) {
        alert("회원가입 완료");
        navigate("/");
      }
    } catch (error) {
      if (error.response.status === 400) {
        //에러코드 파싱
        alert("이미 존재하는 회원입니다.");
        console.log("error");
      }
    }
  };

  return (
    <SignUpComponent
      onClickSubmit={onClickSubmit}
      onChangeInput={onChangeInput}
      userInfo={userInfo}
    />
  );
}
export default SignUpContainer;
