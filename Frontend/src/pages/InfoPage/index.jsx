import React from "react";
import "./styles.js";
import face from "../../assets/image/face.svg";
import inst from "../../assets/image/inst.svg";
import lin from "../../assets/image/lin.svg";
import {StyledPagin} from './styles'

import mulher from "../../assets/image/mulher.svg";
import {NavbarInfo}  from "../../Components/NavbarInfo";

export const InfoPage = () => {
  return (
    <StyledPagin>
    <div id="container">
      <NavbarInfo />
      <div className="fundo">
        <div className="div-titulo">
          <h1 className="fundo-h1">Tijuca Cars</h1>
          <p className="fundop">Aluguel de carros só aqui!</p>
        </div>
        <div className="div-info">
          <p className="txt">
            A Tijuca Cars é uma empresa onde você pode alugar um carro para
            satisfazer vontades, como sair com sua família, ir à um lugar
            importante, entre divesos outros lugares. Nossa empresa vem
            crescendo no ramo e já somos mais de 5mil cadastrados.
          </p>
          <br />
          <h1 id="alugar">.</h1>
        </div>

        <div className="quadro-tudo">
          <div className="quadro-titulo">
            <h3 id="pagamento">• Como alugar um carro:</h3>
          </div>
          <div className="quadro-alugar">
            <p>
              Vá até a agência selecionada e faça seu aluguel com um dos
              atendentes ou você pode alugar no próprio site acessando o menu.
            </p>
          </div>

          {/* // */}

          <div className="quadro-titulo">
            <h3 id="dias">• Sobre o pagamento:</h3>
          </div>
          <div className="quadro-pagamento">
            <p className="p2">
              Ao realizar o aluguel de carros, o motorista irá pagar as diárias
              equivalentes ao período do aluguel. O preço inclui taxas da
              locadora, como seguro e serviços adicionais.
            </p>
          </div>

          {/* // */}

          <div className="quadro-titulo">
            <h3 id="modelos">• Condições da devolução:</h3>
          </div>
          <div className="quadro-dias">
            <p>
              É importante que o veículo seja devolvido nas mesmas condições em
              que foi alocado. Sendo assim, é recomendado que o automóvel
              retorne em estado como ao verificado no check-in da entrega. Em
              caso de mal uso, serão cobrados valores adicionais para a limpeza
              do veículo, conforme a necessidade.
            </p>
          </div>
          <div className="quadro-titulo">
            <h3 id="modelos">• Quais os modelos de carros:</h3>
          </div>
          <div className="quadro-modelos">
            <ul className="u1">
              <li>Fiat Argo 1.0</li>
              <li>Fiat Mobi like</li>
              <li>Hyundai HB20</li>
            </ul>

            <ul className="u1">
              <li>Volkswagen Gol 1.0</li>
              <li>Chevrolet Onix Plus LT 1.0</li>
              <li>Renault Sandero GT Line 1.0</li>
            </ul>

            <ul>
              <li>Chevrolet Onix 1.0</li>
              <li>Volkswagen Polo 1.0</li>
              <li>Hyundai HB20S Vision 1.0</li>
            </ul>
          </div>
          <div className="quadro-titulo">
            <h3 id="retirada">•O que precisa levar na retirada:</h3>
          </div>
          <div className="quadro">
            <p>
              Para a retirada, vá até a agência selecionada e apresente o seu
              código juntamente à sua CNH.
            </p>
          </div>
        </div>
        <footer>
          <div>
            <img className="img-mulher" src={mulher} />
            <div className="img">
              <img className="inst" src={face} />
              <p className="p1">@TIJUCA_CARS</p>
              <img className="face" src={inst} />
              <p className="p1">TIJUCA_CARS</p>
              <img className="lin" src={lin} />
              <p className="p1">TIJUCA_CARS</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
    </StyledPagin>
  );
};
