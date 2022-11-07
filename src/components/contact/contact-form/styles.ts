import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  & > input,
  textarea {
    padding: 0.5rem;
    margin-bottom: 1.75rem;
    background-color: #ffffff;
    border: 1.5px solid #d3d3d3ff;
    border-radius: 5px;
  }
`;

export const Label = styled.label`
  margin: 0.25rem 0;
  font-size: ${(props) => props.theme.fontSizes.$xs};
  text-transform: uppercase;
`;

export const Input = styled.input`
  height: 2rem;
`;

export const TextArea = styled.textarea`
  height: 8rem;
`;

export const SendBtn = styled.button`
  align-self: center;
  width: 50%;
  padding: 0.75rem 0.5rem;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #727272ff;
  border-radius: 10px;
  cursor: pointer;
`;
