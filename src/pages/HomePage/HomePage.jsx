import "./HomePage.css";

function HomePage() {
  return (
    <div className="display">
      <div className="container">
        <h1>
          <strong>Encurtador de Link</strong>
        </h1>
        <p>Transforme links longos em URLs curtas e fáceis de compartilhar</p>
        <div className="input-container">
          <input type="text" placeholder="Cole seu link aqui..." />
          <button>Encurtar</button>
        </div>
        <br />
        <p>
          Cole seu link, clique em encurtar e pronto. Sem cadastro, sem
          complicação — seus links ficam mais curtos e prontos para compartilhar
        </p>
      </div>
    </div>
  );
}

export default HomePage;
