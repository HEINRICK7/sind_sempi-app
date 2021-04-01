import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, MailOutlined, LockOutlined } from '@ant-design/icons'

import './styles.css'

import Logo from '../../assets/logo.svg'


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = { email, password };

    if (email === '' || password === '') {

        window.alert('Digite Email e Senha')
    }
    
    if(email !== '') {

        try {
            const response = await api.post('/auth/authenticate', data);
            const { token } = response.data;

            console.log(token)
          
            
            localStorage.setItem('token', token);

            history.push('/list_servidor');
    
        } catch (error) {
            
            //toast
           
          
        }
                                      
    }
    
}

    return (
        <>
          <div className="container_login">
            <div className="box">
                <img src={Logo} style={{width: 150, marginTop: 20}} alt="logo"/>    
                <h1 style={{marginTop: 20}}>Faça seu Login</h1>
                <form onSubmit={handleLogin}>
                  <Space direction="horizontal" style={{marginTop: 50}}>

                      <Input
                        placeholder="Seu Email"
                        prefix={<MailOutlined />}
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        name="email"
                      />
                      <Input.Password
                        placeholder="Seu Password"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        prefix={<LockOutlined />}
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        name="password"
                      />
    
                  </Space>
                   
                  <button type="submit" className="button_login">Entrar</button>
                </form> 
            </div>
          </div>
        </>
    )
}

export default Login
