import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../component/Title";

function TarefaPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div>
      <div>
        <button onClick={() => navigate(-1)}>Voltar</button>
        <Title className="">Detalhes da Tarefa</Title>
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TarefaPage;
