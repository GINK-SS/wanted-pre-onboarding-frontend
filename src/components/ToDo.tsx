import { useState } from 'react';
import styled from 'styled-components';
import { fetchDeleteToDo, fetchGetToDos, fetchUpdateToDo } from '../api';
import { IToDoProps, IUpdateToDo } from '../type';
import ModifyToDo from './ModifyToDo';

const ToDoWrapper = styled.li``;
const ToDoLabel = styled.label``;
const ToDoCheckBox = styled.input``;
const ToDoContent = styled.span``;

function ToDo({ id, todo: toDo, isCompleted, ACCESS_TOKEN, setToDos }: IToDoProps) {
  const [modifyId, setModifyId] = useState(-999);

  const updateToDo = async ({ id, toDo, isCompleted }: IUpdateToDo) => {
    await fetchUpdateToDo(ACCESS_TOKEN, { id, toDo, isCompleted });
    setToDos(await fetchGetToDos(ACCESS_TOKEN));
  };
  const deleteToDo = async (id: number) => {
    await fetchDeleteToDo(ACCESS_TOKEN, id);
    setToDos(await fetchGetToDos(ACCESS_TOKEN));
  };

  return (
    <ToDoWrapper>
      <ToDoLabel>
        <ToDoCheckBox
          type="checkbox"
          checked={isCompleted}
          onChange={() => updateToDo({ id, toDo, isCompleted: !isCompleted })}
        />
        {id !== modifyId ? <ToDoContent>{toDo}</ToDoContent> : null}
      </ToDoLabel>
      <ModifyToDo
        id={id}
        todo={toDo}
        isCompleted={isCompleted}
        modifyId={modifyId}
        setModifyId={setModifyId}
        updateToDo={updateToDo}
        deleteToDo={deleteToDo}
      />
    </ToDoWrapper>
  );
}

export default ToDo;
