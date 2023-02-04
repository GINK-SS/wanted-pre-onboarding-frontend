import { useState } from 'react';
import {
  ModifyToDoInput,
  ModifyWrapper,
  ToDoButton,
  ToDoButtonRight,
} from '../style/toDo/toDo';
import { IModifyToDoProps } from '../type';

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
          <ToDoButtonRight data-testid="delete-button" onClick={() => deleteToDo(id)}>
            삭제
          </ToDoButtonRight>
        </>
      ) : (
        <ModifyWrapper>
          <ModifyToDoInput
            data-testid="modify-input"
            value={modifyToDo}
            maxLength={17}
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
          <ToDoButtonRight data-testid="cancel-button" onClick={() => setModifyId(-999)}>
            취소
          </ToDoButtonRight>
        </ModifyWrapper>
      )}
    </>
  );
}

export default ModifyToDo;
