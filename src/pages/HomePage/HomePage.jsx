import "./HomePage.css";
import { useState } from "react";
import { FaLink } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa6";
import api from "../../services/api";

function HomePage() {
  const [url, setUrl] = useState("");
  const [linkEncurtado, setLinkEncurtado] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");
  const [copiado, setCopiado] = useState(false);

  async function handleEncurtar() {
    setCarregando(true);
    setErro("");
    try {
      const resposta = await api.post("/api/urls", { urlOriginal: url });
      setLinkEncurtado(
        `${import.meta.env.VITE_API_URL}/${resposta.data.urlEncurtada}`,
      );
    } catch (erro) {
      console.error("Erro ao encurtar:", erro);
      setErro(
        "Não foi possível encurtar o link. Verifique a URL e tente novamente.",
      );
    } finally {
      setCarregando(false);
    }
  }
  function handleCopiar() {
    navigator.clipboard.writeText(linkEncurtado);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  }

  return (
    <div className="display">
      <div className="container">
        <h1>
          <strong>Encurtador de Link</strong>
          <FaLink />
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
              <button onClick={handleEncurtar} disabled={carregando || !url}>
                {carregando ? "Encurtando..." : "Encurtar"}
              </button>
            </div>

            {erro && <p className="erro-mensagem">{erro}</p>}

            <p>
              Cole seu link, clique em encurtar e pronto. Sem cadastro, sem
              complicação — seus links ficam mais curtos e prontos para
              compartilhar.
            </p>
          </>
        )}
        {linkEncurtado && (
          <>
            <div className="input-container">
              <input
                style={{
                  color: "#3087f8",
                  textDecoration: "underline",
                }}
                value={linkEncurtado}
                readOnly
              />
              <button onClick={handleCopiar}>
                {!copiado ? (
                  <>
                    Copiar <FaCopy />
                  </>
                ) : (
                  <>Copiado!</>
                )}
              </button>
            </div>
            {copiado ? (
              <>
                <p style={{ color: "green" }}>
                  Link copiado para a área de transferência!
                </p>
              </>
            ) : (
              <>
                <p>
                  Opa seu link encurtado está pronto! Clique no botão copiar
                  para copiar o link e compartilhar onde quiser de maneira
                  rápida e prática.
                </p>
              </>
            )}
          </>
        )}
      </div>
      <div className="info-container">
        <h1 style={{ marginTop: "100px" }}>Encurtador de Link</h1>
        <br />
        <p>
          O Encurtador de Link é um encurtador de URLs rápido e simples. Nossa
          ferramenta permite transformar links longos em URLs curtas e fáceis de
          compartilhar, em poucos segundos e sem nenhum custo. Basta colar o
          link original e receber instantaneamente uma versão encurtada, pronta
          para uso em redes sociais, mensagens, e-mails ou qualquer lugar que
          você precisar.
        </p>
        <p>
          Este encurtador de links funciona perfeitamente em todos os
          dispositivos, incluindo desktops, notebooks, tablets e smartphones,
          sem necessidade de instalar nenhum aplicativo ou programa. O processo
          é rápido e prático: basta colar a URL e, em poucos segundos, seu link
          encurtado está pronto para ser copiado e compartilhado.
        </p>

        <h2>Como encurtar links online gratuitamente</h2>
        <ol>
          <li>Cole o link original na caixa de texto.</li>
          <li>Clique no botão "Encurtar".</li>
          <li>Aguarde alguns instantes e copie seu novo link encurtado.</li>
        </ol>

        <h2>Vantagens do Encurtador de Link</h2>
        <ul>
          <li>Encurte links sem qualquer limitação de uso</li>
          <li>Não é necessário instalar nenhum software ou fazer cadastro</li>
          <li>Redirecionamento rápido e seguro</li>
          <li>Compatível com todos os navegadores e dispositivos</li>
          <li>Totalmente gratuito</li>
        </ul>

        <h2>Encurtamento fácil e rápido</h2>
        <p>
          Encurtar um link é simples. Basta colar a URL que você deseja encurtar
          e clicar no botão "Encurtar". Seu link curto fica pronto em poucos
          segundos, já disponível para copiar e compartilhar onde quiser — redes
          sociais, aplicativos de mensagem, e-mails ou documentos.
        </p>

        <h2>Sem limitação de uso</h2>
        <p>
          Encurte quantos links quiser, sem restrições e de forma totalmente
          gratuita. Não há necessidade de instalar nenhum aplicativo, programa
          adicional ou realizar qualquer tipo de cadastro. É só acessar, colar o
          link e encurtar.
        </p>

        <h2>Compatível com todas as plataformas</h2>
        <p>
          Nosso encurtador funciona perfeitamente em qualquer tipo de
          dispositivo — computador, notebook, tablet, iPhone, celular Android,
          entre outros. Além disso, é compatível com todos os principais
          navegadores, incluindo Chrome, Edge, Firefox, Safari e Opera.
        </p>

        <h2>Segurança e privacidade</h2>
        <p>
          Levamos a segurança dos seus links a sério. O processo de encurtamento
          não armazena informações pessoais e o redirecionamento é feito de
          forma direta e segura, garantindo que você chegue sempre ao destino
          correto.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
