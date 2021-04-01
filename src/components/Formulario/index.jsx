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
         
           <div className="input_md3">
               <input 
               className="input_left" 
               type="text" 
               placeholder="MATRICULA"
               value={matricula}
               onChange={ e => setMatricula(e.target.value)}
               required
               />
               <input 
               className="input_center" 
               type="text" 
               placeholder="NOME"
               value={nome}
               onChange={ e => setNome(e.target.value)}
               required
               />
               <input 
               className="input_rigth"
               type="text" 
               placeholder="DATA DE NASCIMENTO"
               value={data_nasc}
               onChange={  MaskData_Nasc }
               maxLength="10"
               required
               />
           </div>
           <div>
                <input 
                className="input_cpf" 
                type="text" 
                placeholder="CPF"
                value={cpf}
                onChange={ MaskCpf }
                required
                />
                <input 
                className="input_rg" 
                type="text" 
                placeholder="RG"
                value={rg}
                onChange={ MaskRg }
                required
                />
                <input 
                className="input_uf"
                type="text" 
                placeholder="UF"
                value={uf_servidor}
                onChange={ e => setUF_Servidor(e.target.value)}
                />
                <input 
                className="input_endereco"
                type="text" 
                placeholder="ENDERECO"
                value={endereco}
                onChange={ e => setEndereco(e.target.value)}
                />
           </div>
           <div>
               <input 
               className="input_bairro" 
               type="text" 
               placeholder="BAIRRO"
               value={bairro}
               onChange={ e => setBairro(e.target.value)}
               />
               <input 
               className="input_cidade" 
               type="text" 
               placeholder="CIDADE"
               value={cidade}
               onChange={ e => setCidade(e.target.value)}
               />
               <input 
               className="input_cep"
               type="text" 
               placeholder="CEP"
               value={cep}
               onChange={ MaskCep }
               maxLength="9"
               />
               <input 
               className="input_escolaridade"
               type="text" 
               placeholder="ESCOLARIDADE"
               value={escolaridade}
               onChange={ e => setEscolaridade(e.target.value)}
               />
               <input 
               className="input_pisPasep" 
               type="text" 
               placeholder="PIS/PASEP"
               value={pis_pasep}
               onChange={ MaskPisPasep }
               maxlength="14"
               required
               />
               <input 
               className="input_estCivil"
               type="text" 
               placeholder="EST.CIVIL"
               value={est_civil}
               onChange={ e => setEst_Civil(e.target.value)}
               />
           </div>
           <div>
               <input 
               className="input_nomeConjuge" 
               type="text" 
               placeholder="NOME DO CONJUGE"
               value={nome_conjuge}
               onChange={ e => setNome_Conjuge(e.target.value)}
               />
               <input 
               className="input_telResidencial" 
               type="text" 
               placeholder="TEL.RESIDENCIAL"
               value={tel_residencial}
               onChange={ MaskTel_Residencial}
               maxlength="15"
               />
               <input 
               className="input_telCelular"
               type="text" 
               placeholder="TEL.CELULAR"
               value={tel_celular}
               onChange={ MaskTelefone_Celular}
               maxlength="15"
               />
           </div>
           <div>
                <input 
                className="input_email" 
                type="text" 
                placeholder="E-MAIL"
                value={email}
               onChange={ e => setEmail(e.target.value)}
                />
            </div>
        <div className="dependentes">
            <h5>NOME DOS DEPENDENTES: </h5>
            <div>
                <input 
                className="input_dependentes" 
                type="text" 
                placeholder="NOME"
                value={nome_dependentes}
               onChange={ e => setNome_Dependentes(e.target.value)}
                />
            </div>
        </div>
        <div className="dados_cadastrais">
            <h5>DADOS CADASTRAIS: </h5>
            <div>
                <input 
                className="orgao_empregador" 
                type="text" 
                placeholder="ORGÃO EMPREGADOR"
                value={orgao_empregador}
                onChange={ e => setOrgao_Empregador(e.target.value)}
                />
                <input 
                className="municipio" 
                type="text" 
                placeholder="MUNICIPIO"
                value={municipio}
                onChange={ e => setMunicipio(e.target.value)}
                />
                <input 
                className="uf" 
                type="text" 
                placeholder="UF"
                value={uf}
                onChange={ e => setUf(e.target.value)}
                />
                <input 
                className="data_admissao" 
                type="text" 
                placeholder="DATA DE ADMISSÃO"
                value={data_admissao}
                onChange={ MaskData_Adm}
                maxLength="10"
                />
            </div>
            <div>
                <input 
                className="input_telefone" 
                type="text" 
                placeholder="TELEFONE"
                value={telefone}
                onChange={ MaskTelefone }
                maxlength="15"
                />
                <input 
                className="input_secretaria" 
                type="text" 
                placeholder="SECRETARIA"
                value={secretaria}
                onChange={ e => setSecretaria(e.target.value)}
                />
                <input 
                className="input_departamento" 
                type="text" 
                placeholder="DEPARTAMENTO"
                value={departamento}
                onChange={ e => setDepartamento(e.target.value)}
                />
                <input 
                className="input_carga_horaria"
                type="text" 
                placeholder="CARGA HORARIA"
                value={carga_horaria}
                onChange={ e => setCarga_Horaria(e.target.value)}
                />
            </div>
            <div>
                <input 
                className="input_cargo_funcao" 
                type="text" 
                placeholder="CARGO/FUNÇÃO"
                value={cargo_funcao}
                onChange={ e => setCargo_Funcao(e.target.value)}
                />
                <input 
                className="input_salario_base" 
                type="text" 
                placeholder="SALARIO BASE"
                value={salario_base}
                onChange={ MaskSalario_base }
                />
            </div>
        </div>
        <div className="button_salvar">
            <button type="submit">Salvar</button>
        </div>
        </form>
    )
}

export default Formulario
