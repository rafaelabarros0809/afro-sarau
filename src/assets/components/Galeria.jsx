import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { Header } from "./Header";

import "./Galeria.css";

import Danca from "../fotos/dança.jpg";
import Batuque from "../fotos/Batuque.png";
import Coroa from "../fotos/memoriaFoto.jpg";
import Destaque from "../fotos/fotoDestaque.jpg";

import foto1 from "../fotos/foto1.jpg";
import foto2 from "../fotos/foto2.jpg";
import foto3 from "../fotos/foto3.jpg";
import foto4 from "../fotos/foto4.jpg";
import foto5 from "../fotos/foto5.jpg";
import foto6 from "../fotos/foto6.jpg";
import foto7 from "../fotos/foto7.jpg";
import foto8 from "../fotos/foto8.jpg";
import foto9 from "../fotos/foto9.jpg";
import foto10 from "../fotos/foto10.jpg";
import foto11 from "../fotos/foto11.jpg";
import foto12 from "../fotos/foto12.jpg";
import foto13 from "../fotos/foto13.jpg";
import foto14 from "../fotos/foto14.jpg";

import fundo from "../fotos/fundoAmarelo.jpg";
import { Musica } from "./GaleriaMusica";
import { Link } from "react-router-dom";


function Galeria() {

  const fotos = [
    foto1,
    foto2,
    foto3,
    foto4,
    foto5,
    foto6,
    foto7,
    foto8,
    foto9,
    foto10,
    foto11,
    foto12,
    foto13,
    foto14,
  ];

  const [fotoSelecionada, setFotoSelecionada] = useState(null);


  // FOTO SEGUINTE
  const proximaFoto = () => {
    setFotoSelecionada((fotoAtual) => {
      if (fotoAtual === null) return null;

      return (fotoAtual + 1) % fotos.length;
    });
  };


  // FOTO ANTERIOR
  const fotoAnterior = () => {
    setFotoSelecionada((fotoAtual) => {
      if (fotoAtual === null) return null;

      return (
        (fotoAtual - 1 + fotos.length) %
        fotos.length
      );
    });
  };


  // Impede a página de rolar enquanto o carrossel estiver aberto
  useEffect(() => {

    if (fotoSelecionada !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };

  }, [fotoSelecionada]);


  // Fecha com a tecla ESC
  useEffect(() => {

    const fecharComEsc = (event) => {

      if (event.key === "Escape") {
        setFotoSelecionada(null);
      }

    };

    document.addEventListener("keydown", fecharComEsc);

    return () => {
      document.removeEventListener("keydown", fecharComEsc);
    };

  }, []);


  return (
    <>
      <Header />

      <main className="galeria-page">

        {/* =========================================
            MEMÓRIAS
        ========================================= */}

        <section className="memorias">

          <div className="memorias-conteudo">

            <h1>Memórias</h1>

            <p className="frase-memorias">
              “Aqueles que não conseguem lembrar o passado
              <br />
              estão condenados a repeti-lo”
            </p>


            <h2>Principais Buscas:</h2>

            <div className="principaisBuscas">

              <div className="busca-card">
                <img
                  src={Danca}
                  alt="Dança"
                />

                <span>Dança</span>
              </div>


              <div className="busca-card">
                <img
                  src={Batuque}
                  alt="Batuque"
                />

                <span>Batuque</span>
              </div>

            </div>


            {/* CATEGORIAS */}

            <div className="categorias">

              <h3>Categorias</h3>

              <div className="linha-decorativa"></div>

              <div className="categorias-links">

                <Link to="/galeria">
                  Fotos
                </Link>

                <Link to="/musicas">
                  Músicas
                </Link>

                <Link to="/batuque">
                  Batuque
                </Link>

                <Link to="/artes">
                  Artes
                </Link>

              </div>

            </div>

          </div>


          {/* FOTO MEMÓRIA */}

          <div className="memorias-fots">

            <img
              src={Coroa}
              alt="Foto representando a memória"
            />

            <p>
              "A memória preserva aquilo que o tempo não pode apagar."
            </p>

          </div>

        </section>


        {/* =========================================
            FOTOGRAFIAS
        ========================================= */}

        <section className="fotografias">


          <div className="fotografias-fundo">
            <img
              src={fundo}
              alt="fundo amarelo"
            />
          </div>


          <div className="fundo-geral">
            <img
              src={fundo}
              alt="fundo geral"
            />
          </div>


          <div className="fundo-geral2">
            <img
              src={fundo}
              alt="fundo geral"
            />
          </div>


          <div className="fundo-geral3">
            <img
              src={fundo}
              alt="fundo geral"
            />
          </div>


          {/* INFORMAÇÕES */}

          <div className="fotografias-info">

            <h1>Fotografias</h1>

            <button>
              Explorar Galeria →
            </button>


            <h2>Sobre</h2>

            <p>
              “Aqueles que não conseguem lembrar o passado
              estão condenados a repeti-lo”
            </p>


            <div className="fotografias-destaque">

              <img
                src={Destaque}
                alt="Foto Destaque"
              />

            </div>


            <div>

              <h3 className="texto-destaque">
                Foto Destaque
              </h3>

            </div>


            <div className="fotografias-botoes">

              <button>
                Outros
              </button>

              <button>
                ‹ Sair
              </button>

            </div>

          </div>


          {/* =========================================
              MOSAICO
          ========================================= */}

          <div className="fotosmosaico">

            <div className="foto1">
              <img
                src={foto1}
                alt="primeira foto"
                onClick={() => setFotoSelecionada(0)}
              />
            </div>


            <div className="foto2">
              <img
                src={foto2}
                alt="segunda foto"
                onClick={() => setFotoSelecionada(1)}
              />
            </div>


            <div className="foto3">
              <img
                src={foto3}
                alt="terceira foto"
                onClick={() => setFotoSelecionada(2)}
              />
            </div>


            <div className="foto4">
              <img
                src={foto4}
                alt="quarta foto"
                onClick={() => setFotoSelecionada(3)}
              />
            </div>


            <div className="foto5">
              <img
                src={foto5}
                alt="quinta foto"
                onClick={() => setFotoSelecionada(4)}
              />
            </div>


            <div className="foto6">
              <img
                src={foto6}
                alt="sexta foto"
                onClick={() => setFotoSelecionada(5)}
              />
            </div>


            <div className="foto7">
              <img
                src={foto7}
                alt="sétima foto"
                onClick={() => setFotoSelecionada(6)}
              />
            </div>


            <div className="foto8">
              <img
                src={foto8}
                alt="oitava foto"
                onClick={() => setFotoSelecionada(7)}
              />
            </div>


            <div className="foto9">
              <img
                src={foto9}
                alt="nona foto"
                onClick={() => setFotoSelecionada(8)}
              />
            </div>


            <div className="foto10">
              <img
                src={foto10}
                alt="décima foto"
                onClick={() => setFotoSelecionada(9)}
              />
            </div>


            <div className="foto11">
              <img
                src={foto11}
                alt="décima primeira foto"
                onClick={() => setFotoSelecionada(10)}
              />
            </div>


            <div className="foto12">
              <img
                src={foto12}
                alt="décima segunda foto"
                onClick={() => setFotoSelecionada(11)}
              />
            </div>


            <div className="foto13">
              <img
                src={foto13}
                alt="décima terceira foto"
                onClick={() => setFotoSelecionada(12)}
              />
            </div>


            <div className="foto14">
              <img
                src={foto14}
                alt="décima quarta foto"
                onClick={() => setFotoSelecionada(13)}
              />
            </div>

          </div>

        </section>

      </main>


      {/* =====================================================
          CARROSSEL
          ELE É CRIADO DIRETAMENTE NO BODY
          NÃO OCUPA ESPAÇO NA PÁGINA
      ===================================================== */}

      {fotoSelecionada !== null &&
        createPortal(

          <div
            className="carrossel-overlay"
            onClick={() => setFotoSelecionada(null)}
          >


            {/* BOTÃO FECHAR */}

            <button
              className="carrossel-fechar"
              onClick={() => setFotoSelecionada(null)}
              aria-label="Fechar carrossel"
            >
              ×
            </button>


            {/* SETA ESQUERDA */}

            <button
              className="carrossel-seta esquerda"
              onClick={(event) => {
                event.stopPropagation();
                fotoAnterior();
              }}
              aria-label="Foto anterior"
            >
              ‹
            </button>


            {/* =========================================
                CONTEÚDO DO CARROSSEL
            ========================================= */}

            <div
              className="carrossel-conteudo"
              onClick={(event) => event.stopPropagation()}
            >


              {/* FOTO ANTERIOR */}

              <div className="carrossel-item foto-secundaria">

                <img
                  src={
                    fotos[
                    (fotoSelecionada - 1 + fotos.length) %
                    fotos.length
                    ]
                  }
                  alt="Foto anterior"
                  onClick={fotoAnterior}
                />

              </div>


              {/* FOTO PRINCIPAL */}

              <div className="carrossel-item foto-principal">

                <img
                  src={fotos[fotoSelecionada]}
                  alt="Foto atual"
                />

              </div>


              {/* PRÓXIMA FOTO */}

              <div className="carrossel-item foto-secundaria">

                <img
                  src={
                    fotos[
                    (fotoSelecionada + 1) %
                    fotos.length
                    ]
                  }
                  alt="Próxima foto"
                  onClick={proximaFoto}
                />

              </div>


            </div>


            {/* SETA DIREITA */}

            <button
              className="carrossel-seta direita"
              onClick={(event) => {
                event.stopPropagation();
                proximaFoto();
              }}
              aria-label="Próxima foto"
            >
              ›
            </button>


          </div>,

          document.body
        )}

    </>
  );
}

export default Galeria;