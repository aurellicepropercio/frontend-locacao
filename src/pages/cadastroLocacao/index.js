import React,{useState} from 'react';
import '../../pages/global.css';
import Menu from '../../componentes/menu'
import { FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import {useNavigate, Link} from 'react-router-dom';
import Head from '../../componentes/Head';
import api from '../../server/api';

export default function Cadastrolocacao(){
    const navigate = useNavigate();

    const [id_estabelecimento,setId_estabelecimento] = useState("");
    const [id_cliente,setId_cliente] = useState("");
    const [valor,setValor] = useState("");
    const [datainicio,setDatainicio] = useState("");
    const [horarioinicio,setHorarioinicio] = useState("");
    const [datafinal,setDatafinal] = useState("");
    const [horariofinal,setHorariofinal] = useState("");
    const [datacadastro,setDatacadastro] = useState("");
    const locacao={
        id_estabelecimento,
        id_cliente,
        valor,
        datainicio,
        horarioinicio,
        datafinal,
        horariofinal,
        datacadastro
    }   
    function salvardados(e){
        e.preventDefault();
                let i=0;
                if(id_cliente==="")
                i++;
              else if(id_estabelecimento==="")
              i++;
              else if(valor==="")
              i++;
            if(i===0)
            {
              api.post("/locacao",locacao)
              .then((resposta)=>{
                   if(resposta.status===201){
                       alert(resposta.data.mensagem)
                   
                       navigate('/listalocacao');
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
                    <Head title="Cadastro de Locação" />
                <div>
                <Link className='btn-novo'>Cancelar</Link>
                </div>

                <div className='form-container'>
                    <form className='form-cadastro' onSubmit={salvardados} >


                        <input type='text' value={id_estabelecimento} onChange={e=>setId_estabelecimento(e.target.value)} placeholder='Indique o id_estabelecimento' />

                        <input type='text' value={id_cliente} onChange={e=>setId_cliente(e.target.value)} placeholder='Digite o id_cliente' />

                        <input type='number'value={valor} onChange={e=>setValor(e.target.value)} placeholder='Digite o valor' />

                        <input type='date'value={datainicio} onChange={e=>setDatainicio(e.target.value)} placeholder='Digite a datainicio' />
                        
                        <input type='time'value={horarioinicio} onChange={e=>setHorarioinicio(e.target.value)} placeholder='Digite o horarioinicio' />
                        
                        <input type='date'value={datafinal} onChange={e=>setDatafinal(e.target.value)} placeholder='Digite a datafinal' />
                        
                        <input type='time'value={horariofinal} onChange={e=>setHorariofinal(e.target.value)} placeholder='Digite o horariofinal' />
                        
                        <input type='date'value={datacadastro} onChange={e=>setDatacadastro(e.target.value)} placeholder='Digite a data' />
                    
                    
                       <div className='pai-botton'>
                            <button className='btn-save'>
                                <FaSave/>
                                Salvar
                    
                                </button>
                            <button className='btn-cancel'>
                                <MdCancel />
                                Cancelar
                    
                                </button>
                    
                       </div>
                    </form>
                  
                </div>

            </div>
        </div>

   )

}