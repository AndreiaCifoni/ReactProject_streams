import React from "react";
import Modal from "../Modal";
import history from "../../history";

const StreamDelete = () => {
  const actions = (
    //React.Fragment pode ser representado como os tags vazios "<></>"
    //estamos usando essa tag ao invez de div pq o div tira o style usado no JSX
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );

  return (
    <div>
      StreamDelete
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
        onismiss={() => history.push("/")}
      />
    </div>
  );
};

export default StreamDelete;
