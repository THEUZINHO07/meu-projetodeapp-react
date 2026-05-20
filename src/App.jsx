import Title from "./component/Title";
import "./App.css";
import AddTarefa from "./component/AddTarefa";
import { useEffect, useState } from "react";
import Tarefas from "./component/Tarefas";
import { v4 } from "uuid";

function App() {
  const [tarefas, setTarefas] = useState(
    JSON.parse(localStorage.getItem("tarefas")) || [],
  );

  useEffect(() => {
    localStorage.setItem("Tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  function onTarefaClick(tarefaId) {
    const newTarefa = tarefas.map((tarefa) => {
      if (tarefa.id === tarefaId) {
        return { ...tarefa, isCompleted: !tarefa.isCompleted };
      }

      return tarefa;
    });
    setTarefas(newTarefa);
  }

  function onDeleteTarefa(tarefaId) {
    const newTarefa = tarefas.filter((tarefa) => tarefa.id !== tarefaId);
    setTarefas(newTarefa);
  }

  function onAddTarefaSubmit(title, description) {
    const newTarefa = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTarefas([...tarefas, newTarefa]);
  }
  return (
    <>
      <Title className="Title">Gerenciar Tarefas</Title>
      <AddTarefa onAddTarefaSubmit={onAddTarefaSubmit} />
      <Tarefas
        tarefas={tarefas}
        onTarefaClick={onTarefaClick}
        onDeleteTarefa={onDeleteTarefa}
      />
    </>
  );
}
export default App;
