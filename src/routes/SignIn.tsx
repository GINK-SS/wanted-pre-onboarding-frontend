import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { fetchSignIn } from '../api';
import { ISignResponse } from '../type';
import { signValidation } from '../validator';

const SignForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const SignInput = styled.input``;
const SignButton = styled.button``;

function SignIn() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [onValid, setOnValid] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setOnValid(signValidation({ userEmail, userPassword }));
  }, [userEmail, userPassword]);

  const onClickEffect = async () => {
    const signInResponse: ISignResponse = await fetchSignIn({
      userEmail,
      userPassword,
    });

    if (signInResponse.access_token) {
      localStorage.setItem('wantedAccessToken', signInResponse.access_token);
      history.replace('/todo');
    }
  };

  return (
    <SignForm
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => event.preventDefault()}
    >
      <SignInput
        data-testid="email-input"
        value={userEmail}
        onChange={({ currentTarget: { value } }: React.ChangeEvent<HTMLInputElement>) =>
          setUserEmail(value)
        }
      />
      <SignInput
        data-testid="password-input"
        type="password"
        value={userPassword}
        onChange={({ currentTarget: { value } }: React.ChangeEvent<HTMLInputElement>) =>
          setUserPassword(value)
        }
      />
      <SignButton data-testid="signin-button" disabled={!onValid} onClick={onClickEffect}>
        로그인
      </SignButton>
    </SignForm>
  );
}

export default SignIn;
