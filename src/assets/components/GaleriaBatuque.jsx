import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./GaleriaBatuque.css";
import { Header } from "./Header";

import destaque from "../fotos/destaqueBatuque.jpg";
import quadro from "../fotos/quadroBatuqe.jpg";
import batuque from "../fotos/batuque.jpg";
import comunidade from "../fotos/comunidade.jpg";
import capoeira from "../fotos/capoeira.jpg";
import outros from "../fotos/fotosEvideos.jpg";
import Fotodestaque from "../fotos/dandara.jpg";
import fundo from "../fotos/fundoAmarelo.jpg";

export function Batuque() {
    const navigate = useNavigate();

    return (
        <>
            <Header />

            <main className="batuquePage">
                <section className="PrimeiraParte">

                    <div className="infosEsquerda">
                        <h2>
                            MEMÓRIA • IDENTIDADE • RESISTÊNCIA
                        </h2>

                        <p>
                            “Mas por um acaso negro não tem olhos, hein? Ele não tem mão, não tem sentimento? Não come da mesma comida, não sofre das mesmas doenças? Não precisa dos mesmos remédios? Quando a gente sua, não sua igual a um branco, hein?  Não precisa dos mesmos remédios? Quando a gente sua, não sua igual a um branco, hein?” -Ó Pai Ó
                        </p>

                        <div className="quadro">
                            <img src={quadro} alt="Quadro da direita" />
                        </div>

                        <div className="categoria">

                            <h3>
                                Categorias
                            </h3>

                            <div className="linha-decorativa"></div>

                            <div className="categoria-links">

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

                    <div className="fotoBatuque">
                        <img src={destaque} alt="Mulher com tambor" />
                        <p>
                            “Onde a palavra foi silenciada, o tambor continuou falando.”
                        </p>
                    </div>

                </section>


                <section className="batuque">

                    {/* FUNDOS */}
                    <div className="fotografias-fundo-Batuque">
                        <img src={fundo} alt="Fundo amarelo" />
                    </div>

                    <div className="fundo-geral-Batuque">
                        <img src={fundo} alt="Fundo geral" />
                    </div>

                    <div className="fundo-geral2-Batuque">
                        <img src={fundo} alt="Fundo geral" />
                    </div>

                    <div className="fundo-geral3-Batuque">
                        <img src={fundo} alt="Fundo geral" />
                    </div>


                    {/* LADO ESQUERDO */}
                    <div className="ladoEsquerdo">

                        <div className="infos">

                            <h1>Batuque</h1>

                            <button>
                                Explorar →
                            </button>

                            <h2>Sobre:</h2>

                            <p>
                                O batuque nasce do encontro entre corpo, tambor e comunidade.
                                Mais que música, é uma forma de expressão, memória e resistência.
                            </p>

                            <div className="fotoInfo">

                                <img
                                    src={Fotodestaque}
                                    alt="Dandara"
                                />

                                <h2>
                                    Dandara dos Palmares
                                </h2>

                            </div>

                            <div className="Batuque-botoes">

                                <button className="btnOutros">
                                    Outros
                                </button>

                                <button className="btnSair">
                                    ‹ Sair
                                </button>

                            </div>

                        </div>

                    </div>


                    {/* LADO DIREITO */}
                    <div className="ladoDireito">

                        <Link to="/instrumentos" className="card-link">
                            <div className="CardBatuque">
                                <img
                                    src={batuque}
                                    alt="Instrumentos"
                                />

                                <h3>Instrumentos</h3>

                                <p>Ver Mais →</p>
                            </div>
                        </Link>


                        <Link to="/corpo-movimento" className="card-link">
                            <div className="CardDanca">
                                <img
                                    src={capoeira}
                                    alt="Corpo e Movimento"
                                />

                                <h3>Corpo e Movimento</h3>

                                <p>Ver Mais →</p>
                            </div>
                        </Link>


                        <Link to="/comunidade" className="card-link">
                            <div className="CardComunidade">
                                <img
                                    src={comunidade}
                                    alt="Comunidade"
                                />

                                <h3>Comunidade</h3>

                                <p>Ver Mais →</p>
                            </div>
                        </Link>


                        <Link to="/fotos-videos" className="card-link">
                            <div className="Fotos">
                                <img
                                    src={outros}
                                    alt="Fotos e Vídeos"
                                />

                                <h3>Fotos e Vídeos</h3>

                                <p>Ver Mais →</p>
                            </div>
                        </Link>

                    </div>
                </section>
            </main>
        </>
    );
}


export default Batuque;
