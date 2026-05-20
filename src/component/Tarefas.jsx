import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tarefas({ tarefas, onTarefaClick, onDeleteTarefa }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(tarefa) {
    const query = new URLSearchParams();
    query.set("title", tarefa.title);
    query.set("description", tarefa.description);
    navigate(`/tarefa?${query.toString()}`);
  }

  return (
    <ul>
      {tarefas.map((tarefa) => (
        <li key={tarefa.id}>
          <button onClick={() => onTarefaClick(tarefa.id)}>
            {tarefa.isCompleted}
            {tarefa.title}
          </button>
          <Button onClick={() => onSeeDetailsClick(tarefa)}>Dt</Button>
          <Button onClick={() => onDeleteTarefa(tarefa.id)}>De</Button>
        </li>
      ))}
    </ul>
  );
}

export default Tarefas;
