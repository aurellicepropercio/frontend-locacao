import React,{useState,useEffect} from 'react';
import '../../pages/global.css';
import Logo from '../../assets/img/logo.jpg'
import Menu from '../../componentes/menu'
import{ FiEdit,FiTrash,FiDelete, FiFilePlus }from "react-icons/fi";
import { Bs5Circle } from "react-icons/bs";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {Link} from 'react-router-dom';
import Head from '../../componentes/Head';
import { useNavigate} from 'react-router-dom';
import api from '../../server/api'

export default function Listaestabelecimento(){
const [dados,setDados] = useState([]);
const [banco,setBanco] = useState([]);
const navigate=useNavigate();
    // const dados=[
    //     {id:1,nome:"Carlos",email:"carlos@gmail.com",senha:"123"},
    //     {id:2,nome:"Felipe",email:"felipe@gmail.com",senha:"321"},
    //     {id:3,nome:"Nilson",email:"nilson@gmail.com",senha:"321"},

    // ]
    useEffect(()=>{
      mostrardados();
    },[])

    function mostrardados()
    {
     
      api.get("/estabelecimento")
      .then((resposta)=>{
          setBanco(resposta.data.estabelecimento)
      })
      .catch((err)=>{
          alert("houve um erro ".err)
      })
    }
  
     const  apagar = (id) => {
      confirmAlert({
        title: 'Excluir Estabelecimento',
        message: 'Deseja realmente excluir esse estabelecimento?',
        buttons: [
          {
            label: 'Sim',
            onClick: () => {
              let dadosnovos = banco.filter(item => item.id !== id);
              localStorage.setItem("cd-usuarios", JSON.stringify(dadosnovos));
              setBanco(dadosnovos); // Atualiza o estado com os dados filtrados
              alert(`Você apagou o usuário id:${id}`);
            }
            
          },
          {
            label: 'Não',
            onClick: () => alert('Click No')
          }
        ]
      });
    };
  

   return(
    <div className="dashboard-container">
      
        <div className='menu'>
     
        <Menu />
        </div>
        <div className='principal'>
        <Head title="Lista de Estabelecimento" />
        <div>
        <Link to="/cadastroestabelecimento" className='btn-novo'>Novo</Link>
        </div>
        <table className="table">
           <tr>
                <th>Id</th>
                <th>Descricao</th>
                <th>Valor</th>
                <th>Localizacao</th>
                <th>Contato</th>
                <th>Responsável</th>
                <th>Foto</th>
                <th></th>
                <th></th>
            </tr>
            {
               banco.map((linha)=>{
                return(
                  <tr key={linha.toString()}>
                    <td>{linha.id}</td>    
                    <td>{linha.descricao}</td>    
                    <td>{linha.valor}</td>    
                    <td>{linha.localizacao}</td>    
                    <td>{linha.contato}</td>    
                    <td>{linha.responsavel} </td>    
                    <td>{linha.foto}</td>    
                    <td className='botoes'> 
                    <Link to={`/editarestabelecimento/${linha.id}`}>
                      <FiEdit size={18} color='#3a5795'  /> 
                    </Link> 
                    </td>    
                    <td className='botoes'> 
                          <FiTrash 
                          size={35} 
                          color='red'
                          onClick={(e)=>apagar(linha.id)} 
                          /> 
                    </td>    
                    
                  </tr>  
                )
               }) 
            }

        </table>
        </div>
    </div>

   )

}