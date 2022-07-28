import React from "react";
import { useState, useEffect, useRef } from 'react'
import { Button, CheckboxHidden, CheckboxStyled, Container, TextArea } from "./TaskItem.styles";

const TaskItem = (state) => {
  const [checkedState, setChecked] = useState(state.checked);
  const [textState, setText] = useState(state.text ?? '')

  const checkboxChanged = () => {
    console.log("i was called");
    setChecked(!checkedState);
  };

  useEffect(() => {
    console.log(checkedState, textState);
  }, [checkedState, textState])

  return (
    <Container>
      <CheckboxHidden
        type="checkbox"
        checked={checkedState}
        onChange={checkboxChanged}
      />
      <CheckboxStyled
        className={`checkbox ${checkedState && "checkbox--active"}`}
      />
      <TextArea
        type=""
        value={textState}
        onChange={event => setText(event.currentTarget.value)}
        className='text-entry'
      />
      <Button>
        <span class="material-symbols-outlined">delete</span>
      </Button>
    </Container>
  )
}

export default TaskItem;