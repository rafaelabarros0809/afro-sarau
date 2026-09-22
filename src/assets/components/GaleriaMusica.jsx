import { useState } from "react";


import "./GaleriaMusica.css";
import { Header } from "./Header";
import { Link, useNavigate } from "react-router-dom";


import blackLives from "../fotos/BlackLives.jpg";
import destaque from "../fotos/MusicaDestaque.jpg";
import tribalistas from "../fotos/Tribalistas.jpg";
import elza from "../fotos/ElaMusica.jpg";
import peponi from "../fotos/Peponi.jpg";
import clara from "../fotos/CLARA NUNES.jpg";
import racionais from "../fotos/Racionais.jpg";
import michaeljackson from "../fotos/MichaelJackson.jpg";
import emicida from "../fotos/Emicida.jpg";
import beyonce from "../fotos/Beyonce.jpg";
import rappa from "../fotos/O Rappa.jpg";
import raioX from "../fotos/RaioX.jpg";

import fundo from "../fotos/fundoAmarelo.jpg";

const musicas = [
    {
        id: 1,
        titulo: "Diáspora",
        artista: "Tribalistas",
        capa: tribalistas,
        duracao: "4:19",
    },
    {
        id: 2,
        titulo: "A Carne",
        artista: "Elza Soares",
        capa: elza,
        duracao: "4:50",
    },
    {
        id: 3,
        titulo: "Peponi",
        artista: "Alê Sabi",
        capa: peponi,
        duracao: "4:11",
    },
    {
        id: 4,
        titulo: "Canto das Três Raças",
        artista: "Clara Nunes",
        capa: clara,
        duracao: "4:22",
    },
    {
        id: 5,
        titulo: "Negro Drama",
        artista: "Racionais",
        capa: racionais,
        duracao: "6:54",
    },
    {
        id: 6,
        titulo: "They Don't Care About Us",
        artista: "Michael Jackson",
        capa: michaeljackson,
        duracao: "4:43",
    },
    {
        id: 7,
        titulo: "Boa Esperança",
        artista: "Emicida",
        capa: emicida,
        duracao: "3:04",
    },
    {
        id: 8,
        titulo: "Freedom",
        artista: "Beyoncé",
        capa: beyonce,
        duracao: "4:50",
    },
    {
        id: 9,
        titulo: "Todo Camburão Tem um Pouco de Navio Negreiro",
        artista: "O Rappa",
        capa: rappa,
        duracao: "4:50",
    },
    {
        id: 10,
        titulo: "Black or White",
        artista: "Michael Jackson",
        capa: michaeljackson,
        duracao: "6:23",
    },
];

