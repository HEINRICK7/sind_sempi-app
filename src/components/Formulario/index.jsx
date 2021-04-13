import React, {useState} from 'react'

import { cpfMask, telefoneMask, dataMask, cepMask, monetarioMask, pisPasepMask, rgMask } from '../../mask'

import api from '../../services/api'

import { message } from 'antd'

import './styles.css'

const Formulario = () => {

    const [matricula, setMatricula] = useState('')
    const [nome, setNome] = useState('')
    const [data_nasc, setData_Nasc] = useState('')
    const [cpf, setCpf] = useState('')
    const [rg, setRg] = useState('')
    const [uf_servidor, setUF_Servidor] = useState('')
    const [endereco, setEndereco] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [cep, setCep] = useState('')
    const [escolaridade, setEscolaridade] = useState('')
    const [pis_pasep, setPis_Pasep] = useState('')
    const [est_civil, setEst_Civil] = useState('')
    const [nome_conjuge, setNome_Conjuge] = useState('')
    const [tel_residencial, setTel_Residencial] = useState('')
    const [tel_celular, setTel_Celular] = useState('')
    const [email, setEmail] = useState('')
    const [nome_dependentes, setNome_Dependentes] = useState('')
    const [orgao_empregador, setOrgao_Empregador] = useState('')
    const [municipio, setMunicipio] = useState('')
    const [uf, setUf] = useState('')
    const [data_admissao, setData_Admissao] = useState('')
    const [telefone, setTelefone] = useState('')
    const [secretaria, setSecretaria] = useState('')
    const [departamento, setDepartamento] = useState('')
    const [carga_horaria, setCarga_Horaria] = useState('')
    const [cargo_funcao, setCargo_Funcao] = useState('')
    const [salario_base, setSalario_Base] = useState('')

    const token = localStorage.getItem('token');
   
    const handleRegister = async (e) => {
        e.preventDefault()

        const data = {
            matricula,
            nome,
            data_nasc,
            cpf,
            rg,
            uf_servidor,
            endereco,
            bairro,
            cidade,
            cep,
            escolaridade,
            pis_pasep,
            est_civil,
            nome_conjuge,
            tel_residencial,
            tel_celular,
            email,
            nome_dependentes,
            orgao_empregador,
            municipio,
            uf,
            data_admissao,
            telefone,
            secretaria,
            departamento,
            carga_horaria,
            cargo_funcao,
            salario_base
        }
        const key = 'updatable'
        console.log(data)
        if(!data === ''){

            message.info({ content: 'Preencha todos os campos.', key, duration: 3.5 });
        }else {
            
            try {

            await api.post('/register_filiacao', data, {
                headers: {
                    Authorization: `Bearer ${token}`,
        
                   }
            })
               
                message.loading({ content: 'Loading...', key });
                setTimeout(() => {
                    message.success({ content: 'Usuário cadastrado com sucesso.', key, duration: 3 });
                }, 1000);
            
                setMatricula('')
                setNome('')
                setData_Nasc('')
                setCpf('')
                setRg('')
                setUF_Servidor('')
                setEndereco('')
                setBairro('')
                setCidade('')
                setCep('')
                setEscolaridade('')
                setPis_Pasep('')
                setEst_Civil('')
                setNome_Conjuge('')
                setTel_Residencial('')
                setTel_Celular('')
                setEmail('')
                setNome_Dependentes('')
                setOrgao_Empregador('')
                setMunicipio('')
                setUf('')
                setData_Admissao('')
                setTelefone('')
                setSecretaria('')
                setDepartamento('')
                setCarga_Horaria('')
                setCargo_Funcao('')
                setSalario_Base('')
               
            }catch{

                message.warning({ content:'Erro, por favor tente novamente...', duration: 3 });
            }
        }    
    }

    const MaskCpf = (e) => {
        setCpf(
            cpfMask(e.target.value)
        )
    }
    const MaskRg = (e) => {
        setRg(
            rgMask(e.target.value)
        )
    }
    const MaskTelefone_Celular = (e) => {
        setTel_Celular(
            telefoneMask(e.target.value)
        )
    }
    const MaskTel_Residencial = (e) => {
        setTel_Residencial(
            telefoneMask(e.target.value)
        )
    }
    const MaskTelefone = (e) => {
        setTelefone(
            telefoneMask(e.target.value)
        )
    }
    const MaskData_Nasc = (e) => {
        setData_Nasc(
            dataMask(e.target.value)
        )
    }
    const MaskData_Adm = (e) => {
        setData_Admissao(
            dataMask(e.target.value)
        )
    }
    const MaskCep = (e) => {
        setCep(
            cepMask(e.target.value)
        )
    }
    const MaskSalario_base = (e) => {
        setSalario_Base(
            monetarioMask(e.target.value)
        )
    }
    const MaskPisPasep = (e) => {
        setPis_Pasep(
            pisPasepMask(e.target.value)
        )
    }



    return (
        <form onSubmit={handleRegister}>
        <div className="container_formulario"> 
            <div className="input_md1">
                <div className="floating_label" >
                    <input 
                    className="form-control"
                    type="text" 
                    name="matricula" 
                    id="matricula"
                    placeholder="MÁTRICULA"
                    value={matricula}
                    onChange={ e => setMatricula(e.target.value)}
                    required
                    />
                    <label htmlFor="matricula">mátricula</label>
                </div>
                <div className="floating_label" >
                    <input 
                    className="form-control"
                    type="text" 
                    name="nome"
                    placeholder="NOME"
                    value={nome}
                    onChange={ e => setNome(e.target.value)}
                    required
                    />
                     <label htmlFor="nome">nome</label>
                </div> 
                <div className="floating_label" >
                    <input
                    className="form-control"
                    type="text" 
                    name="data_nasc"
                    placeholder="DATA_NASC"
                    value={data_nasc}
                    onChange={  MaskData_Nasc }
                    maxLength="10"
                    required
                    />
                    <label htmlFor="data_nasc">data_nasc</label>
               </div> 
           </div>
            <div className="input_md2">
                <div className="floating_label">
                    <input 
                    className="form-control" 
                    type="text" 
                    placeholder="CPF"
                    value={cpf}
                    onChange={ MaskCpf }
                    required
                    />
                    <label htmlFor="cpf">cpf</label>
                </div>
                <div className="floating_label">
                    <input 
                    className="form-control" 
                    type="text" 
                    placeholder="RG"
                    value={rg}
                    onChange={ MaskRg }
                    required
                    />
                    <label htmlFor="rg">rg</label>
                </div>
                <div className="floating_label">
                    <input 
                    className="form-control" 
                    type="text" 
                    placeholder="UF"
                    value={uf_servidor}
                    onChange={ e => setUF_Servidor(e.target.value)}
                    />
                    <label htmlFor="uf_servidor">uf</label>
                </div>
                <div className="floating_label">
                    <input 
                    className="form-control"
                    type="text" 
                    placeholder="ENDERECO"
                    value={endereco}
                    onChange={ e => setEndereco(e.target.value)}
                    />
                    <label htmlFor="endereco">endereço</label>
                </div>
           </div>
            <div className="input_md3">
                <div className="floating_label">
                    <input 
                    className="form-control" 
                    type="text" 
                    placeholder="BAIRRO"
                    value={bairro}
                    onChange={ e => setBairro(e.target.value)}
                    />
                    <label htmlFor="bairro">bairro</label>
                </div>
                <div className="floating_label">
                    <input 
                    className="form-control" 
                    type="text" 
                    placeholder="CIDADE"
                    value={cidade}
                    onChange={ e => setCidade(e.target.value)}
                    />
                    <label htmlFor="cidade">cidade</label>
               </div>
                <div className="floating_label">
                    <input 
                    className="form-control"
                    type="text" 
                    placeholder="CEP"
                    value={cep}
                    onChange={ MaskCep }
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
                    placeholder="ESCOLARIDADE"
                    value={escolaridade}
                    onChange={ e => setEscolaridade(e.target.value)}
                    />
                    <label htmlFor="escolaridade">escolaridade</label>
                </div>
                <div className="floating_label">
                    <input 
                    className="form-control" 
                    type="text" 
                    placeholder="PIS/PASEP"
                    value={pis_pasep}
                    onChange={ MaskPisPasep }
                    maxlength="14"
                    required
                    />
                    <label htmlFor="pis_pasep">pis/pasep</label>
                </div>
                <div className="floating_label">
                    <input 
                    className="form-control"
                    type="text" 
                    placeholder="EST.CIVIL"
                    value={est_civil}
                    onChange={ e => setEst_Civil(e.target.value)}
                    />
                    <label htmlFor="est_civil">est_civil</label>
               </div>
           </div>
            <div  className="input_md5">
                <div className="floating_label">
                    <input 
                    className="form-control" 
                    type="text" 
                    placeholder="NOME DO CÔNJUGE"
                    value={nome_conjuge}
                    onChange={ e => setNome_Conjuge(e.target.value)}
                    />
                    <label htmlFor="nome_conjuge">nome do cônjuge</label>
                </div>
                <div className="floating_label">
                    <input 
                    className="form_control" 
                    type="text" 
                    placeholder="TEL.RESIDENCIAL"
                    value={tel_residencial}
                    onChange={ MaskTel_Residencial}
                    maxlength="15"
                    />
                    <label htmlFor="tel_residencial">tel_residencial</label>
               </div>
               <div className="floating_label">
                    <input 
                    className="form-control"
                    type="text" 
                    placeholder="TEL.CELULAR"
                    value={tel_celular}
                    onChange={ MaskTelefone_Celular}
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
                    placeholder="E-MAIL"
                    value={email}
                    onChange={ e => setEmail(e.target.value)}
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
                    placeholder="NOME"
                    value={nome_dependentes}
                    onChange={ e => setNome_Dependentes(e.target.value)}
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
                    placeholder="ORGÃO EMPREGADOR"
                    value={orgao_empregador}
                    onChange={ e => setOrgao_Empregador(e.target.value)}
                    />
                    <label htmlFor="orgao_empregador">orgao empregador</label>
                </div>
                    <div className="floating_label">
                    <input 
                    className="form-control" 
                    type="text" 
                    placeholder="MUNICÍPIO"
                    value={municipio}
                    onChange={ e => setMunicipio(e.target.value)}
                    />
                    <label htmlFor="municipio">município</label>
                </div>
                    <div className="floating_label">
                <input 
                    className="form-control" 
                    type="text" 
                    placeholder="UF"
                    value={uf}
                    onChange={ e => setUf(e.target.value)}
                    />
                    <label htmlFor="uf">uf</label>
                </div>
                    <div className="floating_label">
                    <input 
                    className="form-control" 
                    type="text" 
                    placeholder="DATA DE ADMISSÃO"
                    value={data_admissao}
                    onChange={ MaskData_Adm}
                    maxLength="10"
                    />
                    <label htmlFor="data_admissao">data admissao</label>
                </div>
                </div>
            </div>
            <div className="input_md9">
                <div className="floating_label">
                    <input 
                    className="form-control" 
                    type="text" 
                    placeholder="TELEFONE"
                    value={telefone}
                    onChange={ MaskTelefone }
                    maxlength="15"
                    />
                    <label htmlFor="telefone">telefone</label>
                </div>
                <div className="floating_label">
                    <input 
                    className="form-control" 
                    type="text" 
                    placeholder="SECRETARIA"
                    value={secretaria}
                    onChange={ e => setSecretaria(e.target.value)}
                    />
                    <label htmlFor="secretaria">secretaria</label>
                </div>
                <div className="floating_label">
                    <input 
                    className="form-control" 
                    type="text" 
                    placeholder="DEPARTAMENTO"
                    value={departamento}
                    onChange={ e => setDepartamento(e.target.value)}
                    />
                    <label htmlFor="departamento">departamento</label>
                </div>
                <div className="floating_label">
                <input 
                className="form-control"
                type="text" 
                placeholder="CARGA HORARIA"
                value={carga_horaria}
                onChange={ e => setCarga_Horaria(e.target.value)}
                />
                <label htmlFor="carga_horaria"> carga horaria</label>
                </div>
            </div>
            <div className="input_md10">
                <div className="floating_label">
                <input 
                    className="form-control" 
                    type="text" 
                    placeholder="CARGO/FUNÇÃO"
                    value={cargo_funcao}
                    onChange={ e => setCargo_Funcao(e.target.value)}
                    />
                    <label htmlFor="cargo_funcao">cargo/funcao</label>
                </div>
                <div className="floating_label">
                    <input 
                    className="form-control" 
                    type="text" 
                    placeholder="SALÁRIO BASE"
                    value={salario_base}
                    onChange={ MaskSalario_base }
                    />
                    <label htmlFor="salario_base">salário base</label>
                </div>
            </div>
        </div>
            <div className="button_salvar">
                <button type="submit">Salvar</button>
            </div>
        </form>
    )
}

export default Formulario
