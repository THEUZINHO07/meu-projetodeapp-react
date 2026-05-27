import { useState } from "react";
import Input from "./Input";

function AddTarefa({ onAddTarefaSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");

  return (
    <div>
      <Input
        className=""
        type="text"
        placeholder="Titulo da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        className=""
        type="text"
        placeholder="Descrição da Tarefa"
        value={description}
        onChange={(event) => setdescription(event.target.value)}
      />
      <button
        className="button"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha todos os campos");
          }
          onAddTarefaSubmit(title, description);
          setTitle("");
          setdescription("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTarefa;
