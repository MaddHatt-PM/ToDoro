import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import { Container } from "./TasksGroup.styles";

const TasksGroup = ({ tasks }) => {

  return (
    <Container>
      {tasks.map(item => (
        <TaskItem
          key={item.key}
          checked={item.checked}
          text={item.text}
        />
      ))}
    </Container >
  );
};

export default TasksGroup;