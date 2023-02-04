import { useState } from 'react';
import { fetchCreateToDo, fetchGetToDos } from '../api';
import { NewToDoButton, NewToDoForm, NewToDoInput } from '../style/toDo/toDo';
import { ICreateToDoProps } from '../type';

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
        placeholder="할 일을 입력하세요"
        maxLength={17}
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
