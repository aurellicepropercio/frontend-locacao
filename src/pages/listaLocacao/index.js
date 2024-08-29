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

export default function Listalocacao(){
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
     
      api.get("/locacao")
      .then((resposta)=>{
          setBanco(resposta.data.locacao)
      })
      .catch((err)=>{
          alert("houve um erro ".err)
      })
    }
  
     const  apagar = (id) => {
      confirmAlert({
        title: 'Excluir Locacao',
        message: 'Deseja realmente excluir essa locacao?',
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
        <Head title="Lista de Locacao" />
        <div>
        <Link to="/cadastrolocacao" className='btn-novo'>Novo</Link>
        </div>
        <table className="table">
           <tr>
                <th>Id</th>
                <th>Id_Estabelecimento</th>
                <th>Id_Cliente</th>
                <th>Valor</th>
                <th>Datainicio</th>
                <th>Horarioinicio</th>
                <th>Datafinal</th>
                <th>Horariofinal</th>
                <th>Datacadastro</th>
                <th></th>
                <th></th>
            </tr>
            {
               banco.map((linha)=>{
                return(
                  <tr key={linha.toString()}>
                    <td>{linha.id}</td>    
                    <td>{linha.id_estabelecimento}</td>    
                    <td>{linha.id_cliente}</td>    
                    <td>{linha.valor}</td>    
                    <td>{linha.datainicio}</td>    
                    <td>{linha.horarioinicio}</td>    
                    <td>{linha.datafinal}</td>    
                    <td>{linha.horariofinal}</td>    
                    <td>{linha.datacadastro}</td>    
                    <td className='botoes'> 
                    <Link to={`/editarlocacao/${linha.id}`}>
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