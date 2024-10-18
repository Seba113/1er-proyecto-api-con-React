import React from "react";

const Pagination = ({prev, next, onAnterior, onSiguiente}) => {

    const manejarAnterior = () => {
        onAnterior();
    }

    const manejarSiguiente = () => {
        onSiguiente();
    }

    return (
        <nav>
            <ul className="pagination justify-content-center">
                {
                    prev ? (
                        <li className="page-item">
                            <button className="boton page-link" onClick={manejarAnterior}>Anterior</button>
                        </li>
                    ) : null}
                {
                    next ? (
                        <li className="page-item">
                            <button className="boton page-link" onClick={manejarSiguiente}>Siguiente</button>
                        </li>
                    ) : null}
            </ul>
        </nav>
    );
}

export default Pagination