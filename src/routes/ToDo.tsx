import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchCreateToDo, fetchGetToDos } from '../api';
import { IGetToDos } from '../type';

function ToDo() {
  const ACCESS_TOKEN = localStorage.getItem('wantedAccessToken') as string;
  const [toDos, setToDos] = useState<IGetToDos[]>([]);

  useEffect(() => {
    (async () => {
      const fetchToDos: IGetToDos[] = await fetchGetToDos(ACCESS_TOKEN);
      setToDos(fetchToDos);
    })();
  }, []);

  return (
  );
}

export default ToDo;
