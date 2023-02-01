import { useEffect, useState } from 'react';
import styled from 'styled-components';

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const SignUpInput = styled.input``;
const SignUpButton = styled.button``;

function SignUp() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  return (
    <SignUpForm>
      <SignUpInput
        data-testid="email-input"
        value={userEmail}
        onChange={({ currentTarget: { value } }) => setUserEmail(value)}
      />
      <SignUpInput
        data-testid="password-input"
        type="password"
        value={userPassword}
        onChange={({ currentTarget: { value } }) => setUserPassword(value)}
      />
      <SignUpButton data-testid="signup-button">회원가입</SignUpButton>
    </SignUpForm>
  );
}

export default SignUp;
