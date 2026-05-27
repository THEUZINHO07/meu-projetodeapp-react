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
    <ul className="box list-container">
      {tarefas.map((tarefa) => (
        <li key={tarefa.id} className="task-item">
          <button onClick={() => onTarefaClick(tarefa.id)}>
            {tarefa.isCompleted}
            {tarefa.title}
          </button>
          <div className="task-actions">
            <Button onClick={() => onSeeDetailsClick(tarefa)}>
              {" "}
              <i class="bi bi-info-circle"></i>
            </Button>
            <Button onClick={() => onDeleteTarefa(tarefa.id)}>
              <i class="bi bi-trash"></i>
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Tarefas;
