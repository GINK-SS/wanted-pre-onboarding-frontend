import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchGetToDos } from '../api';
import CreateToDoForm from '../components/CreateToDoForm';
import ToDo from '../components/ToDo';
import { IGetToDos } from '../type';

const ToDosContainer = styled.ol``;

function ToDoList() {
  const ACCESS_TOKEN = localStorage.getItem('wantedAccessToken') as string;
  const [toDos, setToDos] = useState<IGetToDos[]>([]);

  useEffect(() => {
    (async () => {
      setToDos(await fetchGetToDos(ACCESS_TOKEN));
    })();
  }, []);

  return (
    <>
      <CreateToDoForm ACCESS_TOKEN={ACCESS_TOKEN} setToDos={setToDos} />
      <ToDosContainer>
        {toDos.map(({ id, todo: toDo, isCompleted }) => (
          <ToDo
            key={id}
            id={id}
            todo={toDo}
            isCompleted={isCompleted}
            ACCESS_TOKEN={ACCESS_TOKEN}
            setToDos={setToDos}
          />
        ))}
      </ToDosContainer>
    </>
  );
}

export default ToDoList;
