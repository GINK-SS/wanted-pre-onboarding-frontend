export interface ISignResponse {
  statusCode?: number;
  message?: string;
  error?: string;
  access_token?: string;
}

export interface ISignInput {
  userEmail: string;
  userPassword: string;
}

export interface IGetToDos {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}
