import React, {useState} from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
    const [showModal, setModal] = useState(false);

    function deleteHandler() {
        setModal(true);     
    }

    function closeHandler() {
      setModal(false);
    }
    return (
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>Delete</button> 
        </div>
        {showModal && <Modal onCancel={closeHandler} onConfirm={closeHandler}/>}
        {showModal && <Backdrop onClick={closeHandler}/>}
      </div>
    );
}

export default Todo;