import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import Logo from '../../assets/logo.svg'

import NavBar from '../../components/Navbar/index'

import api from '../../services/api'

import Pdf from "react-to-pdf"

import './styles.css'


const Home = () => {
	const ref = React.createRef();

	const [results, setResults] = useState([])
	const [ search, setSearch ] = useState('')
	
	const token = localStorage.getItem('token');

  
	useEffect(()=> {

		api.get('register_filiacao', {
			headers: {
				Authorization: `Bearer ${token}`,
	
			   }
		})
		.then(response => {
			setResults(response.data.users)
            console.log(results)
			
		})
		.catch(error => console.log(error))

	},[]);


	const filteredServidor = results.filter(result => {
		return result.secretaria.toLowerCase().includes(search.toLowerCase())
	
	})

	const secretaria_name = filteredServidor.map(results => results.secretaria).find( el => el.secretaria === el.secretaria);
	console.log(filteredServidor)
    return (
        <>
			< NavBar />	
			<div className="container_home">
			<div className="container_relatorio">
			<Pdf targetRef={ref} filename={`${secretaria_name}.pdf`}>
                {({ toPdf }) => 
                    <Link to={`/list_servidor`}>
                        <button className="buttom_download" onClick={toPdf}>Gerar Pdf</button>
                    </Link>
                }
            </Pdf> 

				<h1 style={ {textAlign: 'center' ,color:'#555555'}}>Relatórios</h1>
					<div className="search">
       					  <input 
       					  type="text" 
       					  placeholder="pesquisar" 
       					  className="search-input"
       					  onChange={e => setSearch(e.target.value)}
       					  />
     	 			</div>
					  <h4 style={ {textAlign: 'center',fontSize: 24 ,color:'#555555'}}>servidores cadastrados : {filteredServidor.length}</h4>

				<div className="container_table" ref={ref}>
            	  <div className="table_pdf">
				  <div className="cabecalho">
                            <h3>SINDICATO DOS SERVIDORES PÚBLICOS MUNICIPAIS DE PIRIPIRI – SINDSEMPI</h3>
                            <h3>ENDEREÇO: AVENIDA Dr PADUA MENDES, Nº 60</h3>
                            <h3>CEP: 64260-000 – BAIRRO CENTRO – PIRIPIRI /PI – BRASIL</h3>
                            <h3>CNPJ – 25.386.159/0001-17</h3>
                            <h4>Telefones: (86) 9 99030326  / 9 8191 1600 / 9 95937302 </h4>
                            <img src={Logo} className="logo" alt="logo"/>
                        </div>  
					<table>
						<thead>
							<tr className="table100-head">
								<th className="column1">Matrícula</th>
								<th className="column3">Secretaria</th>
								<th className="column3">Nome</th>
							</tr>
						</thead>
						<tbody>
							{filteredServidor.map(result => (
								<tr key={result._id}>
									
									<td className="column1">{result.matricula}</td>
									<td className="column2">{result.secretaria}</td>
									<td className="column3">{result.nome}</td>
									
								</tr>	
							
							))}
                               
						</tbody>
					</table>
			</div>
			    </div>
			</div>			
			</div>				
	</>
)					
}
export default Home;
