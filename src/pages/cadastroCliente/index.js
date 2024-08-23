import React,{useState} from 'react';
import '../../pages/global.css';
import Menu from '../../componentes/menu'
import { FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import {useNavigate, Link} from 'react-router-dom';
import Head from '../../componentes/Head';
import api from '../../server/api';

export default function Cadastrocliente(){
    const navigate = useNavigate();

    const [nomecliente,setNomecliente] = useState("");
    const [endereco,setEndereco] = useState("");
    const [contato,setContato] = useState("");
    const [email,setEmail] = useState("");
    const cliente={
      nomecliente, endereco, contato, email
    }
    function salvardados(e){
        e.preventDefault();
    //    console.log(usuario);
    //    if(nome=="")
    //    alert("Preencha o campo nome")
    //    else if(email=="")
    //    alert("Preencha o campo email")
    //    else if(senha=="")
    //    alert("Preencha o campo senha")
    //    else{
    //     const banco =JSON.parse( localStorage.getItem("cd-usuarios") || "[]");
    //    banco.push(usuario);
    //    localStorage.setItem("cd-usuarios",JSON.stringify(banco));
    //    alert("Usuario salvo com sucesso!");
    //    navigate('/listausuario')
    //    }
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
                api.post("/cliente",cliente)
                .then((resposta)=>{
                     if(resposta.status===201){
                         alert(resposta.data.mensagem)
                     
                         navigate('/listacliente');
                     }
                })
              }else{
                alert("Verifique! Há campos vazios!")
              }}

     return(
        <div className="dashboard-container">
      
            <div className='menu'>
                <Menu />
            </div>
                <div className='principal'>
                    <Head title="Cadastro de Usuário" />
                <div>
                <Link className='btn-novo'>Cancelar</Link>
                </div>

                <div className='form-container'>
                    <form className='form-cadastro' onSubmit={salvardados} >
                        <input type='text' value={nome} onChange={e=>setNome(e.target.value)} placeholder='Digite o nome do usuário' />

                        <input type='email' value={email} onChange={e=>setEmail(e.target.value)} placeholder='Digite o email' />

                        <input type='password'value={senha} onChange={e=>setSenha(e.target.value)} placeholder='Digite a senha' />
                    
                    
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