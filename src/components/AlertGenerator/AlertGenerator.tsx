import { Alert, Button } from "react-bootstrap";

// Definimos los tipos de props que acepta el componente hijo
type AlertGeneradorProps = {
    message: string;
    onClose: () => void;
};

const AlertGenerador = ({ message, onClose }: AlertGeneradorProps) => {
    return (
        <Alert variant="success" className="mt-2 w-25">
            <Alert.Heading>Mensaje Recibido</Alert.Heading>
            <p>{message}</p>
            {/* Botón que llama a la función del padre */}
            <div className="d-flex justify-content-end">
                <Button onClick={onClose} variant="outline-success" size="sm">
                    Cerrar
                </Button>
            </div>
        </Alert>
    );
};

export default AlertGenerador;

