import { useState } from 'react';
import styled from 'styled-components';
import { fetchCreateToDo, fetchGetToDos } from '../api';
import { ICreateToDoProps } from '../type';

const NewToDoForm = styled.form``;
const NewToDoInput = styled.input``;
const NewToDoButton = styled.button``;

function CreateToDoForm({ ACCESS_TOKEN, setToDos }: ICreateToDoProps) {
  const [newToDo, setNewToDo] = useState('');

  const createToDo = async () => {
    await fetchCreateToDo(ACCESS_TOKEN, newToDo);
    setNewToDo('');
    setToDos(await fetchGetToDos(ACCESS_TOKEN));
  };

  return (
    <NewToDoForm
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => event.preventDefault()}
    >
      <NewToDoInput
        data-testid="new-todo-input"
        value={newToDo}
        onChange={({ currentTarget: { value } }: React.ChangeEvent<HTMLInputElement>) =>
          setNewToDo(value)
        }
      />
      <NewToDoButton data-testid="new-todo-add-button" onClick={createToDo}>
        추가
      </NewToDoButton>
    </NewToDoForm>
  );
}

export default CreateToDoForm;
