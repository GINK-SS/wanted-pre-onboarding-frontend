import styled from 'styled-components';

export const ToDoTitle = styled.span`
  display: block;
  margin: 150px 0 40px;
  text-align: center;
  font-size: 70px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);
`;

export const NewToDoForm = styled.form`
  width: 700px;
  margin: 50px auto;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
`;

export const NewToDoInput = styled.input`
  width: 500px;
  height: 50px;
  border-radius: 20px;
  font-size: 20px;
  padding: 5px 30px;
  &:focus {
    outline: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

export const NewToDoButton = styled.button`
  width: 100px;
  height: 40px;
  margin-left: 10px;
  font-size: 20px;
  letter-spacing: 10px;
  text-indent: 10px;
  background-color: #fff;
  border: 0.5px solid #000;
  border-radius: 5px;
  cursor: pointer;
`;

export const ToDosContainer = styled.ol`
  margin: 0 auto;
  width: 700px;
  max-width: 700px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 10px;
`;

export const ToDoWrapper = styled.li`
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin: 20px 10px;
  padding: 0 10px;
  height: 50px;
  position: relative;
`;

export const ToDoLabel = styled.label``;

export const ToDoCheckBox = styled.input`
  margin-left: 3px;
  width: 20px;
  height: 20px;
`;

export const ToDoContent = styled.span`
  margin: 0 30px 0 5px;
  font-size: 33px;
`;

export const ModifyWrapper = styled(ToDoLabel)``;

export const ModifyToDoInput = styled.input`
  width: 400px;
  height: 27px;
  font-size: 20px;
  padding: 0 10px;
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.7);
  &:focus {
    outline: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

export const ToDoButton = styled.button`
  position: absolute;
  width: 50px;
  height: 30px;
  right: 68px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  cursor: pointer;
`;

export const ToDoButtonRight = styled(ToDoButton)`
  right: 10px;
`;
