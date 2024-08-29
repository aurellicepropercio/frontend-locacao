import React,{useState, useEffect} from 'react';
import '../../pages/global.css';
import Menu from '../../componentes/menu'
import{ FiFilePlus } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import {useNavigate,useParams} from 'react-router-dom';
import Head from '../../componentes/Head';
import api from '../../server/api';

export default function Editarcliente(){
  let { id } = useParams();
  const navigate =useNavigate();
  const [nomecliente,setNomecliente]  = useState("");
  const [endereco,setEndereco]  = useState("");
  const [contato,setContato]  = useState("");
  const [email,setEmail]  = useState("");
  const [banco,setBanco] = useState([]);
  const [status, setStatus] = useState(true);
  
  const cliente={     
    nome_cliente:nomecliente,
    endereco_cliente:endereco,
    contato_cliente:contato,
    email_cliente:email,
    id_cliente:id 
    
       
  }
  useEffect(()=>{
  
      mostrardados(id);

  },[])
  async function mostrardados(id) {
   api.get(`/cliente/${id}`)
   .then((resposta)=>{
    setNomecliente(resposta.data.nomecliente);
    setEndereco(resposta.data.endereco);
    setContato(resposta.data.contato);
    setEmail(resposta.data.email);
    
   })
      
     }

     function salvardados(e){
    e.preventDefault();

      let i=0;
      if(nomecliente=="")
      i++;
      else if(endereco=="")
      i++;
      else if(contato=="")
      i++;
      else if(email=="")
      i++;
      if(i==0)
    {
      api.put("/cliente",cliente)
      .then((resposta)=>{
          if(resposta.status==201){
            
            alert("Cliente salvo com sucesso");
            navigate('/listacliente');
          }
        })
    }else{
      alert("Verifique! Há campos vazios!")
    }
    }
 
    return(
    <div className="dashboard-container">
      
        <div className='menu'>
     
        <Menu />
        </div>
        <div className='principal'>
        <Head title="Editar cliente" />
        <div className='form-container'>
        <form className='form-cadastro' onSubmit={salvardados} >
            <input 
            type='text'
            value={nomecliente}
            onChange={e=>setNomecliente(e.target.value)}
             placeholder='Digite o nome do cliente'
              />
            <input 
                type='text' 
                value={endereco}
                onChange={e=>setEndereco(e.target.value)}
                placeholder='Informe o endereço'
             />
            <input 
                    type='number' 
                    value={contato}
                    onChange={e=>setContato(e.target.value)}
                    placeholder='Digite o numero' 
            />
            <input 
                    type='email' 
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    placeholder='Digite o email' 
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