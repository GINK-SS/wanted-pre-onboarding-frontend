import { useState } from 'react';
import styled from 'styled-components';

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const SignInInput = styled.input``;
const SignInButton = styled.button``;

function SignIn() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  return (
    <SignInForm>
      <SignInInput
        data-testid="email-input"
        value={userEmail}
        onChange={({ currentTarget: { value } }) => setUserEmail(value)}
      />
      <SignInInput data-testid="password-input" type="password" value={userPassword} />
      <SignInButton data-testid="signin-button">로그인</SignInButton>
    </SignInForm>
  );
}

export default SignIn;
