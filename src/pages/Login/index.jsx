import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import { Input, Space, message } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, MailOutlined, LockOutlined } from '@ant-design/icons'

import './styles.css'

import Logo from '../../assets/logo.svg'


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const history = useHistory();

  const key = 'updatable';

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = { email, password };

    if (email === '' || password === '') {

      message.loading({ content: 'Processando...', key });
      setTimeout(() => {
        message.warning({ content: 'Digite Email e Senha', key, duration: 2 });
      }, 1000);
    };
    
    
    if(email && password !== '') {

        try {
            const response = await api.post('/auth/authenticate', data);
            const { token } = response.data;
          
            
            localStorage.setItem('token', token);
            message.loading({ content: 'Processando...', key });
              setTimeout(() => {
                message.success({ content: 'Acesso Liberado', key, duration: 2 });

                 history.push('/list_servidor');
              }, 1000);

        } catch (error) {
            
          message.loading({ content: 'processando...', key });
          setTimeout(() => {
            message.error({ content: 'Email ou Senha Inválido', key, duration: 2 });
          }, 1000);
        };
                                      
    }
    
}

    return (
        <>
          <div className="container_login">
            <div className="box">
                <img src={Logo} style={{width: 150, marginTop: 20}} alt="logo"/>    
                <h1 style={{marginTop: 20}}>Faça seu Login</h1>
                <form onSubmit={handleLogin}>
                  <Space direction="vertical" style={{marginTop: 50, width:'80%'}}>

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
                   
                  <button type="submit" className="button_success">Entrar</button>
                </form> 
            </div>
          </div>
        </>
    )
}

export default Login
