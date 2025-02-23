import React from "react";
import { Modal, ModalBody, ModalHeader } from "react-bootstrap";

type Todo = {
    id: number;
    text: string;
    isChecked: boolean;
};

type TodoModalProps = {
    show: boolean;
    todo: Todo | null;
    handleClose : () => void;
}

const TodoModal : React.FC<TodoModalProps> = ({show, todo, handleClose}) => {
    return(
        <div>
            <Modal show={show} onHide={()=>handleClose()}>
                <ModalHeader closeButton>
                    <Modal.Title>Todo Information</Modal.Title>
                </ModalHeader>
                <ModalBody>{todo?.text}</ModalBody>
            </Modal>
        </div>
    );
}

export default TodoModal;