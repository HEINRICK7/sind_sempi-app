import React, { useEffect, useState } from 'react'

import NavBar from '../Navbar/index'

import Pdf from "react-to-pdf"

import './styles.css'

import api from '../../services/api'

import { Link, useParams } from 'react-router-dom'

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
          < NavBar />
          <div className="container_pdfViewer">
                <Pdf targetRef={ref} filename={`${models.nome}.pdf`}>
                    {({ toPdf }) => 
                        <Link to={`/list_servidor`}>
                            <button className="buttom_download" onClick={toPdf}>Gerar Pdf</button>
                        </Link>
                    }
                </Pdf> 

                <div className="formulario_servidor_pdf" ref={ref}>
                <form>
                    <div className="inputs_pdf"> 
                        <div className="cabecalho">
                            <h3>SINDICATO DOS SERVIDORES PÚBLICOS MUNICIPAIS DE PIRIPIRI – SINDSEMPI</h3>
                            <h3>ENDEREÇO: AVENIDA Dr PADUA MENDES, Nº 60</h3>
                            <h3>CEP: 64260-000 – BAIRRO CENTRO – PIRIPIRI /PI – BRASIL</h3>
                            <h3>CNPJ – 25.386.159/0001-17</h3>
                            <h4>Telefones: (86) 9 99030326  / 9 8191 1600 / 9 95937302 </h4>
                            <img src={Logo} className="logo" alt="logo"/>
                        </div>
                        <h2>FICHA DE FILIAÇÃO</h2>
                        <div className="inputs_block">

                            <div className="input_md1_pdf">
                                <div className="input_matricula_pdf">
                                    <span className="float_matricula">matrícula</span>    
                                    <input  
                                    type="text" 
                                    name="matricula"
                                    value={models.matricula}
                                    />
                                </div>
                                <div className="input_nome_pdf">
                                    <span className="float_nome">nome do servidor</span>    
                                    <input 
                                    type="text" 
                                    name="nome"
                                    value={models.nome}
                                    />
                                </div>
                                <div className="input_nascimento_pdf">
                                    <span className="float_nascimento">data.nasc</span>
                                    <input 
                                    type="text" 
                                    value={models.data_nasc}
                                    />
                                </div>
                            </div>

                            <div className="input_md2_pdf">
                                <div className="input_cpf_pdf" >
                                    <span className="float_cpf">cpf</span> 
                                    <input 
                                    type="text" 
                                    name="cpf"
                                    placeholder="CPF"
                                    value={models.cpf}
                                    />
                                </div>
                                <div className="input_rg_pdf" >
                                    <span className="float_rg">rg</span> 
                                    <input 
                                    type="text" 
                                    value={models.rg}
                                    />
                                </div>
                                <div className="input_uf_pdf">
                                    <span className="float_uf">uf</span>
                                    <input 
                                    type="text" 
                                    name="uf"
                                    value={models.uf_servidor}
                                    />
                                </div>
                                <div className="input_endereco_pdf">
                                    <span className="float_endereco">endereço</span>
                                    <input 
                                    type="text" 
                                    name="endereco"
                                    value={models.endereco}
                                    />
                                </div>
                            </div>

                            <div className="input_md3_pdf">
                                <div className="input_bairro_pdf" >
                                    <span className="float_bairro">bairro</span>
                                    <input 
                                    type="text" 
                                    name="bairro"
                                    value={models.bairro}
                                    />
                                </div>
                                <div className="input_cidade_pdf">
                                    <span className="float_cidade">cidade</span>
                                    <input 
                                    type="text" 
                                    name="cidade"
                                    value={models.cidade}
                                    />
                                </div>
                                <div className="input_cep_pdf">
                                    <span className="float_cep">cep</span>
                                    <input 
                                    type="text" 
                                    name="cep"
                                    value={models.cep}
                                    />
                                </div>
                            </div>
                                <div className="input_md3_1_pdf">
                                    <div className="input_escolaridade_pdf">
                                    <span className="float_escolaridade">escolaridade</span>
                                    <input 
                                    type="text" 
                                    name="escolaridade"
                                    value={models.escolaridade}
                                    />
                                </div>
                                    <div className="input_pisPasep_pdf">
                                    <span className="float_pisPasep">pis/pasep</span>
                                    <input 
                                    type="text" 
                                    name="pis_pasep"
                                    value={models.pis_pasep}
                                />
                                </div>
                                    <div className="input_estCivil_pdf">
                                    <span className="float_estCivil">est.civil</span>
                                    <input 
                                    type="text" 
                                    name="est_civil"
                                    value={models.est_civil}
                                    />
                                </div>
                                </div>

                            <div className="input_md4_pdf">
                                <div className="input_nomeConjuge_pdf">
                                    <span className="float_nomeConjuge">nome do cônjuge</span>
                                    <input 
                                    type="text" 
                                    name="nome_conjuge"
                                    value={models.nome_conjuge}
                                    />
                                </div>
                                <div className="input_telResidencial_pdf" >
                                    <span className="float_telResidencial">tel.residencial</span>
                                    <input
                                    type="text" 
                                    nome="tel_residencial"
                                    value={models.tel_residencial}
                                    />
                                </div>
                                <div className="input_telCelular_pdf">
                                    <span className="float_telCelular">tel.Celular</span>
                                    <input 
                                    type="text" 
                                    name="tel_celular"
                                    value={models.tel_celular}
                                    />
                                </div>
                            </div>

                            <div className="input_md5_pdf">
                                <div className="input_email_pdf" >
                                    <span className="float_email">email</span>   
                                    <input 
                                    type="text" 
                                    name="email"
                                    placeholder="E-MAIL"
                                    value={models.email}
                                    />
                                </div>
                            </div>
                            
                            <div className="input_md6_pdf">
                                <h5>NOME DOS DEPENDENTES: </h5>
                                <div className="input_dependentes_pdf" >
                                    <span className="float_dependentes">nome(s)</span>   
                                    <input 
                                    type="text" 
                                    value={models.nome_dependentes}
                                    />
                                </div>
                            </div>
                            <h5>DADOS CADASTRAIS: </h5>
                            <div className="input_md7_pdf">
                             
                                <div className="input_orgao_empregador_pdf" >
                                    <span className="float_orgao_empregador">órgão empregador</span>   
                                    <input 
                                    type="text" 
                                    name="orgao_empregador"
                                    value={models.orgao_empregador}
                                    />
                                </div>    
                                <div className="input_municipio_pdf" >
                                    <span className="float_municipio">município</span>  
                                    <input 
                                    type="text" 
                                    name="municipio"
                                    value={models.municipio}
                                />
                                </div>
                                <div className="input_uf_cadastrais_pdf" >
                                    <span className="float_uf_cadastrais">uf</span>  
                                    <input 
                                    type="text" 
                                    name="uf"
                                    value={models.uf}
                                    />
                                </div>
                                <div className="input_data_admissao_pdf" >
                                    <span className="float_data_admissao">admissão</span>
                                    <input 
                                    type="text" 
                                    name="data_admissao"
                                    value={models.data_admissao}
                                    />
                                </div>
                            </div>
                            <div className="input_md8_pdf">
                                <div className="input_telefone_pdf" >
                                    <span className="float_telefone">telefone</span>
                                    <input 
                                    type="text" 
                                    name="telefone"
                                    value={models.telefone}
                                    />
                                </div>
                                <div className="input_secretaria_pdf" >
                                    <span className="float_secretaria">secretaria</span>
                                    <input 
                                    type="text" 
                                    name="secretaria"
                                    value={models.secretaria}
                                    />
                                </div>
                                <div className="input_departamento_pdf" >
                                    <span className="float_departamento">departamento</span>
                                    <input 
                                    type="text" 
                                    name="departamento"
                                    placeholder="DEPARTAMENTO"
                                    value={models.departamento}
                                    />
                                </div>
                                <div className="input_carga_horaria_pdf">
                                    <span className="float_carga_horaria">carga horaria</span>
                                    <input 
                                    type="text" 
                                    name="carga_horaria"
                                    value={models.carga_horaria}
                                    />
                                </div>
                            </div>
                            <div className="input_md9_pdf">
                                <div className="input_cargo_funcao_pdf" >
                                    <span className="float_cargo_funcao">cargo/função</span>
                                    <input
                                    type="text" 
                                    name="cargo_funcao"
                                    placeholder="CARGO/FUNÇÃO"
                                    value={models.cargo_funcao}
                                    />
                                </div>
                                <div className="input_salario_base_pdf" >
                                    <span className="float_salario_base">salário base</span>
                                    <input 
                                    type="text" 
                                    name="salario_base"
                                    placeholder="SALARIO BASE"
                                    value={models.salario_base}
                                    />
                                </div>
                            </div>
                        </div>
                        <h4 style={{width: '100%', padding: '5px'}}>DECLARO PARA TODOS OS FINS DE DIREITO QUE A MINHA FILIAÇÃO AO SINDICATO DOS SERVIDORES PÚBLICOS MUNICIPAIS DE PIRIPIRI – SINDSEMPI, É DE LIVRE E ESPONTÂNEA VONTADE E QUE CUMPRIREI TODAS AS NORMAS ESTABELECIDAS NO ESTATUTO DO SINDICATO.</h4>
                        <div className="input_inline_pdf">
                            <div className="input_left_pdf">
                                <span className="float_local_data">(local e data)</span>
                                <input 
                                 type="text" 
                                 />
                            </div>

                            <div className="input_rigth_pdf" style={{paddingRight: '15px'}}>
                               <span className="float_ass_servidor">(assinatura do servidor)</span> 
                               <input 
                                 type="text" 
                                 />
                            </div>
                        </div>

                        <div className="observacoes">
                            <span className="span_top">RESERVADO PARA O SINDICATO: VISTO DO SECRETARIO(A) OU DO PRESIDENTE:</span>
                            <div className="area_observacao"></div>
                            <span className="span_bottom">Observações – anexar fotocópias dos documentos – RG – CPF – COMPROVANTE DE RESIDENCIA, 
                            TERMO DE POSSE OU PORTARIA E ÚLTIMO CONTRA-CHEQUE</span>
                        </div>
                        <div className="footer_pd">
                            <span className="span_footer">
                                SEDE EM PIRIPIRI – Av. Dr. Pádua Mendes – nº 60 – Morro da Saudade
                            </span>
                        </div>

                    </div>
                </form>
            </div>
          </div>  
        </>
    )
}

export default Documentpdf
