import { useEffect, useState } from 'react';
import styled from 'styled-components';

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const SignUpInput = styled.input``;
const SignUpButton = styled.button``;

interface ISignUpResponse {
  statusCode?: number;
  message?: string;
  error?: string;
  access_token?: string;
}

function SignUp() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [validation, setValidation] = useState(false);

  useEffect(() => {
    userEmail.includes('@') && userPassword.length >= 8
      ? setValidation(true)
      : setValidation(false);
  }, [userEmail, userPassword]);

  const signUpAPI = async () => {
    const response: ISignUpResponse = await fetch(
      'https://pre-onboarding-selection-task.shop/auth/signup',
      {
        method: 'POST',
        body: JSON.stringify({
          email: userEmail,
          password: userPassword,
        }),
        headers: { 'Content-Type': 'application/json' },
      }
    ).then((res) => res.json());

    if (response.statusCode === 400) {
      return;
    }
    console.log('성공!');
  };

  return (
    <SignUpForm
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => event.preventDefault()}
    >
      <SignUpInput
        data-testid="email-input"
        value={userEmail}
        onChange={({ currentTarget: { value } }: React.ChangeEvent<HTMLInputElement>) =>
          setUserEmail(value)
        }
      />
      <SignUpInput
        data-testid="password-input"
        type="password"
        value={userPassword}
        onChange={({ currentTarget: { value } }: React.ChangeEvent<HTMLInputElement>) =>
          setUserPassword(value)
        }
      />
      <SignUpButton
        data-testid="signup-button"
        disabled={!validation}
        onClick={signUpAPI}
      >
        회원가입
      </SignUpButton>
    </SignUpForm>
  );
}

export default SignUp;
