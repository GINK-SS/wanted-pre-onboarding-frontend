import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchSignIn } from '../api';
import {
  SignButton,
  SignContainer,
  SignForm,
  SignInput,
  SignTitle,
} from '../style/sign/sign';
import { ISignResponse } from '../type';
import { signValidation } from '../validator';

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
    <SignContainer>
      <SignTitle>To - Do</SignTitle>
      <SignForm
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => event.preventDefault()}
      >
        <SignInput
          data-testid="email-input"
          value={userEmail}
          placeholder="이메일"
          onChange={({ currentTarget: { value } }: React.ChangeEvent<HTMLInputElement>) =>
            setUserEmail(value)
          }
        />
        <SignInput
          data-testid="password-input"
          type="password"
          value={userPassword}
          placeholder="비밀번호"
          onChange={({ currentTarget: { value } }: React.ChangeEvent<HTMLInputElement>) =>
            setUserPassword(value)
          }
        />
        <SignButton
          data-testid="signin-button"
          disabled={!onValid}
          onClick={onClickEffect}
          onValid={onValid}
        >
          로그인
        </SignButton>
      </SignForm>
    </SignContainer>
  );
}

export default SignIn;
