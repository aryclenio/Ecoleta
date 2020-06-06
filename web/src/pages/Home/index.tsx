import React from "react";
import "./styles.css";
import logo from "../../assets/logo.svg";
import { FiLogIn } from "react-icons/fi";

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta" />
        </header>
        <main>
          <h1>Seu lugar de coleta de residuos e lixo orgânico.</h1>
          <p>
            Ajudamos as pessias a encontrarem pontos de coleta da forma mais
            legal possivel
          </p>
          <a href="google.com">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um novo ponto de coleta.</strong>
          </a>
        </main>
      </div>
    </div>
  );
};

export default Home;
