import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchCreateToDo, fetchGetToDos } from '../api';
import { IGetToDos } from '../type';

const NewToDoForm = styled.form``;
const NewToDoInput = styled.input``;
const NewToDoButton = styled.button``;

function ToDo() {
  const ACCESS_TOKEN = localStorage.getItem('wantedAccessToken') as string;
  const [toDos, setToDos] = useState<IGetToDos[]>([]);
  const [newToDo, setNewToDo] = useState('');

  useEffect(() => {
    (async () => {
      const fetchToDos: IGetToDos[] = await fetchGetToDos(ACCESS_TOKEN);
      setToDos(fetchToDos);
    })();
  }, []);

  const createToDo = async () => {
    const createToDoResponse = await fetchCreateToDo(ACCESS_TOKEN, newToDo);
    setNewToDo('');
    const fetchToDos: IGetToDos[] = await fetchGetToDos(ACCESS_TOKEN);
    setToDos(fetchToDos);
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

export default ToDo;
