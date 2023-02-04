import { useState } from 'react';
import styled from 'styled-components';
import { IModifyToDoProps } from '../type';

const ModifyWrapper = styled.label``;
const ModifyToDoInput = styled.input``;
const ToDoButton = styled.button``;

function ModifyToDo({
  id,
  todo: toDo,
  isCompleted,
  modifyId,
  setModifyId,
  updateToDo,
  deleteToDo,
}: IModifyToDoProps) {
  const [modifyToDo, setModifyToDo] = useState('');

  return (
    <>
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
          <ToDoButton data-testid="cancel-button" onClick={() => setModifyId(-999)}>
            취소
          </ToDoButton>
        </ModifyWrapper>
      )}
    </>
  );
}

export default ModifyToDo;
