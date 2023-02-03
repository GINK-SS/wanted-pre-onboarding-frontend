import { ISignInput } from './type';

const BASE_URL = `https://pre-onboarding-selection-task.shop`;

export function fetchSignUp({ userEmail, userPassword }: ISignInput) {
  return fetch(`${BASE_URL}/auth/signup`, {
    method: 'POST',
    body: JSON.stringify({
      email: userEmail,
      password: userPassword,
    }),
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json());
}
