import { Button, Container, Flex, Input, Item, Spacer } from "./styles";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [task, setTask] = useState("");
  const [listTask, setListTask] = useState([]);

  const addTask = () => {
    if (!task) return notify();
    const newTask = {
      id: Math.random(),
      task: task,
      checked: false,
    };

    setListTask([...listTask, newTask]);
    setTask("");
  };

  const removeTask = (id) => {
    const newList = listTask.filter((task) => task.id !== id);
    setListTask(newList);
  };

  const toggleChecked = (id, checked) => {
    const index = listTask.findIndex((task) => task.id == id);
    const newList = listTask;
    newList[index].checked = !checked;
    setListTask([...newList]);
  };

  const notify = () =>
    toast.warn(" Preencha uma Tarefa!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  return (
    <Container>
      <ToastContainer />
      <h1 className="title">TODO-LIST</h1>
      <Spacer />

      <Flex direction="row">
        <Input
          value={task}
          placeholder="Digite Sua Tarefa"
          onChange={(e) => setTask(e.target.value)}
        />
        <Button onClick={addTask}>Adicionar</Button>
      </Flex>

      <Spacer margin="16px" />

      <ul>
        {listTask.map((task) => (
          <>
            <Item checked={task.checked} key={task.id}>
              <p>{task.task}</p>
              <Flex direction="row">
                <button onClick={() => toggleChecked(task.id, task.checked)}>
                  <i className="bx bx-check"></i>
                </button>

                <button onClick={() => removeTask(task.id)}>
                  <i className="bx bx-trash"></i>
                </button>
              </Flex>
            </Item>
            <Spacer margin="12px" />
          </>
        ))}
      </ul>
    </Container>
  );
}

export default App;