export function Musica() {

    const [musicaSelecionada, setMusicaSelecionada] = useState(null);
    const [favorita, setFavorita] = useState(false);

    const navigate = useNavigate();

    return (
        <>
            <Header />

            <main className="FotosPage">

                <section className="primeiraParte">

                    <div className="fotos-Conteudo">

                        <h2>
                            MEMÓRIA • IDENTIDADE • RESISTÊNCIA
                        </h2>

                        <p>
                            “A memória negra atravessa gerações.
                            Ela vive nas histórias, nas manifestações <br />culturais,
                            nas lutas e nas conquistas de um povo que, apesar das
                            tentativas de <br /> apagamento, continua escrevendo sua própria  
                          

                            <span> história.</span>”
                        </p>


                        <div className="imagem-Info-BlackLives">

                            <img
                                src={blackLives}
                                alt="Protesto Black Lives Matter"
                            />

                            <div className="info">

                                <p>
                                    <span>Apoie:</span> Black Lives Matter:
                                    <br />

                                    <a
                                        href="https://blacklivesmatter.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://blacklivesmatter.com/
                                    </a>
                                </p>

                            </div>

                        </div>


                        <div className="fotoDestaque">

                            <img
                                src={destaque}
                                alt="Foto destaque"
                            />

                            <p>
                                “Onde tentaram apagar nossa história,
                               <br /> nós escrevemos a nossa.”
                            </p>

                        </div>

                    </div>


                    <div className="categoriasFotos">
 
                       <h3>
                            Categorias
                        </h3>

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

                </section>


                <section className="Musica">

                    
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

                    <div className="mosaicosInfos">

                        <h1>Músicas</h1>

                        <button>
                            Explorar Músicas →
                        </button>

                        <h2>Sobre:</h2>


                        <p>
                            Os movimentos negros utilizam a música como forma de resistência e protesto, denunciando o racismo, a desigualdade e a violência. Do samba e dos blocos afro ao rap, hip-hop, reggae e funk, a música também preserva a ancestralidade, a identidade e a memória negra, transformando experiências de luta em expressão cultural e política.
                        </p>

                        <div className="CapaDestaque">
                            <img src={raioX} alt="Capa Racionais" />

                            <div className="textoDescricacao">
                                <p>
                                    <span>
                                        Capa Destaque:
                                    </span>
                                    Por: Racionais
                                    Raio X Brasil
                                </p>
                            </div>
                        </div>


                        <div className="Musica-botoes">

                            <button>
                                Outros
                            </button>

                            <button>
                                ‹ Sair
                            </button>

                        </div>



                        <div className="playlist">

                            <h2>Playlist</h2>

                            {/* musica 1 */}
                            <div
                                className={`musica-item ${musicaSelecionada?.id === 1 ? "musica-selecionada" : ""
                                    }`}
                                onClick={() => {
                                    setMusicaSelecionada(musicas[0]);
                                    setFavorita(false);
                                }}
                            >
                                <span className="numero">1</span>
                                <img src={tribalistas} alt="Tribalistas" />

                                <div className="musica-info">
                                    <h3>Diáspora</h3>
                                    <p>Tribalistas</p>
                                </div>

                                <span className="duracao">4:19</span>
                                <button className="mais">...</button>
                            </div>

                            {/* musica 2 */}
                            <div
                                className={`musica-item ${musicaSelecionada?.id === 2 ? "musica-selecionada" : ""
                                    }`}
                                onClick={() => {
                                    setMusicaSelecionada(musicas[1]);
                                    setFavorita(false);
                                }}
                            >
                                <span className="numero">2</span>
                                <img src={elza} alt="Elza Soares" />

                                <div className="musica-info">
                                    <h3>A Carne</h3>
                                    <p>Elza Soares</p>
                                </div>

                                <span className="duracao">4:50</span>
                                <button className="mais">...</button>
                            </div>


                            {/* musica 3 */}
                            <div
                                className={`musica-item ${musicaSelecionada?.id === 2 ? "musica-selecionada" : ""
                                    }`}
                                onClick={() => {
                                    setMusicaSelecionada(musicas[2]);
                                    setFavorita(false);
                                }}
                            >
                                <span className="numero">3</span>
                                <img src={peponi} alt="Peponi" />

                                <div className="musica-info">
                                    <h3>Peponi</h3>
                                    <p>Alê Sabi</p>
                                </div>

                                <span className="duracao">4:11</span>
                                <button className="mais">...</button>
                            </div>

                            {/* musica 4 */}
                            <div
                                className={`musica-item ${musicaSelecionada?.id === 2 ? "musica-selecionada" : ""
                                    }`}
                                onClick={() => {
                                    setMusicaSelecionada(musicas[3]);
                                    setFavorita(false);
                                }}
                            >
                                <span className="numero">4</span>
                                <img src={clara} alt="Clara Nunes" />

                                <div className="musica-info">
                                    <h3>Canto das Três Raças</h3>
                                    <p>Clara Nunes</p>
                                </div>

                                <span className="duracao">4:22</span>
                                <button className="mais">...</button>
                            </div>

                            {/* musica 5 */}
                            <div
                                className={`musica-item ${musicaSelecionada?.id === 2 ? "musica-selecionada" : ""
                                    }`}
                                onClick={() => {
                                    setMusicaSelecionada(musicas[4]);
                                    setFavorita(false);
                                }}
                            >
                                <span className="numero">5</span>
                                <img src={racionais} alt="Racionais" />

                                <div className="musica-info">
                                    <h3>Negro Drama</h3>
                                    <p>Racionais</p>
                                </div>

                                <span className="duracao">6:54</span>
                                <button className="mais">...</button>
                            </div>

                            {/* musica 6 */}
                            <div
                                className={`musica-item ${musicaSelecionada?.id === 2 ? "musica-selecionada" : ""
                                    }`}
                                onClick={() => {
                                    setMusicaSelecionada(musicas[5]);
                                    setFavorita(false);
                                }}
                            >
                                <span className="numero">6</span>
                                <img src={michaeljackson} alt="Michael Jackson" />

                                <div className="musica-info">
                                    <h3>They Don't Care About Us</h3>
                                    <p>Michael Jackson</p>
                                </div>

                                <span className="duracao">4:43</span>
                                <button className="mais">...</button>
                            </div>

                            {/* musica 7 */}
                            <div
                                className={`musica-item ${musicaSelecionada?.id === 2 ? "musica-selecionada" : ""
                                    }`}
                                onClick={() => {
                                    setMusicaSelecionada(musicas[6]);
                                    setFavorita(false);
                                }}
                            >
                                <span className="numero">7</span>
                                <img src={emicida} alt="Emicida" />

                                <div className="musica-info">
                                    <h3>Boa Esperança</h3>
                                    <p>Emicida</p>
                                </div>

                                <span className="duracao">3:04</span>
                                <button className="mais">...</button>
                            </div>

                            {/* musica 8 */}
                            <div
                                className={`musica-item ${musicaSelecionada?.id === 2 ? "musica-selecionada" : ""
                                    }`}
                                onClick={() => {
                                    setMusicaSelecionada(musicas[7]);
                                    setFavorita(false);
                                }}
                            >
                                <span className="numero">8</span>
                                <img src={beyonce} alt="Beyoncé" />

                                <div className="musica-info">
                                    <h3>Freedom</h3>
                                    <p>Beyoncé</p>
                                </div>

                                <span className="duracao">4:50</span>
                                <button className="mais">...</button>
                            </div>

                            {/* musica 9 */}
                            <div
                                className={`musica-item ${musicaSelecionada?.id === 2 ? "musica-selecionada" : ""
                                    }`}
                                onClick={() => {
                                    setMusicaSelecionada(musicas[8]);
                                    setFavorita(false);
                                }}
                            >
                                <span className="numero">9</span>
                                <img src={rappa} alt="O Rappa" />

                                <div className="musica-info">
                                    <h3>Todo Camburão Tem um Pouco de Navio Negreiro</h3>
                                    <p>O Rappa</p>
                                </div>

                                <span className="duracao">4:50</span>
                                <button className="mais">...</button>
                            </div>

                            {/* musica 10 */}
                            <div
                                className={`musica-item ${musicaSelecionada?.id === 2 ? "musica-selecionada" : ""
                                    }`}
                                onClick={() => {
                                    setMusicaSelecionada(musicas[9]);
                                    setFavorita(false);
                                }}
                            >
                                <span className="numero">10</span>
                                <img src={michaeljackson} alt="Michael Jackson" />

                                <div className="musica-info">
                                    <h3>Black or White</h3>
                                    <p>Michael Jackson</p>
                                </div>

                                <span className="duracao">6:23</span>
                                <button className="mais">...</button>
                            </div>

                        </div>
                    </div>

                </section>
                {musicaSelecionada && (
                    <div className="player-musica">

                        <div className="player-info">

                            <img
                                src={musicaSelecionada.capa}
                                alt={musicaSelecionada.titulo}
                            />

                            <div>
                                <h3>{musicaSelecionada.titulo}</h3>
                                <p>{musicaSelecionada.artista}</p>
                            </div>

                        </div>

                        <button
                            className={`botao-favorito ${favorita ? "favoritado" : ""
                                }`}
                            onClick={() => {
                                const favoritosSalvos =
                                    JSON.parse(localStorage.getItem("favoritos")) || [];

                                const jaExiste = favoritosSalvos.some(
                                    (item) => item.id === musicaSelecionada.id
                                );

                                if (!jaExiste) {
                                    localStorage.setItem(
                                        "favoritos",
                                        JSON.stringify([
                                            ...favoritosSalvos,
                                            musicaSelecionada
                                        ])
                                    );
                                }

                                setFavorita(true);
                                navigate("/favoritos");
                            }}
                        >
                            ♡
                        </button>

                        <div className="player-linha">

                            <div className="linha-musica"></div>

                            <span>{musicaSelecionada.duracao}</span>

                        </div>

                        <a href="https://open.spotify.com/playlist/00T6YfXuiZG8UV5MzsAong" className="botao-ouvir">
                        Ouvir
                        </a>

                    </div>
                )}
            </main>
        </>
    );
}

export default Musica;