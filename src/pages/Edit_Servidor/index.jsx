import React, {useState, useEffect} from 'react'

import Navbar from '../../components/Navbar/index'

import api from '../../services/api'


import { message } from 'antd'

import './styles.css'

import { useParams, useHistory } from 'react-router-dom'

const Formulario = () => {
    const [models, setModels] = useState({
        matricula: '',
        nome: '',
        data_nasc: '',
        cpf: '',
        rg: '',
        uf_servidor: '',
        endereco: '',
        bairro: '',
        cidade: '',
        cep: '',
        escolaridade: '',
        pis_pasep: '',
        est_civil: '',
        nome_conjuge: '',
        tel_residencial: '',
        tel_celular: '',
        email: '',
        nome_dependentes: '',
        orgao_empregador: '',
        municipio: '',
        uf: '',
        data_admissao: '',
        telefone: '',
        secretaria: '',
        departamento: '',
        carga_horaria: '',
        cargo_funcao: '',
        salario_base: ''
    })

    const token = localStorage.getItem('token');

    const history = useHistory();

    const { _id } = useParams();

    useEffect(() => {
       if(_id !== undefined){

            handleEdit(_id)
       } 
      
    }, [_id]);

    const onSubmit = async (e) => {
        e.preventDefault()

        const key = 'updatable'
        
        if(_id !== undefined){
           
            await api.put(`/register_filiacao/${_id}`, models, {
                headers: {
                    Authorization: `Bearer ${token}`,
        
                   }
            })

            message.loading({ content: 'Loading...', key });
            setTimeout(() => {
                message.success({ content: 'Servidor atualizado com sucesso.', key, duration: 3 });
            }, 1000);

            history.push('/list_servidor')
        }
        else{

            await api.post('register_filiacao', models ,{
                headers: {
                    Authorization: `Bearer ${token}`,
        
                   }
            })
        }

    } 
    const updateModel = (e) => {
        setModels({
            ...models,
            [e.target.name]: e.target.value
        })
    }
    
    const handleEdit = async (_id) => {
        await api.get(`register_filiacao/${_id}`, {
            headers: {
				Authorization: `Bearer ${token}`,
	
			   }
        })
        .then(response => {
            setModels(response.data.userId)
            
        })
        
    }
    return (
        <>
            < Navbar/>
            <div className="container_edit_servidor">
                <div className="formulario_servidor_edit_servidor">
                <form onSubmit={onSubmit}>
               <h1>Editar Cadastro de Servidores</h1>
               <div className="input_md3">
               <input 
               className="input_left" 
               type="text" 
               name="matricula"
               placeholder="MATRICULA"
               value={models.matricula}
               onChange={ e => updateModel(e)}
               />
               <input 
               className="input_center" 
               type="text" 
               name="nome"
               placeholder="NOME"
               value={models.nome}
               onChange={ e => updateModel(e)}
               />
               <input 
               className="input_rigth"
               type="text" 
               placeholder="DATA DE NASCIMENTO"
               value={models.data_nasc}
               onChange={ e => updateModel(e)}
               />
           </div>
               <div>
                <input 
                className="input_cpf" 
                type="text" 
                name="cpf"
                placeholder="CPF"
                value={models.cpf}
                onChange={ e => updateModel(e)}
                />
                <input 
                className="input_rg" 
                type="text" 
                placeholder="RG"
                value={models.rg}
                onChange={ e => updateModel(e)}
                />
                <input 
                className="input_uf"
                type="text" 
                name="uf_servidor"
                placeholder="UF"
                value={models.uf_servidor}
                onChange={ e => updateModel(e)}
                />
                <input 
                className="input_endereco"
                type="text" 
                name="endereco"
                placeholder="ENDERECO"
                value={models.endereco}
                onChange={ e => updateModel(e)}
                />
           </div>
               <div>
               <input 
               className="input_bairro" 
               type="text" 
               name="bairro"
               placeholder="BAIRRO"
               value={models.bairro}
               onChange={ e => updateModel(e)}
               />
               <input 
               className="input_cidade" 
               type="text" 
               name="cidade"
               placeholder="CIDADE"
               value={models.cidade}
               onChange={ e => updateModel(e)}
               />
               <input 
               className="input_cep"
               type="text" 
               name="cep"
               placeholder="CEP"
               value={models.cep}
               onChange={ e => updateModel(e)}
               />
               <input 
               className="input_escolaridade"
               type="text" 
               name="escolaridade"
               placeholder="ESCOLARIDADE"
               value={models.escolaridade}
               onChange={ e => updateModel(e)}
               />
               <input 
               className="input_pisPasep" 
               type="text" 
               name="pis_pasep"
               placeholder="PIS/PASEP"
               value={models.pis_pasep}
               onChange={ e => updateModel(e)}
               />
               <input 
               className="input_estCivil"
               type="text" 
               name="est_civil"
               placeholder="EST.CIVIL"
               value={models.est_civil}
               onChange={ e => updateModel(e)}
               />
           </div>
               <div>
               <input 
               className="input_nomeConjuge" 
               type="text" 
               name="nome_conjuge"
               placeholder="NOME DO CONJUGE"
               value={models.nome_conjuge}
               onChange={ e => updateModel(e)}
               />
               <input 
               className="input_telResidencial" 
               type="text" 
               nome="tel_residencial"
               placeholder="TEL.RESIDENCIAL"
               value={models.tel_residencial}
               onChange={ e => updateModel(e)}
               />
               <input 
               className="input_telCelular"
               type="text" 
               name="tel_celular"
               placeholder="TEL.CELULAR"
               value={models.tel_celular}
               onChange={ e => updateModel(e)}
               />
           </div>
               <div>
                <input 
                className="input_email" 
                type="text" 
                name="email"
                placeholder="E-MAIL"
                value={models.email}
                onChange={ e => updateModel(e)}
                />
            </div>
            <div className="dependentes">
            <h5>NOME DOS DEPENDENTES: </h5>
            <div>
                <input 
                className="input_dependentes" 
                type="text" 
                name="nome_dependentes"
                placeholder="NOME"
                value={models.nome_dependentes}
                onChange={ e => updateModel(e)}
                />
            </div>
        </div>
            <div className="dados_cadastrais">
            <h5>DADOS CADASTRAIS: </h5>
            <div>
                <input 
                className="orgao_empregador" 
                type="text" 
                name="orgao_empregador"
                placeholder="ORGÃO EMPREGADOR"
                value={models.orgao_empregador}
                onChange={ e => updateModel(e)}
                />
                <input 
                className="municipio" 
                type="text" 
                name="municipio"
                placeholder="MUNICIPIO"
                value={models.municipio}
                onChange={ e => updateModel(e)}
                />
                <input 
                className="uf" 
                type="text" 
                name="uf"
                placeholder="UF"
                value={models.uf}
                onChange={ e => updateModel(e)}
                />
                <input 
                className="data_admissao" 
                type="text" 
                name="data_admissao"
                placeholder="DATA DE ADMISSÃO"
                value={models.data_admissao}
                onChange={ e => updateModel(e)}
                />
            </div>
            <div>
                <input 
                className="input_telefone" 
                type="text" 
                name="telefone"
                placeholder="TELEFONE"
                value={models.telefone}
                onChange={ e => updateModel(e)}
                />
                <input 
                className="input_secretaria" 
                type="text" 
                name="secretaria"
                placeholder="SECRETARIA"
                value={models.secretaria}
                onChange={ e => updateModel(e)}
                />
                <input 
                className="input_departamento" 
                type="text" 
                name="departamento"
                placeholder="DEPARTAMENTO"
                value={models.departamento}
                onChange={ e => updateModel(e)}
                />
                <input 
                className="input_carga_horaria"
                type="text" 
                name="carga_horaria"
                placeholder="CARGA HORARIA"
                value={models.carga_horaria}
                onChange={ e => updateModel(e)}
                />
            </div>
            <div>
                <input 
                className="input_cargo_funcao" 
                type="text" 
                name="cargo_funcao"
                placeholder="CARGO/FUNÇÃO"
                value={models.cargo_funcao}
                onChange={ e => updateModel(e)}
                />
                <input 
                className="input_salario_base" 
                type="text" 
                name="salario_base"
                placeholder="SALARIO BASE"
                value={models.salario_base}
                onChange={ e => updateModel(e)}
                />
            </div>
        </div>
            <div className="button_salvar">
                <button type="submit">Atualizar</button>
            </div>
            </form>
            </div>
            </div>
        </>
    )
}

export default Formulario
