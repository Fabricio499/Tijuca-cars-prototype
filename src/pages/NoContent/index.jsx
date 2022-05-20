import React from "react";
import "./styles.css";
import img from "../../assets/image/ovo.png";

export const NoContent = () => {
  return (
    <div className="tudotudo">
      <div className="tudo">
        <div className="frases">
          <h1>404</h1>
          <h3>Page not found</h3>
        </div>
        <img src={img} alt="ovo quebrado" />
      </div>
      <footer>
        <p className="final">
          Desculpe, mas essa página não foi encontrada. Ela pode ter sido
          removida ou você pode ter digitado o endereço incorreto.
        </p>
      </footer>
    </div>
  );
};
