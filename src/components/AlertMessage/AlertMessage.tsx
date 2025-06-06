import { useState } from "react";
import AlertGenerador from "../AlertGenerator/AlertGenerator";

const AlertMessage = () => {
    const [inputValue, setInputValue] = useState('');
    const [message, setMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        if (inputValue.trim() !== '') {
            setMessage(inputValue);
            setShowAlert(true);
        } else {
            setShowAlert(false);
        }
    };

    // Esta función se pasará al hijo
    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    return (
        <div className="m-3">
            <h2>Ejemplo 2</h2>

            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleClick}>Enviar</button>

            {/* Le pasamos tanto el mensaje como la función onClose */}
            {showAlert && (
                <AlertGenerador
                    message={message}
                    onClose={handleCloseAlert}
                />
            )}
        </div>
    );
};

export default AlertMessage;
