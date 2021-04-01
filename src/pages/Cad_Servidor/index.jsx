import React from 'react'

import Navbar from '../../components/Navbar/index'
import Formulario from '../../components/Formulario/index'

import './styles.css'
const CadServidor = () => {
    return (
        <div>
            < Navbar/>
            <div className="container_cad_servidor">
                <div className="formulario_servidor_cad_servidor">
                <h1>Cadastro de Servidores</h1>
                    < Formulario/>
                </div>
            </div>
        </div>
    )
}

export default CadServidor
