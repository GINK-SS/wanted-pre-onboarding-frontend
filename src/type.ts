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

export interface IUpdateToDo {
  id: number;
  toDo: string;
  isCompleted: boolean;
}

export interface ICreateToDoProps {
  ACCESS_TOKEN: string;
  setToDos: Function;
}

export interface IToDoProps {
  id: number;
  todo: string;
  isCompleted: boolean;
  ACCESS_TOKEN: string;
  setToDos: Function;
}

export interface IModifyToDoProps {
  id: number;
  todo: string;
  isCompleted: boolean;
  modifyId: number;
  setModifyId: Function;
  updateToDo: Function;
  deleteToDo: Function;
}
