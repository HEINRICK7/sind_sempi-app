import React, { useEffect, useState } from 'react'


import Pdf from "react-to-pdf"

import './styles.css'

import api from '../../services/api'

import { useParams } from 'react-router-dom'

import Logo from '../../assets/logo.png'


const Documentpdf = () => {
  const ref = React.createRef();

  const [models, setModels] = useState({
    _id: '',
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
const {_id } = useParams();

useEffect(() => {

  handleEdit(_id)
  
});


const handleEdit = async () => {
    await api.get(`register_filiacao/${_id}`,{
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
          
          <div className="container_pdfViewer">
            <Pdf targetRef={ref} filename={`${models.nome}.pdf`}>
                {({ toPdf }) => <button className="buttom_download" onClick={toPdf}>Gerar Pdf</button>}
            </Pdf> 
        
         
          <div className="formulario_servidor_pdf" ref={ref}>
                <form>
                <div className="cabecalho">
                   <h3>SINDICATO DOS SERVIDORES PÚBLICOS MUNICIPAIS DE PIRIPIRI – SINDSEMPI</h3>
                   <h3>ENDEREÇO: AVENIDA Dr PADUA MENDES, Nº 60</h3>
                   <h3>CEP: 64260-000 – BAIRRO CENTRO – PIRIPIRI /PI – BRASIL</h3>
                   <h3>CNPJ – 25.386.159/0001-17</h3>
                   <h4>Telefones: (86) 9 99030326  / 9 8191 1600 / 9 95937302 </h4>
                   <img src={Logo} className="logo" alt="logo"/>
               </div>
               <h2>FICHA DE FILIAÇÃO</h2>
            <div className="inputs_pdf">  
                <div className="input_md3_pdf">
                    <span className="float_matricula">matrícula</span>    
                    <input 
                    className="input_matricula_pdf" 
                    type="text" 
                    name="matricula"
                    placeholder="MATRICULA"
                    value={models.matricula}
                    />

                    <span className="float_nome">nome</span>    
                    <input 
                    className="input_center" 
                    type="text" 
                    name="nome"
                    value={models.nome}
                    />

                    <span className="float_nascimento">data.nasc</span>
                    <input 
                    className="input_nascimento_pdf"
                    type="text" 
                    value={models.data_nasc}
                    />
                </div>

                <div>
                    <span className="float_cpf">cpf</span> 
                    <input 
                    className="input_cpf_pdf" 
                    type="text" 
                    name="cpf"
                    placeholder="CPF"
                    value={models.cpf}
                    />

                    <span className="float_rg">rg</span> 
                    <input 
                    className="input_rg_pdf" 
                    type="text" 
                    value={models.rg}
                    />

                    <span className="float_uf">uf</span>
                    <input 
                    className="input_uf_pdf"
                    type="text" 
                    name="uf"
                    value={models.uf_servidor}
                    />

                    <span className="float_endereco">endereço</span>
                    <input 
                    className="input_endereco_pdf"
                    type="text" 
                    name="endereco"
                    value={models.endereco}
                    />
                </div>

                <div>
                    <span className="float_bairro">bairro</span>
                    <input 
                    className="input_bairro_pdf" 
                    type="text" 
                    name="bairro"
                    value={models.bairro}
                    />
                    <span className="float_cidade">cidade</span>
                    <input 
                    className="input_cidade_pdf" 
                    type="text" 
                    name="cidade"
                    value={models.cidade}
                    />

                    <span className="float_cep">cep</span>
                    <input 
                    className="input_cep_pdf"
                    type="text" 
                    name="cep"
                    value={models.cep}
                    />

                    <span className="float_escolaridade">escolaridade</span>
                    <input 
                    className="input_escolaridade_pdf"
                    type="text" 
                    name="escolaridade"
                    value={models.escolaridade}
                    />

                    <span className="float_pisPasep">pis/pasep</span>
                    <input 
                    className="input_pisPasep_pdf" 
                    type="text" 
                    name="pis_pasep"
                    value={models.pis_pasep}
                    />

                    <span className="float_estCivil">est.civil</span>
                    <input 
                    className="input_estCivil_pdf"
                    type="text" 
                    name="est_civil"
                    value={models.est_civil}
                    />
                </div>
                <div>
                    <span className="float_nomeConjuge">nome do cônjuge</span>
                    <input 
                    className="input_nomeConjuge_pdf" 
                    type="text" 
                    name="nome_conjuge"
                    value={models.nome_conjuge}
                    />

                    <span className="float_telResidencial">tel.residencial</span>
                    <input 
                    className="input_telResidencial_pdf" 
                    type="text" 
                    nome="tel_residencial"
                    value={models.tel_residencial}
                    />

                    <span className="float_telCelular">tel.Celular</span>
                    <input 
                    className="input_telCelular_pdf"
                    type="text" 
                    name="tel_celular"
                    value={models.tel_celular}
                    />
                </div>
               
               <div>

                <span className="float_email">email</span>   
                <input 
                className="input_email_pdf" 
                type="text" 
                name="email"
                placeholder="E-MAIL"
                value={models.email}
                />
            </div>
            <div className="dependentes">
                <h5>NOME DOS DEPENDENTES: </h5>
                <div>
                    <span className="float_dependentes">nome(s)</span>   
                    <input 
                    className="input_dependentes_pdf" 
                    type="text" 
                    value={models.nome_dependentes}
                    />
                </div>
            </div>
            <div className="dados_cadastrais">
            <h5>DADOS CADASTRAIS: </h5>

            <div>
                <span className="float_orgao_empregador">órgão empregador</span>   
                <input 
                className="orgao_empregador_pdf" 
                type="text" 
                name="orgao_empregador"
                value={models.orgao_empregador}
                />

                <span className="float_municipio">município</span>  
                <input 
                className="municipio_pdf" 
                type="text" 
                name="municipio"
                value={models.municipio}
                />

                <span className="float_uf_cadastrais">uf</span>  
                <input 
                className="uf_pdf" 
                type="text" 
                name="uf"
                value={models.uf}
                />

                <span className="float_data_admissao">admissão</span>
                <input 
                className="data_admissao_pdf" 
                type="text" 
                name="data_admissao"
                value={models.data_admissao}
                />
            </div>
            <div>

                <span className="float_telefone">telefone</span>
                <input 
                className="input_telefone_pdf" 
                type="text" 
                name="telefone"
                value={models.telefone}
                />

                <span className="float_secretaria">secretaria</span>
                <input 
                className="input_secretaria" 
                type="text" 
                name="secretaria"
                value={models.secretaria}
                />

                <span className="float_departamento">departamento</span>
                <input 
                className="input_departamento_pdf" 
                type="text" 
                name="departamento"
                placeholder="DEPARTAMENTO"
                value={models.departamento}
                />

                <span className="float_carga_horaria">carga horaria</span>
                <input 
                className="input_carga_horaria_pdf"
                type="text" 
                name="carga_horaria"
                value={models.carga_horaria}
                />
            </div>
            <div>

                <span className="float_cargo_funcao">cargo/função</span>
                <input 
                className="input_cargo_funcao_pdf" 
                type="text" 
                name="cargo_funcao"
                placeholder="CARGO/FUNÇÃO"
                value={models.cargo_funcao}
                />

                <span className="float_salario_base">salário base</span>
                <input 
                className="input_salario_base_pdf" 
                type="text" 
                name="salario_base"
                placeholder="SALARIO BASE"
                value={models.salario_base}
                />
            </div>
        </div>

        </div>
            <h4 style={{width: '66%'}}>DECLARO PARA TODOS OS FINS DE DIREITO QUE A MINHA FILIAÇÃO AO SINDICATO DOS SERVIDORES PÚBLICOS MUNICIPAIS DE PIRIPIRI – SINDSEMPI, É DE LIVRE E ESPONTÂNEA VONTADE E QUE CUMPRIREI TODAS AS NORMAS ESTABELECIDAS NO ESTATUTO DO SINDICATO.</h4>
            <div className="input_inline_pdf">
                <div className="input_left_pdf">
                   <span>(local e data)</span> 
                </div>
                
                <div className="input_rigth_pdf">
                   <span>(assinatura do servidor)</span> 
                </div>
            </div>

            <div className="observacoes">
                <span className="span_top">RESERVADO PARA O SINDICATO: VISTO DO SECRETARIO(A) OU DO PRESIDENTE:</span>
                <span className="span_bottom">Observações – anexar fotocópias dos documentos – RG – CPF – COMPROVANTE DE RESIDENCIA, 
                TERMO DE POSSE OU PORTARIA E ÚLTIMO CONTRA-CHEQUE</span>
            </div>
            <div className="footer">
                <span className="span_footer">
                    SEDE EM PIRIPIRI – Av. Dr. Pádua Mendes – nº 60 – Morro da Saudade
                </span>
            </div>


            </form>
            </div>
  </div>  
        </>
    )
}

export default Documentpdf
