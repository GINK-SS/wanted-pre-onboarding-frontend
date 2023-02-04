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
const ModifyWrapper = styled.label``;
const ModifyToDoInput = styled.input``;

function ToDo() {
  const ACCESS_TOKEN = localStorage.getItem('wantedAccessToken') as string;
  const [toDos, setToDos] = useState<IGetToDos[]>([]);
  const [newToDo, setNewToDo] = useState('');
  const [modifyId, setModifyId] = useState(-999);
  const [modifyToDo, setModifyToDo] = useState('');

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
    await fetchDeleteToDo(ACCESS_TOKEN, id).then(async () => {
      const fetchToDos: IGetToDos[] = await fetchGetToDos(ACCESS_TOKEN);
      setToDos(fetchToDos);
    });
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
        {toDos.map(({ id, todo: toDo, isCompleted }) => {
          return (
            <ToDoWrapper key={id}>
              <ToDoLabel>
                <ToDoCheckBox
                  type="checkbox"
                  checked={isCompleted}
                  onChange={() => updateToDo({ id, toDo, isCompleted: !isCompleted })}
                />
                {id !== modifyId ? <ToDoContent>{toDo}</ToDoContent> : null}
              </ToDoLabel>
              {id !== modifyId ? (
                <>
                  <ToDoButton
                    id={id + ''}
                    data-testid="modify-button"
                    onClick={({ currentTarget: { id } }) => {
                      setModifyToDo(toDo);
                      setModifyId(+id);
                    }}
                  >
                    수정
                  </ToDoButton>
                  <ToDoButton data-testid="delete-button" onClick={() => deleteToDo(id)}>
                    삭제
                  </ToDoButton>
                </>
              ) : (
                <ModifyWrapper>
                  <ModifyToDoInput
                    data-testid="modify-input"
                    value={modifyToDo}
                    onChange={({ currentTarget: { value } }) => setModifyToDo(value)}
                  />
                  <ToDoButton
                    data-testid="submit-button"
                    onClick={() => {
                      updateToDo({ id, toDo: modifyToDo, isCompleted });
                      setModifyId(-999);
                    }}
                  >
                    제출
                  </ToDoButton>
                  <ToDoButton
                    data-testid="cancel-button"
                    onClick={() => setModifyId(-999)}
                  >
                    취소
                  </ToDoButton>
                </ModifyWrapper>
              )}
            </ToDoWrapper>
          );
        })}
      </ToDosContainer>
    </>
  );
}

export default ToDo;
