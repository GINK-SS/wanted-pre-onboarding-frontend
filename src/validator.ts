import { ISignInput } from './type';

export function signValidation({ userEmail, userPassword }: ISignInput) {
  return userEmail.includes('@') && userPassword.length >= 8 ? true : false;
}
