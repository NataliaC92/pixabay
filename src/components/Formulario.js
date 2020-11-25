import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({guardarBusqueda}) => {

    const [ termino, guardarTermino ] = useState('');
    const [ error, guardarError ] = useState(false);

    const buscarImagenes = e => {
        e.preventDefault();

        /* validar */
        if(termino.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);

        /* enviar el termino de busqueda al componente principal */
        guardarBusqueda(termino);

    }

    return ( 
        <form 
            onSubmit={buscarImagenes}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen, ej: futbol"
                        onChange={e => guardarTermino(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                    />
                </div>
            </div>
            { error ? <Error mensaje="Agregar un término de busqueda" /> : null }
        </form>
     );
}

Formulario.propTypes = {
    guardarBusqueda:PropTypes.func.isRequired
}
 
export default Formulario;
