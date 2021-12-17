import React from "react";
import styled from "styled-components";
import palette from "../../lib/Styles/palette";
import AuthTemplate from "./temp/AuthTemplate";

const SignUpFormBlock = styled.div`
  box-sizing: border-box;

  h3 {
    font-size: 1.5rem;
    font-weight: bolder;
    margin-bottom: 2rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1.2rem;
  border: none;
  border-bottom: 1px solid #868e96;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 0.5rem;

  & + & {
    margin-top: 1.3rem;
  }
`;

const StlyedButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 4px;
  font-weight: bolder;
  padding: 1rem 2rem;
  outline: none;
  cursor: pointer;
  margin-top: 1rem;
  background: #fff;

  background-color: ${palette.main};
  color: #fff;
`;

function SignUpComponent({ userInfo, onClickSubmit, onChangeInput }) {
  const { email, name, password, passwordConfirm } = userInfo;

  return (
    <>
      <AuthTemplate>
        <SignUpFormBlock>
          <h3>회원가입</h3>
          <StyledInput
            name="email"
            onChange={onChangeInput}
            value={email}
            placeholder="이메일을 입력하세요"
          />
          <StyledInput
            name="name"
            onChange={onChangeInput}
            value={name}
            placeholder="이름을 입력하세요"
          />
          <StyledInput
            type="password"
            name="password"
            onChange={onChangeInput}
            value={password}
            placeholder="비밀번호을 입력하세요"
          />
          <StyledInput
            type="password"
            name="passwordConfirm"
            onChange={onChangeInput}
            value={passwordConfirm}
            placeholder="비밀번호확인 입력하세요"
          />
          <StlyedButton onClick={onClickSubmit}>회원가입</StlyedButton>
        </SignUpFormBlock>
      </AuthTemplate>
    </>
  );
}

export default SignUpComponent;
