import React,{useState, useEffect} from 'react';
import '../../pages/global.css';
import Menu from '../../componentes/menu'
import{ FiFilePlus } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import {useNavigate,useParams} from 'react-router-dom';
import Head from '../../componentes/Head';
import api from '../../server/api';

export default function Editarusuario(){
  let { id } = useParams();
  const navigate =useNavigate();
  const [nome,setNome]  = useState("");
  const [email,setEmail]  = useState("");
  const [senha,setSenha]  = useState("");
  const [banco,setBanco] = useState([]);
  const [status, setStatus] = useState(true);
  
  const usuario={     
    nome_usuario:nome,
    email_usuario:email,
    senha_usuario:senha,
    id_usuario:id 
      
  }
  useEffect(()=>{
  
      mostrardados(id);

  },[])
  async function mostrardados(id) {
   api.get(`/usuario/${id}`)
   .then((resposta)=>{
    setNome(resposta.data.nome);
    setEmail(resposta.data.email);
    setSenha(resposta.data.senha);
   })
      
     }

     function salvardados(e){
    e.preventDefault();

      let i=0;
      if(nome=="")
      i++;
      else if(email=="")
      i++;
      else if(senha=="")
      i++;
      if(i==0)
    {
    api.put("/usuario",usuario)
    .then((resposta)=>{
      if(resposta.status==201){
        
        alert("Usuário salvo com sucesso");
        navigate('/listausuario');
      }
    })
    }
    else{
      alert("Verifique! Há campos vazios!")
    }
    }
 
    return(
    <div className="dashboard-container">
      
        <div className='menu'>
     
        <Menu />
        </div>
        <div className='principal'>
        <Head title="Editar Usuário" />
        <div className='form-container'>
        <form className='form-cadastro' onSubmit={salvardados} >
            <input 
            type='text'
            value={nome}
            onChange={e=>setNome(e.target.value)}
             placeholder='Digite o nome do usuário'
              />
            <input 
                type='email' 
                value={email}
                onChange={e=>setEmail(e.target.value)}
                placeholder='Digite o email'
             />
            <input 
                    type='password' 
                    value={senha}
                    onChange={e=>setSenha(e.target.value)}
                    placeholder='Digite a senha' 
            />
            
            <div className='acao'>
            <button className='btn-save'>
               <FaSave />
              Salvar
            </button>
            <button className='btn-cancel'>
            <MdCancel />
              Cancelar</button>
            </div>
        </form>
   
        </div>
        </div>
    </div>

   )

}