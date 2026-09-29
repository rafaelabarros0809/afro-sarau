
import { useState } from "react";
import { Link } from "react-router-dom";

import "./GaleriaArtes.css";

import arteDestaque from "../fotos/FotoPrincipal.jpg";
import moldura from "../fotos/MOLDURA.png"
import artePerfil from "../fotos/PinturaDestaque.jpg";
import logo from "../fotos/logo.png";
import fundo from "../fotos/fundoAmarelo.jpg";

import foto2Artes from "../fotos/GaleriaArtes-2.jpg";
import foto3Artes from "../fotos/GaleriaArtes-3.jpg";
import foto4Artes from "../fotos/GaleriaArtes-4.jpg";
import foto5Artes from "../fotos/GaleriaArtes-5.jpg";
import foto6Artes from "../fotos/GaleriaArtes-6.jpg";
import foto7Artes from "../fotos/GaleriaArtes-7.jpg";
import foto8Artes from "../fotos/GaleriaArtes-8.jpg";
import foto9Artes from "../fotos/GaleriaArtes-9.jpg";
import foto10Artes from "../fotos/GaleriaArtes-10.jpg";
import foto11Artes from "../fotos/GaleriaArtes-11.jpg";
import foto12Artes from "../fotos/GaleriaArtes-12.jpg";
import foto13Artes from "../fotos/GaleriaArtes-13.jpg";
import foto14Artes from "../fotos/GaleriaArtes-14.jpg";
import foto15Artes from "../fotos/GaleriaArtes-15.jpg";
import foto16Artes from "../fotos/GaleriaArtes-16.jpg";
import foto17Artes from "../fotos/GaleriaArtes-17.jpg";
import foto18Artes from "../fotos/GaleriaArtes-18.jpg";
import foto19Artes from "../fotos/GaleriaArtes-19.jpg";
import foto20Artes from "../fotos/GaleriaArtes-20.jpg";

function GaleriaArtes() {
    const [carrosselAberto, setCarrosselAberto] = useState(false);
    const [imagemAtual, setImagemAtual] = useState(0);

    const imagensArtes = [
        arteDestaque,
        artePerfil,
        foto2Artes,
        foto3Artes,
        foto4Artes,
        foto5Artes,
        foto6Artes,
        foto7Artes,
        foto8Artes,
        foto9Artes,
        foto10Artes,
        foto11Artes,
        foto12Artes,
        foto13Artes,
        foto14Artes,
        foto15Artes,
        foto16Artes,
        foto17Artes,
        foto18Artes,
        foto19Artes,
        foto20Artes,
    ];

    const abrirCarrossel = () => {
    setImagemAtual(0);
    setCarrosselAberto(true);
};

const fecharCarrossel = () => {
    setCarrosselAberto(false);
};

const proximaImagem = () => {

    setImagemAtual((atual) =>
        atual === imagensArtes.length - 1
            ? 0
            : atual + 1
    );

};

const imagemAnterior = () => {

    setImagemAtual((atual) =>
        atual === 0
            ? imagensArtes.length - 1
            : atual - 1
    );

};

    return (
        <>
            <main className="artesPage">

                <div className="fotografias-fundo-Artes">
                    <img
                        src={fundo}
                        alt="Fundo amarelo"
                    />
                </div>

                <div className="fundo-geral-Artes">
                    <img
                        src={fundo}
                        alt="Fundo geral"
                    />
                </div>

                <div className="fundo-geral2-Artes">
                    <img
                        src={fundo}
                        alt="Fundo geral"
                    />
                </div>

                <div className="fundo-geral3-Artes">
                    <img
                        src={fundo}
                        alt="Fundo geral"
                    />
                </div>

                <section className="artesConteudo">

                    <aside className="ladoDireito">

                        <div className="arteMenor">
                            <img
                                src={artePerfil}
                                alt="Pintura"
                            />
                        </div>

                        <div className="cartegorias-arte">

                            <h3>Categoria</h3>

                            <div className="linha-decorativa-Artes"></div>

                            <div className="categoria-links-Artes">

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

                        <h1 className="TituloArtes">
                            Artes
                        </h1>

                        <button className="Button-SaibaMais">
                            Saiba Mais →
                        </button>

                        <h2 className="Sobre">
                            Sobre
                        </h2>

                        <div className="textoArtes">
                            <p>
                                “A dor atravessou gerações, levou
                                mães, palavras e costumes, mas não
                                levou nossas raízes. É no grito e
                                no silêncio que a arte se torna
                                memória e resistência, mantendo
                                vivas histórias que sobreviveram ao
                                silêncio. Onde tentaram apagar uma
                                cultura, a arte encontrou uma forma
                                de fazê-la permanecer.”
                            </p>
                        </div>

                    </aside>

                    <div className="artesInferios">

                        <div className="logo">

                            <img
                                src={logo}
                                alt="Logo Afro Sarau"
                            />

                            <p>
                                Lutamos ontem. Resistimos
                                <br />
                                hoje. Lutaremos amanhã
                            </p>

                        </div>

                        <div className="buttons">

                            <button className="Outros">
                                Outros
                            </button>

                            <Link to="/home">
                                ‹ Sair
                            </Link>

                        </div>

                    </div>

                </section>

                <section className="artedestaque">


                    <div className="DestaqueArtes">
                        <img
                            src={arteDestaque}
                            alt="Obra de arte"
                        />

                        <img src={moldura} 
                        alt="moldura da imagem"
                         />

                    </div>

                    <div className="ornamentoArtes">
                        ✦
                    </div>

                    <h2>
                        Beleza e Luta
                    </h2>

                    <p className="Subtitulo">
                        “Iṣẹ́ ọ̀nà, bisalu”
                    </p>

                    <button className="Carrossel-Button"
                    onClick={abrirCarrossel}>
                        Ver mais →
                    </button>

                </section>
{carrosselAberto && (

    <div className="carrosselOverlay">

        <div className="carrosselJanela">

            {/* BOTÃO FECHAR */}

            <button
                className="carrosselFechar"
                onClick={fecharCarrossel}
                aria-label="Fechar carrossel"
            >
                ×
            </button>


            {/* BOTÃO ESQUERDA */}

            <button
                className="carrosselAnterior"
                onClick={imagemAnterior}
                aria-label="Imagem anterior"
            >
                ‹
            </button>


            {/* IMAGEM */}

            <div className="carrosselImagem">

                <img
                    src={imagensArtes[imagemAtual]}
                    alt={`Arte ${imagemAtual + 1}`}
                />

            </div>


            {/* BOTÃO DIREITA */}

            <button
                className="carrosselProxima"
                onClick={proximaImagem}
                aria-label="Próxima imagem"
            >
                ›
            </button>


            {/* CONTADOR */}

            <div className="carrosselContador">

                {imagemAtual + 1} / {imagensArtes.length}

            </div>

        </div>

    </div>

)}
            </main>
        </>
    );
}

export default GaleriaArtes;

