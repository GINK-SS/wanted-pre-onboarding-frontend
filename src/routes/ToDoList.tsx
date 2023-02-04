import { useEffect, useState } from 'react';
import { fetchGetToDos } from '../api';
import CreateToDoForm from '../components/CreateToDoForm';
import ToDo from '../components/ToDo';
import { ToDosContainer, ToDoTitle } from '../style/toDo/toDo';
import { IGetToDos } from '../type';

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
      <ToDoTitle>To - Do List</ToDoTitle>
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
