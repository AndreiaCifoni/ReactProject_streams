import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      {/* o stopPropagation ai de baixo vai fazer parar o efeito bolha 
      do onClick de cima... se nao for adicionado ai embaixo, o de cima
      acaba passando pra children  */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>

        <div className="actions">{props.actions}</div>
      </div>
    </div>,

    document.querySelector("#modal")
  );
};

export default Modal;
