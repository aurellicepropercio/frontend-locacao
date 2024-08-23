import React,{useState} from 'react';
import '../../pages/global.css';
import Menu from '../../componentes/menu'
import { FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import {useNavigate, Link} from 'react-router-dom';
import Head from '../../componentes/Head';
import api from '../../server/api';

export default function Cadastroestabelecimneto(){
    const navigate = useNavigate();

    const [descricao,setDescricao] = useState("");
    const [valor,setValor] = useState("");
    const [localizacao,setLocalizacao] = useState("");
    const [contato,setContato] = useState("");
    const [responsavel,setResponsavel] = useState("");
    const [foto,setFoto] = useState("");
    const Estabelecimento={
        descricao,
        valor,
        localizacao,
        contato,
        responsavel,
        foto
       
    }   
    function salvardados(e){
        e.preventDefault();
                let i=0;
                if(descricao==="")
                i++;
              else if(localizacao==="")
              i++;
              else if(valor==="")
              i++;
            if(i===0)
            {
              api.post("/Estabelecimento",Estabelecimento)
              .then((resposta)=>{
                   if(resposta.status===201){
                       alert(resposta.data.mensagem)
                   
                       navigate('/listaestabelecimento');
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
                    <Head title="Cadastro de Estabelecimento" />
                <div>
                <Link className='btn-novo'>Cancelar</Link>
                </div>

                <div className='form-container'>
                    <form className='form-cadastro' onSubmit={salvardados} >


                        <input type='text' value={descricao} onChange={e=>setDescricao(e.target.value)} placeholder='Descreva o local' />

                       <input type='number'value={valor} onChange={e=>setValor(e.target.value)} placeholder='Digite o valor' />

                        <input type='text'value={localizacao} onChange={e=>setLocalizacao(e.target.value)} placeholder='Digite a localização' />
                        
                        <input type='number'value={contato} onChange={e=>setContato(e.target.value)} placeholder='Digite o contato' />
                        
                        <input type='text'value={responsavel} onChange={e=>setResponsavel(e.target.value)} placeholder='Informe o responsavel' />
                        
                        <input type='text'value={foto} onChange={e=>setFoto(e.target.value)} placeholder='Informe o caminho da foto' />
                        
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