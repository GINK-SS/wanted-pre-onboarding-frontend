import { ISignInput, IUpdateToDo } from './type';

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

export function fetchSignIn({ userEmail, userPassword }: ISignInput) {
  return fetch(`${BASE_URL}/auth/signin`, {
    method: 'POST',
    body: JSON.stringify({
      email: userEmail,
      password: userPassword,
    }),
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json());
}

export function fetchCreateToDo(accessToken: string, toDo: string) {
  return fetch(`${BASE_URL}/todos`, {
    method: 'POST',
    body: JSON.stringify({
      todo: toDo,
    }),
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });
}

export function fetchGetToDos(accessToken: string) {
  return fetch(`${BASE_URL}/todos`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());
}

export function fetchUpdateToDo(
  accessToken: string,
  { id, toDo, isCompleted }: IUpdateToDo
) {
  return fetch(`${BASE_URL}/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      todo: toDo,
      isCompleted: isCompleted,
    }),
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });
}

export function fetchDeleteToDo(accessToken: string, id: number) {
  return fetch(`${BASE_URL}/todos/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}
