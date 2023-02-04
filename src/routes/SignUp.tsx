import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchSignUp } from '../api';
import {
  SignButton,
  SignContainer,
  SignForm,
  SignInput,
  SignTitle,
} from '../style/sign/sign';
import { ISignResponse } from '../type';
import { signValidation } from '../validator';

function SignUp() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [onValid, setOnValid] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setOnValid(signValidation({ userEmail, userPassword }));
  }, [userEmail, userPassword]);

  const onClickEffect = async () => {
    const signUpResponse: ISignResponse = await fetchSignUp({
      userEmail,
      userPassword,
    });

    if (signUpResponse.statusCode === 400) return;
    history.replace('/signin');
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
          placeholder="이메일을 입력하세요"
          onChange={({ currentTarget: { value } }: React.ChangeEvent<HTMLInputElement>) =>
            setUserEmail(value)
          }
        />
        <SignInput
          data-testid="password-input"
          type="password"
          value={userPassword}
          placeholder="비밀번호를 입력하세요"
          onChange={({ currentTarget: { value } }: React.ChangeEvent<HTMLInputElement>) =>
            setUserPassword(value)
          }
        />
        <SignButton
          data-testid="signup-button"
          disabled={!onValid}
          onClick={onClickEffect}
          onValid={onValid}
        >
          회원가입
        </SignButton>
      </SignForm>
    </SignContainer>
  );
}

export default SignUp;
