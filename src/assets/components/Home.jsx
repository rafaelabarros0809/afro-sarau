import "./Home.css";

import beyonceImg from "../fotos/Beyonce.jpg";
import elzaImg from "../fotos/ElsaSoares.jpg";
import rihannaImg from "../fotos/rihanna.jpg";
import fundoImg from "../fotos/fundo-App.png";

export function Home() {

  return (
    <section className="home">

      {/* Imagem de Fundo */}
      <img
        className="bg-image"
        src={fundoImg}
        alt="Fundo Afro Sarau"
      />

      {/* Sombra / Degradê lateral */}
      <div className="overlay-gradient"></div>

      <div className="content-wrapper">

        {/* TÍTULO E DESCRIÇÃO */}
        <div className="home-container">

          <h1>
            Afro <strong>Sarau</strong>
          </h1>

          <p className="subtitulo">
            Arte • Resistência • Luta • Cultura Negra
          </p>

          <div className="descricao-box">
            <p className="descricao">
              O Afro Sarau é um encontro que celebra a riqueza da cultura
              afro-brasileira por meio da arte e da expressão, promovendo
              conhecimento, respeito à diversidade e valorização da história
              negra.
            </p>
          </div>

        </div>

        {/* VOZES QUE INSPIRAM */}
        <div className="vozes">

          <div className="vozes-header">
            <h2>Vozes que Inspiram</h2>
            <div className="linha-decorativa"></div>
          </div>

          <div className="vozes-cards">

            {/* Beyoncé */}
            <div className="card">
              <div className="img-wrapper">
                <a
                  href="https://beyonce.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={beyonceImg} alt="Beyoncé" />
                </a>

                <span className="play-icon">▶</span>
              </div>

              <div className="card-info">
                <p>
                  "Confortável na minha pele, confortável com quem eu sou."
                </p>

                <span>- Beyoncé</span>
              </div>
            </div>

            {/* Elza Soares */}
            <div className="card">
              <div className="img-wrapper">
                <a
                  href="https://open.spotify.com/intl-pt/artist/4cn4gMq0KXORHeYA45PcBi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={elzaImg} alt="Elza Soares" />
                </a>

                <span className="play-icon">▶</span>
              </div>

              <div className="card-info">
                <p>
                  "Sou mulher preta, respiro a minha negritude com muito amor"
                </p>

                <span>- Elza Soares</span>
              </div>
            </div>

            {/* Rihanna */}
            <div className="card">
              <div className="img-wrapper">
                <a
                  href="https://www.rihannanow.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={rihannaImg} alt="Rihanna" />
                </a>

                <span className="play-icon">▶</span>
              </div>

              <div className="card-info">
                <p>
                  "A diversidade precisa ser a regra,<br /> não a exceção."
                </p>

                <span>- Rihanna</span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}

export default Home;