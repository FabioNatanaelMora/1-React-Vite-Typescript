import { useState } from "react";
import ModalColorPick from "../ModalColorPick/ModalColorPick";
import { Button } from "react-bootstrap";

const ButtonColorPick = () =>{
    //Color inicial modal
    const [buttonColor, setButtonColor] = useState("#3d7c40");

    //Manejo del Modal
    const [ showModal, setShowModal] = useState(false);

    //Funcion para cambiar el color del boton
    const handleColorChange = (color: string) => {
        setButtonColor(color);
    };
    //Funcion al hacer click en el boton se muestra el modal
    const handleShowModal = () =>{
        setShowModal(true);
    }
    return (
        <div className="m/3">
            <h2>Ejemplo 3</h2>
            {/* Componente padre */}
            <Button variant="primary" style={{backgroundColor: buttonColor}}
            onClick={handleShowModal}> Cambiar color</Button>
            {/* Componente hijo */}
            {showModal && < ModalColorPick 
            show={showModal}
            onHide={() => setShowModal(false)}
            handleColorChange={handleColorChange}/>}
        </div>

    )
}
export default ButtonColorPick;