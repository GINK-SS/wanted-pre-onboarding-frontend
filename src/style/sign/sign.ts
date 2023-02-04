import styled from 'styled-components';

export const SignContainer = styled.div`
  background-color: rgba(250, 250, 250, 1);
  width: 500px;
  height: 500px;
  top: 50%;
  left: 50%;
  margin: -250px 0 0 -250px;
  position: absolute;
  border: 0.2px solid rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  box-shadow: 0px 0px 50px rgba(100, 100, 100, 0.2);
  text-align: center;
`;

export const SignForm = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const SignTitle = styled.span`
  display: block;
  margin: 70px auto;
  font-size: 100px;
  text-align: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
`;

export const SignInput = styled.input`
  margin-top: 10px;
  margin: 10px 20px 0;
  height: 30px;
  border: 1px solid;
  border-radius: 10px;
  padding: 10px 20px 10px;
  font-size: 16px;
  &:focus {
    outline: 1px solid rgba(0, 0, 0, 0.4);
  }
`;

export const SignButton = styled.button<{ isValid: boolean }>`
  margin: 50px 20px 0;
  height: 30px;
  background-color: rgba(255, 255, 255, 1);
  border: ${(props) =>
    props.isValid ? '0.1px solid rgba(0, 0, 0, 0.5)' : '0.1px solid rgba(0,0,0,0.1)'};
  outline: ${(props) => (props.isValid ? '0.1px solid rgba(0, 0, 0, 0.1)' : 'none')};
  &:hover {
    cursor: ${(props) => (props.isValid ? 'pointer' : 'default')};
  }
`;

export const SignLink = styled.span`
  display: block;
  margin-top: 20px;
  color: rgba(0, 0, 0, 0.5);
  &:hover {
    color: rgba(0, 0, 0, 0.8);
  }
`;
