import React,{useState, useEffect} from 'react';
import '../../pages/global.css';
import Menu from '../../componentes/menu'
import{ FiFilePlus } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import {useNavigate,useParams} from 'react-router-dom';
import Head from '../../componentes/Head';
import api from '../../server/api';

export default function editarlocacao(){
  let { id } = useParams();
  const navigate =useNavigate();
  const [id_estabelecimento,setId_estabelecimento]  = useState("");
  const [id_cliente,setId_cliente]  = useState("");
  const [valor,setValor]  = useState("");
  const [datainicio,setDatainicio] = useState([]);
  const [horarioinicio, setHorarioinicio] = useState(true);
  const [datafinal, setDatafinal] = useState(true);
  const [horariodinal, setHorariofinal] = useState(true);
  const [datacadastro, setDatacadastro] = useState(true);
  
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
  useEffect(()=>{
  
      mostrardados(id);

  },[])
  async function mostrardados(id) {
   api.get(`/locacao/${id}`)
   .then((resposta)=>{
    setNome(resposta.data.id_estabelecimento);
    setEmail(resposta.data.id_cliente);
    setSenha(resposta.data.valor);
    setSenha(resposta.data.datainicio);
    setSenha(resposta.data.horarioinicio);
    setSenha(resposta.data.datafinal);
    setSenha(resposta.data.horariofinal);
    setSenha(resposta.data.datacadastro);
   })
      
     }

     function salvardados(e){
    e.preventDefault();

      let i=0;
      if(id_estabelecimento=="")
      i++;
      else if(id_cliente=="")
      i++;
      else if(valor=="")
      i++;
      if(i==0)
    {
      const banco =JSON.parse(localStorage.getItem("cd-usuarios") || "[]");
      banco.push(usuario);
      localStorage.setItem("cd-usuarios",JSON.stringify(banco));
      alert("Locacao salva com sucesso");
      navigate('/listalocacao');
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
        <Head title="Editar Locação" />
        <div className='form-container'>
        <form className='form-cadastro' onSubmit={salvardados} >
            <input 
            type='text'
            value={id_estabelecimento}
            onChange={e=>setId_estabelecimento(e.target.value)}
             placeholder='Informe a locação'
              />
            <input 
                type='text' 
                value={id_cliente}
                onChange={e=>setCliente(e.target.value)}
                placeholder='Digite o nome do cliente'
             />
            <input 
                    type='number' 
                    value={valor}
                    onChange={e=>setValor(e.target.value)}
                    placeholder='Informe o valor' 
            />
            <input 
                    type='date' 
                    value={datainicio}
                    onChange={e=>setDatainicio(e.target.value)}
                    placeholder='Informe a data inicial' 
            />
            <input 
                    type='time' 
                    value={horarioinicio}
                    onChange={e=>setHorarioinicio(e.target.value)}
                    placeholder='Informe o horário' 
            />
            <input 
                    type='date' 
                    value={datafinal}
                    onChange={e=>setDatafinal(e.target.value)}
                    placeholder='Informe a data do término' 
            />
            <input 
                    type='time' 
                    value={horariofinal}
                    onChange={e=>setHorariofinal(e.target.value)}
                    placeholder='Informe o horárion final' 
            />
            <input 
                    type='date' 
                    value={datacadastro}
                    onChange={e=>setDatacadastro(e.target.value)}
                    placeholder='Informe a data' 
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
