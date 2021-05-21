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
       if( _id !== undefined){

            handleEdit(_id)
       } 
      
    },[_id]);

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
        const response = await api.get(`register_filiacao/${_id}`, {
            headers: {
				Authorization: `Bearer ${token}`,
	
			   }
        })
        setModels(response.data.userId)
        
    }
    return (
        <>
            < Navbar/>
            <div className="container_edit_servidor">
                <h1>Editar Servidor</h1>
                <div className="formulario_servidor_edit_servidor">    
                    <form onSubmit={onSubmit}>
                    <div className="container_formulario"> 
            <div className="input_md1">
                <div className="floating_label" >
                    <input 
                    className="form-control"
                    type="text" 
                    name="matricula" 
                    id="matricula"
                    placeholder="MATRÍCULA"
                    value={models.matricula}
                    onChange={ e => updateModel(e)}
                   
                    />
                    <label htmlFor="matricula">matrícula</label>
                </div>
                <div className="floating_label" >
                    <input 
                    className="form-control"
                    type="text" 
                    name="nome"
                    placeholder="NOME"
                    value={models.nome}
                    onChange={ e => updateModel(e)}
                   
                    />
                     <label htmlFor="nome">nome</label>
                </div> 
                <div className="floating_label" >
                    <input
                    className="form-control"
                    type="text" 
                    name="data_nasc"
                    placeholder="DATA_NASC"
                    value={models.data_nasc}
                    onChange={  e => updateModel(e) }
                    maxLength="10"
                   
                    />
                    <label htmlFor="data_nasc">data_nasc</label>
               </div> 
           </div>
            <div className="input_md2">
                <div className="floating_label">
                    <input 
                    className="form-control" 
                    type="text"
                    name="cpf" 
                    placeholder="CPF"
                    value={models.cpf}
                    onChange={ e => updateModel(e) }
                   
                    />
                    <label htmlFor="cpf">cpf</label>
                </div>
                <div className="floating_label">
                    <input 
                    className="form-control" 
                    type="text" 
                    name="rg"
                    placeholder="RG"
                    value={models.rg}
                    onChange={ e => updateModel(e)}
                    
                    />
                    <label htmlFor="rg">rg</label>
                </div>
                <div className="floating_label">
                    <input 
                    className="form-control" 
                    type="text" 
                    name="uf"
                    placeholder="UF"
                    value={models.uf_servidor}
                    onChange={ e => updateModel(e)}
                    />
                    <label htmlFor="uf_servidor">uf</label>
                </div>
                <div className="floating_label">
                    <input 
                    className="form-control"
                    type="text" 
                    name="endereco"
                    placeholder="ENDEREÇO"
                    value={models.endereco}
                    onChange={ e => updateModel(e)}
                    />
                    <label htmlFor="endereco">endereço</label>
                </div>
           </div>
            <div className="input_md3">
                <div className="floating_label">
                    <input 
                    className="form-control" 
                    type="text" 
                    name="bairro"
                    placeholder="BAIRRO"
                    value={models.bairro}
                    onChange={ e => updateModel(e)}
                    />
                    <label htmlFor="bairro">bairro</label>
                </div>
                <div className="floating_label">
                    <input 
                    className="form-control" 
                    type="text" 
                    name="cidade"
                    placeholder="CIDADE"
                    value={models.cidade}
                    onChange={ e => updateModel(e)}
                    />
                    <label htmlFor="cidade">cidade</label>
               </div>
                <div className="floating_label">
                    <input 
                    className="form-control"
                    type="text" 
                    placeholder="CEP"
                    name="cep"
                    value={models.cep}
                    onChange={ e => updateModel(e) }
                    maxLength="9"
                    />
                    <label htmlFor="cep">cep</label>
               </div>
            </div>   
            <div className="input_md4">
                <div className="floating_label">
                    <input 
                    className="form-control"
                    type="text" 
                    name="escolaridade"
                    placeholder="ESCOLARIDADE"
                    value={models.escolaridade}
                    onChange={ e => updateModel(e)}
                    />
                    <label htmlFor="escolaridade">escolaridade</label>
                </div>
                <div className="floating_label">
                    <input 
                    className="form-control" 
                    type="text" 
                    name="pis_pasep"
                    placeholder="PIS/PASEP"
                    value={models.pis_pasep}
                    onChange={ e => updateModel(e) }
                    maxlength="14"
                   
                    />
                    <label htmlFor="pis_pasep">pis/pasep</label>
                </div>
                <div className="floating_label">
                    <input 
                    className="form-control"
                    type="text" 
                    name="est_civil"
                    placeholder="EST.CIVIL"
                    value={models.est_civil}
                    onChange={ e => updateModel(e)}
                    />
                    <label htmlFor="est_civil">est_civil</label>
               </div>
           </div>
            <div  className="input_md5">
                <div className="floating_label">
                    <input 
                    className="form-control" 
                    type="text" 
                    name="nome_conjuge"
                    placeholder="NOME DO CONJUGE"
                    value={models.nome_conjuge}
                    onChange={ e => updateModel(e)}
                    />
                    <label htmlFor="nome_conjuge">nome do cônjuge</label>
                </div>
                <div className="floating_label">
                    <input 
                    className="form_control" 
                    type="text" 
                    name="tel_residencial"
                    placeholder="TEL.RESIDENCIAL"
                    value={models.tel_residencial}
                    onChange={ e => updateModel(e)}
                    maxlength="15"
                    />
                    <label htmlFor="tel_residencial">tel_residencial</label>
               </div>
               <div className="floating_label">
                    <input 
                    className="form-control"
                    type="text" 
                    name="tel_celular"
                    placeholder="TEL.CELULAR"
                    value={models.tel_celular}
                    onChange={ e => updateModel(e)}
                    maxlength="15"
                    />
                    <label htmlFor="tel_celular">tel_celular</label>
                </div>
           </div>
            <div className="input_md6">
                <div className="floating_label">
                    <input 
                    className="form-control" 
                    type="text" 
                    name="email"
                    placeholder="E-MAIL"
                    value={models.email}
                    onChange={ e => updateModel(e)}
                    />
                    <label htmlFor="email">email</label>
                </div>
            </div>
            <div className="input_md7">
                <h5>NOME DOS DEPENDENTES: </h5>
                <div className="floating_label">
                    <input 
                    className="form-control" 
                    type="text" 
                    name="nome_dependente"
                    placeholder="NOME"
                    value={models.nome_dependentes}
                    onChange={ e => updateModel(e)}
                    />
                    <label htmlFor="nome_dependentes">nome dependentes</label>
                </div>
            </div>
            <div className="text_h5">
                <h5>DADOS CADASTRAIS: </h5>
                <div className="input_md8">
                    <div className="floating_label">
                    <input 
                    className="form-control" 
                    type="text" 
                    name="orgao_empregador"
                    placeholder="ORGÃO EMPREGADOR"
                    value={models.orgao_empregador}
                    onChange={ e => updateModel(e)}
                    />
                    <label htmlFor="orgao_empregador">orgão empregador</label>
                </div>
                    <div className="floating_label">
                    <input 
                    className="form-control" 
                    type="text" 
                    name="municipio"
                    placeholder="MUNICIPIO"
                    value={models.municipio}
                    onChange={ e => updateModel(e)}
                    />
                    <label htmlFor="municipio">município</label>
                </div>
                    <div className="floating_label">
                <input 
                    className="form-control" 
                    type="text" 
                    name="uf"
                    placeholder="UF"
                    value={models.uf}
                    onChange={ e => updateModel(e)}
                    />
                    <label htmlFor="uf">uf</label>
                </div>
                    <div className="floating_label">
                    <input 
                    className="form-control" 
                    type="text" 
                    name="data_admissao"
                    placeholder="DATA DE ADMISSÃO"
                    value={models.data_admissao}
                    onChange={ e => updateModel(e)}
                    maxLength="10"
                    />
                    <label htmlFor="data_admissao">data admissão</label>
                </div>
                </div>
            </div>
            <div className="input_md9">
                <div className="floating_label">
                    <input 
                    className="form-control" 
                    type="text" 
                    name="telefone"
                    placeholder="TELEFONE"
                    value={models.telefone}
                    onChange={ e => updateModel(e)}
                    maxlength="15"
                    />
                    <label htmlFor="telefone">telefone</label>
                </div>
                <div className="floating_label">
                    <input 
                    className="form-control" 
                    type="text" 
                    name="secretaria"
                    placeholder="SECRETÁRIA"
                    value={models.secretaria}
                    onChange={ e => updateModel(e)}
                    />
                    <label htmlFor="secretaria">secretária</label>
                </div>
                <div className="floating_label">
                    <input 
                    className="form-control" 
                    type="text" 
                    name="departamento"
                    placeholder="DEPARTAMENTO"
                    value={models.departamento}
                    onChange={ e => updateModel(e)}
                    />
                    <label htmlFor="departamento">departamento</label>
                </div>
                <div className="floating_label">
                <input 
                className="form-control"
                type="text" 
                name="carga_horaria"
                placeholder="CARGA HORARIA"
                value={models.carga_horaria}
                onChange={ e => updateModel(e)}
                />
                <label htmlFor="carga_horaria"> carga horária</label>
                </div>
            </div>
            <div className="input_md10">
                <div className="floating_label">
                <input 
                    className="form-control" 
                    type="text" 
                    name="cargo_funcao"
                    placeholder="CARGO/FUNÇÃO"
                    value={models.cargo_funcao}
                    onChange={ e => updateModel(e)}
                    />
                    <label htmlFor="cargo_funcao">cargo/função</label>
                </div>
                <div className="floating_label">
                    <input 
                    className="form-control" 
                    type="text" 
                    name="salario_base"
                    placeholder="SALARIO BASE"
                    value={models.salario_base}
                    onChange={ e => updateModel(e) }
                    />
                    <label htmlFor="salario_base">salário base</label>
                </div>
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
