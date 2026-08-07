import "./HomePage.css";
import { useState } from "react";

function HomePage() {
  const [url, setUrl] = useState("");
  const [linkEncurtado, setLinkEncurtado] = useState(null);
  const [carregando, setCarregando] = useState(false);

  async function handleEncurtar() {
    setCarregando(true);
    try {
    } catch (erro) {
      console.error("Erro ao encurtar:", erro);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="display">
      <div className="container">
        <h1>
          <strong>Encurtador de Link</strong>
        </h1>
        <p>Transforme links longos em URLs curtas e fáceis de compartilhar</p>

        {!linkEncurtado && (
          <>
            <div className="input-container">
              <input
                type="text"
                placeholder="Cole seu link aqui..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <button onClick={handleEncurtar}>
                {carregando ? "Encurtando..." : "Encurtar"}
              </button>
            </div>
            <br />
            <p>
              Cole seu link, clique em encurtar e pronto. Sem cadastro, sem
              complicação — seus links ficam mais curtos e prontos para
              compartilhar
            </p>
          </>
        )}
        {linkEncurtado && (
          <div className="link-container">
            <p>Seu link encurtado:</p>
            <a href={linkEncurtado} target="_blank" rel="noopener noreferrer">
              {linkEncurtado}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
