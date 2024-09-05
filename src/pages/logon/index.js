import React, {useState} from 'react';
import './styles.css'
import Logo from '../../assets/img/logo.jpg'
import {useNavigate} from 'react-router-dom';
import api from '../../server/api';



export default function Logon(){
const navigate = useNavigate();
const [email,setEmail]=useState();
const [senha,setSenha]=useState();


const usuario = {
     email_usuario:email,
     senha_usuario:senha
}

const logar =(e)=>{
    e.preventDefault();
     api.post("/usuario/login",usuario)
     .then(resposta=>{
        alert(resposta.status)
        if(resposta.status==201){
            navigate('/dashboard');
        }

     })
    
    }

    return(
    <div className="logon-container">
        <div className='logo'>
           <img src={Logo} />
        </div>
        <section className="form">
            <h1>Faça seu login</h1>
            <form onSubmit={logar} >
                <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
               
                <input placeholder="Senha" type='password' value={senha} onChange={e=>setSenha(e.target.value)}/>
              

                <button type="submit">Entrar</button>
                <a href="#">Novo Cadastro</a>
            </form>
        </section>
    </div>

   )

}