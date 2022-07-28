import logo from '../Assets/logo.svg'
import Pomodoro from '../Components/Pomodoro/Pomodoro';
import TasksGroup from '../Components/TasksGroup/TasksGroup';
import './App.style.css'

function App() {
  const tasks = [
    { text: "Example One", checked: false, key: 1 },
    { text: "Example Two", checked: true, key: 2 },
    { text: "Example Three", checked: false, key: 3 },
  ]

  return (
    <>
      <TasksGroup tasks={tasks} />
      <Pomodoro />
    </>
  );
}

export default App;
