import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchCreateToDo, fetchDeleteToDo, fetchGetToDos, fetchUpdateToDo } from '../api';
import { IGetToDos, IUpdateToDo } from '../type';

const NewToDoForm = styled.form``;
const NewToDoInput = styled.input``;
const NewToDoButton = styled.button``;
const ToDosContainer = styled.ol``;
const ToDoWrapper = styled.li``;
const ToDoLabel = styled.label``;
const ToDoCheckBox = styled.input``;
const ToDoContent = styled.span``;
const ToDoButton = styled.button``;

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

  const updateToDo = async ({ id, toDo, isCompleted }: IUpdateToDo) => {
    const response = await fetchUpdateToDo(ACCESS_TOKEN, { id, toDo, isCompleted });
    const fetchToDos: IGetToDos[] = await fetchGetToDos(ACCESS_TOKEN);
    setToDos(fetchToDos);
  };

  const deleteToDo = async (id: number) => {
    const response = await fetchDeleteToDo(ACCESS_TOKEN, id);
    const fetchToDos: IGetToDos[] = await fetchGetToDos(ACCESS_TOKEN);
    setToDos(fetchToDos);
  };

  return (
    <>
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
      <ToDosContainer>
        {toDos.map(({ id, todo: toDo, isCompleted }) => (
          <ToDoWrapper key={id}>
            <ToDoLabel>
              <ToDoCheckBox
                type="checkbox"
                checked={isCompleted}
                name={'isCompleted'}
                value={isCompleted + ''}
                onChange={() => finishHandler({ id, toDo, isCompleted })}
              />
              <ToDoContent>{toDo}</ToDoContent>
            </ToDoLabel>
            <ToDoButton data-testid="modify-button">수정</ToDoButton>
            <ToDoButton data-testid="delete-button" onClick={() => deleteToDo(id)}>
              삭제
            </ToDoButton>
          </ToDoWrapper>
        ))}
      </ToDosContainer>
    </>
  );
}

export default ToDo;
