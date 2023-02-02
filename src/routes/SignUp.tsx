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
  const [validation, setValidation] = useState(false);

  useEffect(() => {
    userEmail.includes('@') && userPassword.length >= 8
      ? setValidation(true)
      : setValidation(false);
  }, [userEmail, userPassword]);

  return (
    <SignUpForm>
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
      >
        회원가입
      </SignUpButton>
    </SignUpForm>
  );
}

export default SignUp;
