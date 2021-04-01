import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import NavBar from '../../components/Navbar/index'

import { EditOutlined, DeleteOutlined, PrinterOutlined } from '@ant-design/icons';


import api from '../../services/api'

import './styles.css'


const Home = () => {

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
			console.log(response.data)
		})
		.catch(error => console.log(error))

	},[token]);

	const handleChange = (e) => {
		setSearch(e.target.value)
	  }
	
	const handleDelete = async (_id) => {
		if(window.confirm('Voce realmente deseja deletar essa matricula?') === true)	
       {

          await api.delete(`register_filiacao/${_id}`,{
			headers: {
				Authorization: `Bearer ${token}`,
	
			   }
          })
		  
          setResults(results.filter(result => result._id !== _id)) 
      }else{
          console.log('Cancelar')
      }
    } 
	

	const filteredServidor = results.filter(result => 
		result.nome.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
			< NavBar />	
			<div className="container_home">
				<h1 style={{ marginBottom: 50, textAlign: 'center' ,color:'#555555'}}>Listar Servidores</h1>
            	<div className="table">
				
					<div className="search">
       					<form>
       					  <input 
       					  type="text" 
       					  placeholder="pesquisar" 
       					  className="search-input"
       					  onChange={handleChange}
       					  />
       					</form>
     	 			</div>
					<table>
						<thead>
							<tr className="table100-head">
								<th className="column1">Matrícula</th>
								<th className="column2">CPF</th>
								<th className="column3">Nome</th>
								<th className="column4">Editar</th>
								<th className="column5">Apagar</th>
								<th className="column6">Imprimir</th>
							</tr>
						</thead>
						<tbody>
							{filteredServidor.map(result => (
								<tr key={result._id}>
									
									<td className="column1">{result.matricula}</td>
									<td className="column2">{result.cpf}</td>
									<td className="column3">{result.nome}</td>
									
									<td className="column4">
										<Link to={`./edit_servidor/${result._id}`}>
											<button className="button_editar" >
												< EditOutlined style={{fontSize: 18, color:" #077bc9"}} />
											</button>
										</Link>
									</td>
									<td className="column5">
        
										<button 
										 className="button_apagar"
										 onClick={(()=>{ handleDelete(result._id)})}>
										 <DeleteOutlined className="icon_apagar"  
										 style={{fontSize: 18, color:" #d41717"}}/>
										</button>

									</td>

									<td className="column6">
										<Link to={`./document_pdf/${result._id}`}>
											<button 
											 className="button_imprimir">
											  <PrinterOutlined className="icon_imprimir"
											 style={{fontSize: 18, color:" #049445"}}/>
											</button>
											
										</Link>
										
									</td>
								</tr>
							))}
                               
						</tbody>
					</table>
			</div>
			</div>			
							
	</>
)					
}
export default Home;
