import React,{useState, useEffect} from 'react';
import '../../pages/global.css';
import Menu from '../../componentes/menu'
import{ FiFilePlus } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import {useNavigate,useParams} from 'react-router-dom';
import Head from '../../componentes/Head';
import api from '../../server/api';

export default function EditarEstabelecimento(){
  let { id } = useParams();
  const navigate =useNavigate();
  const [descricao,setDescricao]  = useState("");
  const [valor,setValor]  = useState("");
  const [localizacao,setLocalizacao]  = useState("");
  const [contato,setContato] = useState([]);
  const [responsavel, setResponsavel] = useState(true);
  const [foto, setFoto] = useState(true);
 
  const estabelecimento={     
      descricao,
      valor,
      localizacao,
      contato,
      responsavel,
      foto
      
  }
  useEffect(()=>{
  
      mostrardados(id);

  },[])
  async function mostrardados(id) {
   api.get(`estabelecimento/${id}`)
   .then((resposta)=>{
    setDescricao(resposta.data.descricao);
    setValor(resposta.data.valor);
    setLocalizacao(resposta.data.localizacao);
    setContato(resposta.data.contato);
    setResponsavel(resposta.data.responsavel);
    setFoto(resposta.data.foto);
    
   })
      
     }

     function salvardados(e){
    e.preventDefault();

      let i=0;
      if(descricao=="")
      i++;
      else if(valor=="")
      i++;
      else if(localizacao=="")
      i++;
      else if(contato=="")
      i++;
      else if(responsavel=="")
      i++;
      else if(foto=="")
      i++;
      if(i==0)
    {
      const banco =JSON.parse(localStorage.getItem("cd-usuarios") || "[]");
      banco.push(estabelecimento);
      localStorage.setItem("cd-usuarios",JSON.stringify(banco));
      alert("Estabelecimento salvo com sucesso");
      navigate('/listaestabelecimento');
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
        <Head title="Editar Estabelecimento" />
        <div className='form-container'>
        <form className='form-cadastro' onSubmit={salvardados} >
            <input 
            type='text'
            value={descricao}
            onChange={e=>setDescricao(e.target.value)}
             placeholder='Descreva o local'
              />
            <input 
                type='number' 
                value={valor}
                onChange={e=>setValor(e.target.value)}
                placeholder='Informe o valor'
             />
            <input 
                    type='texto' 
                    value={localizacao}
                    onChange={e=>setLocalizacao(e.target.value)}
                    placeholder='Digite a localização' 
            />
            <input 
                    type='number' 
                    value={contato}
                    onChange={e=>setContato(e.target.value)}
                    placeholder='Informe o contato' 
            />
            <input 
                    type='text' 
                    value={responsavel}
                    onChange={e=>setResponsavel(e.target.value)}
                    placeholder='Informe o responsável' 
            />
            <input 
                    type='date' 
                    value={foto}
                    onChange={e=>setFoto(e.target.value)}
                    placeholder='Informe o caminho da foto' 
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
