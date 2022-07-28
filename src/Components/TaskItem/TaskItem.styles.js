import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  /* flex-direction: row; */
  flex-wrap: nowrap;
  gap: 10px;

  align-items: start;
  
  margin: 4px 0px;
  padding: 4px 4px;
  
  border-bottom: 1px solid #0000004c;
`;


export const CheckboxHidden = styled.input`
    clip:rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

export const CheckboxStyled = styled.span`
  flex-shrink: 0;
  margin-top: 10px;
  height: 14px;
  width: 14px;
  
  background: #ffffff25;
  border: 1px #ddd solid;
  border-radius: 50%;

  .checkbox--active {
    border-color: purple;
    background: purple;
  }
`;


export const TextArea = styled.textarea`
  font-family: 'PT Sans', sans-serif;
  font-size: medium;
  color: antiquewhite;
  background-color: transparent;

  resize: none;
  width: 100%;
  margin: auto auto;

  ::-webkit-scrollbar {
    display: none;
  }
  
  border:none;
  border-bottom: 2px solid rgba(0,0,0,0.0);
  border-radius: 4px;

  transition: border-color, background-color 200ms ease-out;
  
  
  :hover,
  :hover+button{
    background-color: #ffffff1b;
    border-color: rgba(0,0,0,0.2);
  }
  
  :focus,
  :focus+button {
    outline: none;
    background-color: #ffffff33;
    border-color: rgba(0,0,0,0.5);
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 3px;
  text-align: justify;
  flex-shrink: 0;
  
  transition: border-color, background-color 200ms ease-out;

  :hover{
    background-color: #ffffff1b;
    border-color: rgba(0,0,0,0.2);
  }
  
  :focus {
    outline: none;
    background-color: #ffffff33;
    border-color: rgba(0,0,0,0.5);
  }

  .material-symbols-outlined {
    color: #ffffff7e;
    text-align: justify;
    font-variation-settings:
    'FILL' 0,
    'wght' 200,
    'GRAD' 0,
    'opsz' 24
  }
`;



//https://stackoverflow.com/questions/39401504/javascript-react-dynamic-height-textarea-stop-at-a-max